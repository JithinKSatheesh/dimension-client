import React from 'react';

export const TableLayout1 = (props) => {

    const {description, data} = props
    

    return (
        <div className=''>
            <div className=" text-dark-blue font-bold text-sm">
                Index Performance
            </div>
            <div className="overflow-x-scroll py-4">
                <table className="border-collapse border border-slate-400  table-auto">
                    <thead>
                        <tr>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm "></th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm ">1&nbsp;Month</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm ">3&nbsp;Month</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm ">6&nbsp;Month</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm ">1&nbsp;Year</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm ">YTD</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm ">{(new Date()).getFullYear() - 1}</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 text-sm ">Since&nbsp;Inception</th>
                        </tr>
                    </thead>
                    <tbody className='text-blue text-sm'>
                        <tr>
                            <td className="border px-2 py-2  border-slate-300 font-bold">Total Return (%)</td>
                            <td className="border px-2 py-2 text-right border-slate-300 "> {data?.index_performance_1_month} </td>
                            <td className="border px-2 py-2 text-right border-slate-300 "> {data?.index_performance_3_month} </td>
                            <td className="border px-2 py-2 text-right border-slate-300 "> {data?.index_performance_6_month} </td>
                            <td className="border px-2 py-2 text-right border-slate-300 "> {data?.index_performance_1_year} </td>
                            <td className="border px-2 py-2 text-right border-slate-300 "> {data?.index_performance_YTD} </td>
                            <td className="border px-2 py-2 text-right border-slate-300 "> {data?.index_performance_last_year} </td>
                            <td className="border px-2 py-2 text-right border-slate-300 "> {data?.index_performance_since_inception} </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
};

export const TableLayoutAMDIndex = (props) => {

    const { data, showBond = true} = props

    return (
        <div className='ml-0 xl:ml-auto '>
        <div className=" text-dark-blue font-bold text-sm">
                Index Statistics
            </div>
            <div className="overflow-x-scroll py-4">

                <table className="border-collapse border border-slate-400  table-auto">
                    <tbody className='text-blue text-sm'>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">INDEX MARKET VALUE (AMD Million)</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">{data?.index_statistics_index_market_value}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">NUMBER OF CONSTITUENT BONDS</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">{data?.index_statistics_number_of_constituent_bonds} </td>
                        </tr>
                        {showBond &&<>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 ">Government Bonds</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">{data?.index_statistics_government_bonds} </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 ">Corporate Bonds</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">{data?.index_statistics_corporate_bonds}</td>
                        </tr>
                        </>}
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">TOTAL NOMINAL VALUE OUTSTANDING (AMD Million)</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">{data?.index_statistics_total_nominal_value_outstanding} </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">WEIGHTED AVERAGE COUPON</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">{data?.index_statistics_weighted_average_coupon}  </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold"> WEIGHTED AVERAGE MATURITY (Years) </td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">{data?.index_statistics_weighted_average_maturity}  </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold"> WEIGHTED AVERAGE MODIFIED DURATION </td>
                            <td className="border px-4 py-2 text-right border-slate-300 "> {data?.index_statistics_weighted_average_modified_duration}  </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold"> WEIGHTED AVERAGE YIELD TO MATURITY </td>
                            <td className="border px-4 py-2 text-right border-slate-300 "> {data?.index_statistics_weighted_average_yield_to_maturity}  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-blue text-xs py-2'>
                For more details, refer to the index factsheet.
            </div>
            </div>
    )

}