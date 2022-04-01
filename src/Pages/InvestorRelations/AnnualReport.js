import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import { PdfDownloadButton} from 'Components/Buttons'

export default function Annualreport(props) {

    
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

                            <PdfDownloadButton title="2018" />
                            <PdfDownloadButton title="2019" />
                            <PdfDownloadButton title="2020" />
                            <PdfDownloadButton title="2018" />
                            <PdfDownloadButton title="2019" />
                            <PdfDownloadButton title="2020" />

                        </div>
                        </JustAppear>
                            
                    </div>
                </div>
            </div>

        </>
    )
}

