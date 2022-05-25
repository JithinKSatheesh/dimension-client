import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import { ThreeDots } from 'react-loader-spinner'

import { ReactComponent as IconPdf } from 'Assets/icons/pdfIcon.svg'
import { UpdateStatus } from '../../Components/UpdateStatus'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { formatDate } from 'Utils/time'

export default function Financialstatement(props) {

    const { getConfigs } = useStoreItem()
    const {t} = useTranslation()

    const {
        // initFinancialStatementAnnual,
        // initFinancialStatementQuaterly,
        // initNormatives,
    } = initStoreItem()

    const reports = getConfigs?.configs?.reports
    
    
    const _annualreports = reports?.annual_report || []
    const _financialStatementAnnual = reports?.annual_financial_statement ?? []
    const _financialStatementsQuaterly = reports?.quaterly_financial_statement ?? []
    const _normatives = reports?.normatives ?? []

    const getUpdateTime = () => {
        const date1 = _financialStatementAnnual?.[0]?.updatedAt || '01/01/2022'
        const date2 = _financialStatementsQuaterly?.[0]?.updatedAt || '01/01/2022'
        const date3 = _normatives?.[0]?.updatedAt || '01/01/2022'
        const date4 = _annualreports?.[0]?.updatedAt || '01/01/2022'

        const _date1 = (new Date(date1)).getTime()
        const _date2 = (new Date(date2)).getTime()
        const _date3 = (new Date(date3)).getTime()
        const _date4 = (new Date(date4)).getTime()

        const _updateDate = Math.max(_date1, _date2, _date3, _date4)
        const updatedDate = new Date(_updateDate)
        return updatedDate ? updatedDate : ''

        
    }

    // console.log(_financialStatementAnnual , "@@")

    useEffect(() => {
        // initFinancialStatementAnnual()
        // initFinancialStatementQuaterly()
        // initNormatives()
    }, [])

    const ReportDownloadButton = (props) => {

        return (
            <div
                onClick={props?.onClick}
                className="btn-reportDownload border  border-blue-light rounded-xl p-2 cursor-pointer">
                <div className="flex items-center ">
                    <div className='btn-reportDownload-icon text-blue-300'><IconPdf width={"16px"} /></div>
                    <div className='flex-grow text-center xl:text-sm 2xl:text-sm 3xl:text-base'>
                        {props?.title}
                    </div>
                </div>
            </div>
        )
    }



    const ButtonWrapper = ({ title, item, pdf_key = 'pdf' }) => {

        const pdf_url = item?.[pdf_key]?.url
        const url_ = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''


        return (<>
        {url_ && <ReportDownloadButton
            title={title ? title : item?.year}
            onClick={() => window.open(url_, '_blank', 'noopener,noreferrer')}
            className=""
        />}
        </>
        )


    }

    const TableRow = (props) => {

        return (
            <div className={`flex flex-wrap justify-end  p-5 ${props?.borderBlue ? 'border-color-blue' : 'border-blue-light'}  border-b items-center `}>
                <div className="w-full xl:w-1/2 py-5 xl:py-0">
                    <div className="font-bold">
                        <SlideLeft>
                            {props?.title}
                        </SlideLeft>
                    </div>
                </div>
                <div className="w-full xl:w-1/2">
                    <JustAppear>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                            {props?.children}
                        </div>
                    </JustAppear>
                </div>
            </div>
        )
    }


    return (
        <>  <div className=" investor-relations-wrapper-2 ">
            <div className="container mx-auto ">
                <div className="py-36 text-white">
                    <div className="mb-24  font-bold text-2xl  xl:text-2xl 2xl:text-3xl">
                        <SlideLeft>
                            {t("Financial statments & Normatives")}
                        </SlideLeft>
                    </div>
                    <div className="pb-5 border-blue-light border-b font-bold">
                        <SlideLeft>

                            {t("Annual")}
                        </SlideLeft>
                    </div>
                    <TableRow title="">
                        {[..._financialStatementAnnual].map(item => <ButtonWrapper item={item} key={item?.id} />)}
                    </TableRow>
                    <div className="mt-24 pb-5 border-color-blue border-b font-bold">
                        <SlideLeft>

                            {t("Quarterly")}
                        </SlideLeft>
                    </div>
                    {[..._financialStatementsQuaterly].map(item =>
                        <TableRow title={item?.year} borderBlue={true} key={item?.id}>
                            {console.log(item)}
                            <ButtonWrapper title={item?.["q1_pdf_text"]} item={item} pdf_key="q1_pdf" />
                            <ButtonWrapper title={item?.["q2_pdf_text"]} item={item} pdf_key="q2_pdf" />
                            <ButtonWrapper title={item?.["q3_pdf_text"]} item={item} pdf_key="q3_pdf" />
                            <ButtonWrapper title={item?.["q4_pdf_text"]} item={item} pdf_key="q4_pdf" />
                        </TableRow>
                    )}

                    <div className="mt-24 pb-5 border-blue-light border-b font-bold">
                        {t("Normatives")}
                    </div>
                    {[..._normatives].map(item =>
                        <TableRow title={item?.year} borderBlue={false} key={item?.id} >
                            <ButtonWrapper title={item?.["q1_pdf_text"]} item={item} pdf_key="q1_pdf" />
                            <ButtonWrapper title={item?.["q2_pdf_text"]} item={item} pdf_key="q2_pdf" />
                            <ButtonWrapper title={item?.["q3_pdf_text"]} item={item} pdf_key="q3_pdf" />
                            <ButtonWrapper title={item?.["q4_pdf_text"]} item={item} pdf_key="q4_pdf" />
                        </TableRow>
                    )}


                </div>
            </div>
        </div>
        <UpdateStatus  date={formatDate(getUpdateTime())} />
        </>
    )
}

