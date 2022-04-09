import React, { useEffect, useState } from 'react'
import { formatDate, getMonth } from 'Utils/time'
import { ChartLayout } from './ChartLayout'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { TableLayout1, TableLayoutAMDIndex } from './TableLayout1'
import { isEmpty } from 'Utils/string'

export default function Amdindex(props) {

    const { getIndicesData } = useStoreItem()
    const { initAmdIndicesGraph, initAmdIndexTableData } = initStoreItem()

    const _graphData = getIndicesData?.amdIndicesGraph || []
    const _tableData = getIndicesData?.amdIndexTableData || {}

    const values = _graphData?.map(item => parseFloat(item?.attributes?.value))
    const labels = _graphData?.map(item => `${getMonth(item?.attributes?.date)} ${(new Date(item?.attributes?.date)).getFullYear()}`)

    console.log(_tableData)


    useEffect(() => {
        if (_graphData.length <= 0) {
            initAmdIndicesGraph()
        }
        if (isEmpty(_tableData)) {
            initAmdIndexTableData()
        }
    }, [])



    // const [labels, setLabels] = useState(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"])
    // const [values, setValues] = useState([33, 53, 85, 41, 44, 65])

    const index_current_date = formatDate(new Date())
    const index_current_value = '1,046.42'
    const since_inception_total_return = '4.65%'

    return (
        <>
            <ChartLayout
                index_current_date={index_current_date}
                index_current_value={index_current_value}
                since_inception_total_return={since_inception_total_return}
                labels={labels}
                values={values}
            />
            <TableLayout1
                description={"Dimension Armenia AMD Bond Index comprises bonds issued by the Armenian Government and Armenian corporations meeting the index’s eligibility criteria. The index is rebalanced monthly and is market value weighted, where the market value of Armenian Government bonds is capped at 60% of the aggregate index. "}
            
            />
            <TableLayoutAMDIndex
                
            />

        </>
    )
}


