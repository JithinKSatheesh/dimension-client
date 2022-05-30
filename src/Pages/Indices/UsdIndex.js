import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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

    const {t} = useTranslation()
    const { getIndicesData, getConfigs } = useStoreItem()
    const { initUsdIndicesGraph, initUsdIndexTableData, initUsdIndicesFactsheets, initAllConfigs} = initStoreItem()

    const configs = getConfigs?.configs?.indices?.usd
    const _tableData = configs?.indices_usd_table || {}
    const _pdfData = configs?.indices_usd_factsheet|| []
    // const _graphData = getIndicesData?.usdIndicesGraph || []
    // const _pdfData = getIndicesData?.usdIndicesFactsheets || []

    const graphData = _tableData?.graph_JSON_format || {}
    const _graphData = JSON.parse(graphData)
    const values = Object.keys(_graphData)?.map(key => parseFloat(_graphData[key]))
    const labels = Object.keys(_graphData)?.map(key => key)

    // const values = _graphData?.map(item => parseFloat(item?.attributes?.value))
    // const labels = _graphData?.map(item => `${getMonth(item?.attributes?.date)} ${(new Date(item?.attributes?.date)).getFullYear()}`)

    console.log(_pdfData)


    useEffect(() => {
        // if (_graphData.length <= 0) {
        //     initUsdIndicesGraph()
        // }
        // if (_pdfData.length <= 0) {
        //     initUsdIndicesFactsheets()
        // }
        // if (isEmpty(_tableData)) {
        //     initUsdIndexTableData()
        // }
    }, [])



    // const [labels, setLabels] = useState(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"])
    // const [values, setValues] = useState([33, 53, 85, 41, 44, 65])

    const index_current_date = labels?.[labels?.length - 1]
    const index_current_value = values?.[values?.length - 1]
    const since_inception_total_return = _tableData?.index_performance_since_inception

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
                        disclaimer={_tableData?.desclaimer}
                    />
                </>}
            <div className="flex flex-wrap">
                <div className="w-full xl:w-6/12 order-2 xl:order-1">
                    <div className="text-2xl text-dark-blue font-bold py-8">
                        {t("Index Description")}
                    </div>
                    <div className=" text-dark-blue pb-8 text-sm">
                        {_tableData?.index_description}
                        {/* Dimension Armenia USD Corporate Bond Index comprises bonds issued by Armenian corporations meeting the index’s eligibility criteria. The index is rebalanced monthly and is market value weighted. */}
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
                <div className="w-full xl:w-6/12 order-2 xl:order-1">
                    <div className='xl:pl-12'>
                        {isEmpty(_tableData) ?
                            <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                            :
                            <>
                                <div className="mt-16">
                                    <TableLayout1
                                        data={_tableData}
                                        />
                                </div>
                                <div className="pt-8">
                                    <TableLayoutAMDIndex
                                        showBond={false}
                                        data={_tableData}
                                    />
                                </div>
                            </>
                        }
                    </div>

                </div>
            </div>


        </>
    )
}