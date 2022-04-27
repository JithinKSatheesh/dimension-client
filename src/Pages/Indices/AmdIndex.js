import React, { useEffect, useState } from 'react'
import { formatDate, getMonth } from 'Utils/time'
import { ChartLayout } from './ChartLayout'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { TableLayout1, TableLayoutAMDIndex } from './TableLayout1'
import { isEmpty } from 'Utils/string'

import { ThreeDots } from 'react-loader-spinner'

import { FactSheetLayout } from './FactSheetLayout'

export default function Amdindex(props) {

    const { getIndicesData } = useStoreItem()
    const { initAmdIndicesGraph, initAmdIndexTableData, initAmdIndicesFactsheets } = initStoreItem()

    const _graphData = getIndicesData?.amdIndicesGraph || []
    const _tableData = getIndicesData?.amdIndexTableData || {}
    const _pdfData = getIndicesData?.amdIndicesFactsheets || []

    const values = _graphData?.map(item => parseFloat(item?.attributes?.value))
    const labels = _graphData?.map(item => `${getMonth(item?.attributes?.date)} ${(new Date(item?.attributes?.date)).getFullYear()}`)

    console.log(_pdfData)


    useEffect(() => {
        if (_graphData.length <= 0) {
            initAmdIndicesGraph()
        }
        if (_pdfData.length <= 0) {
            initAmdIndicesFactsheets()
        }
        if (isEmpty(_tableData)) {
            initAmdIndexTableData()
        }
    }, [])



    // const [labels, setLabels] = useState(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"])
    // const [values, setValues] = useState([33, 53, 85, 41, 44, 65])

    const index_current_date = labels?.[labels?.length - 1]
    const index_current_value = values?.[values?.length - 1]
    const since_inception_total_return = _tableData?.attributes?.index_performance_since_inception

    return (
        <>
            {_graphData?.length <= 0 ?
                <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                :
                <>
                    <ChartLayout
                        index_current_date={index_current_date}
                        index_current_value={index_current_value}
                        since_inception_total_return={since_inception_total_return}
                        labels={labels}
                        values={values}
                    />
                </>}
            <div className="flex flex-wrap">
                <div className="w-full xl:w-6/12 order-2 xl:order-1">
                    <div className="text-xl text-dark-blue font-bold py-5">
                        Index Description
                    </div>
                    <div className=" text-blue pb-8 text-xs max-w-lg">
                        Dimension Armenia AMD Bond Index comprises bonds issued by the Armenian Government and Armenian corporations meeting the index’s eligibility criteria. The index is rebalanced monthly and is market value weighted, where the market value of Armenian Government bonds is capped at 60% of the aggregate index.
                    </div>
                    <div>
                        {_pdfData?.length <= 0 ?
                            <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                            :
                            <FactSheetLayout
                                data={_pdfData}
                            />
                        }
                    </div>
                </div>
                <div className="w-full xl:w-6/12 order-1 xl:order-2">
                    <div className='xl:pl-12'>

                        {isEmpty(_tableData) ?
                            <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                            :
                            <>
                                <div className="mt-16">
                                    <TableLayout1
                                        data={_tableData?.attributes}
                                    />
                                </div>
                                <div className="pt-8">
                                    <TableLayoutAMDIndex
                                        data={_tableData?.attributes}
                                    />
                                </div>
                            </>}
                    </div>

                </div>
            </div>
        </>
    )
}