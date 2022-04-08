import React, { useEffect } from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import { PdfDownloadButton} from 'Components/Buttons'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function Annualreport(props) {

    const { getAnnualReports } = useStoreItem()
    const { initAnnualReports } = initStoreItem()

    const reports = getAnnualReports?.annualReports ?? []

    // console.log(reports)

    useEffect(() => initAnnualReports(), [])
    
    return (
        <>
            <div className=" misc-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                            <SlideLeft>
                            Annual reports
                            </SlideLeft>
                        </div>
                        <JustAppear>

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
                            {reports.map(item => {

                                const pdf_url = item?.attributes?.pdf?.data?.attributes?.url
                                const url_ = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''

                                return (<PdfDownloadButton 
                                key={item?.id}
                                onClick={() => window.open(url_, '_blank', 'noopener,noreferrer')}
                                title={item?.attributes?.year} />)
                            }
                            )}
                            
                            {/* <PdfDownloadButton title="2019" />
                            <PdfDownloadButton title="2020" />
                            <PdfDownloadButton title="2018" />
                            <PdfDownloadButton title="2019" />
                            <PdfDownloadButton title="2020" /> */}

                        </div>
                        </JustAppear>
                            
                    </div>
                </div>
            </div>

        </>
    )
}

