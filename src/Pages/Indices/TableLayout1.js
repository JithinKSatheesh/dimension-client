import React from 'react';

export const TableLayout1 = (props) => {

    const {description} = props

    return (
        <div className='py-16'>
            <div className="text-2xl text-dark-blue font-bold py-8">
                Index Description
            </div>
            <div className=" text-dark-blue pb-8 text-sm">
                {description}
            </div>
            <div className=" text-dark-blue font-bold text-sm">
                Index Performance
            </div>
            <div className="overflow-x-scroll py-4">
                <table className="border-collapse border border-slate-400  table-auto">
                    <thead>
                        <tr>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 "></th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 ">1 Month</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 ">3 Month</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 ">6 Month</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 ">1 Year</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 ">YTD</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 ">2021</th>
                            <th className="border px-2 py-2 text-dark-blue border-slate-300 ">Since Inception</th>
                        </tr>
                    </thead>
                    <tbody className='text-blue text-sm'>
                        <tr>
                            <td className="border px-2 py-2  border-slate-300 font-bold">Total Return (%)</td>
                            <td className="border px-2 py-2 text-right border-slate-300 ">0.70%</td>
                            <td className="border px-2 py-2 text-right border-slate-300 ">0.70%</td>
                            <td className="border px-2 py-2 text-right border-slate-300 ">0.70%</td>
                            <td className="border px-2 py-2 text-right border-slate-300 ">0.70%</td>
                            <td className="border px-2 py-2 text-right border-slate-300 ">0.70%</td>
                            <td className="border px-2 py-2 text-right border-slate-300 ">0.70%</td>
                            <td className="border px-2 py-2 text-right border-slate-300 ">0.70%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
};

export const TableLayoutAMDIndex = (props) => {

    return (
        <div>
        <div className=" text-dark-blue font-bold text-sm">
                Index Statistics
            </div>
            <div className="overflow-x-scroll py-4">

                <table className="border-collapse border border-slate-400  table-auto">
                    <tbody className='text-blue text-sm'>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">INDEX MARKET VALUE (AMD Million)</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">1,355,484</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">NUMBER OF CONSTITUENT BONDS</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">52</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 ">Government Bonds</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">17</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 ">Corporate Bonds</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">35</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">TOTAL NOMINAL VALUE OUTSTANDING (AMD Million)</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">1,292,686</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold">WEIGHTED AVERAGE COUPON</td>
                            <td className="border px-4 py-2 text-right border-slate-300 ">9.79% </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold"> WEIGHTED AVERAGE MATURITY (Years) </td>
                            <td className="border px-4 py-2 text-right border-slate-300 "> 8.07% </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold"> WEIGHTED AVERAGE MODIFIED DURATION </td>
                            <td className="border px-4 py-2 text-right border-slate-300 "> 4.07 </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2  border-slate-300 font-bold"> WEIGHTED AVERAGE YIELD TO MATURITY </td>
                            <td className="border px-4 py-2 text-right border-slate-300 "> 9.71% </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
    )

}