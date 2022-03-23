import React from 'react'

import { ReactComponent as IconPdf } from 'Assets/icons/pdfIcon.svg'
import { ReactComponent as Logo2 } from 'Assets/icons/logo_2.svg'

export default function Financialstatement(props) {

    const ReportDownloadButton = (props) => {

        return (
            <div
                onClick={props?.onClick}
                className="border border-blue-light rounded-xl p-2 cursor-pointer">
                <div className="flex items-center ">
                    <div><IconPdf width={"16px"} className="text-blue-300" /></div>
                    <div className='flex-grow text-center '>
                        {props?.title}
                    </div>
                </div>
            </div>
        )
    }

    const TableRow = (props) => {

        return (
            <div className="flex flex-wrap justify-end  p-5 border-blue-light border-b items-center ">
                <div className="w-full xl:w-1/2 py-5 xl:py-0">
                    <div className="font-bold">
                        {props?.title}
                    </div>
                </div>
                <div className="w-full xl:w-1/2">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                        {props?.children}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>  <div className=" investor-relations-wrapper-2 ">
            <div className="container mx-auto px-4">
                <div className="py-36 text-white">
                    <div className="mb-24  font-bold text-2xl xl:text-3xl">
                        Financial statments & Normatives
                    </div>
                    <div className="pb-5 border-blue-light border-b font-bold">
                        Annual
                    </div>
                    <TableRow title="">
                        <ReportDownloadButton title="2018" />
                        <ReportDownloadButton title="2018" />
                        <ReportDownloadButton title="2018" />
                        <ReportDownloadButton title="2018" />
                    </TableRow>
                    <div className="mt-24 pb-5 border-blue-light border-b font-bold">
                        Quarterly
                    </div>
                    <TableRow title="2018">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <TableRow title="2019">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <TableRow title="2020">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <TableRow title="2021">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <div className="mt-24 pb-5 border-blue-light border-b font-bold">
                        Normatives
                    </div>
                    <TableRow title="2018">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <TableRow title="2019">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <TableRow title="2020">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <TableRow title="2021">
                        <ReportDownloadButton title="1 Quarter" />
                        <ReportDownloadButton title="2 Quarter" />
                        <ReportDownloadButton title="3 Quarter" />
                        <ReportDownloadButton title="4 Quarter" />
                    </TableRow>
                    <div className="pt-32">
                        <div className="flex justify-end items-center">
                            <div className="text-sm text-white mr-4">
                                updated: 15.02.2022
                            </div>
                            <Logo2 />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
