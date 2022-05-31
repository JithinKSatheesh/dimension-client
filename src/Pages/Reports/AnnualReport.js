import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import { PdfDownloadButton } from 'Components/Buttons'

import { ThreeDots } from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
// import initStoreItem from 'Store/hooks/initStoreItems'

export default function Annualreport(props) {

    // const { getAnnualReports } = useStoreItem()
    const {t} = useTranslation()
    const { getConfigs } = useStoreItem()
    // const { initAnnualReports } = initStoreItem()

    const reports = getConfigs?.configs?.reports?.annual_report || []
    // const reports = getAnnualReports?.annualReports ?? []

    // console.log(reports)

    // useEffect(() => initAnnualReports(), [])

    return (
        <>
            <div className=" misc-wrapper-2">
                <div className="container mx-auto">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-2xl 2xl:text-3xl pb-24">
                            <SlideLeft>
                                {t("Annual reports")}
                            </SlideLeft>
                        </div>
                        {reports?.length <= 0 ?
                            <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                            :
                            <>

                                <JustAppear>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
                                        {reports.map(item => {

                                            const pdf_url = item?.pdf?.url
                                            const url_ = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''

                                            return (<PdfDownloadButton
                                                key={item?.id}
                                                onClick={() => window.open(url_, '_blank', 'noopener,noreferrer')}
                                                title={item?.year} />)
                                        }
                                        )}


                                    </div>
                                </JustAppear>
                            </>
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

