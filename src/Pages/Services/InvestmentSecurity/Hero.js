import React from 'react'
import MarkdownView from 'react-showdown';

import { useTranslation } from 'react-i18next';

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'
import { SlideLeft, SlideRight, JustAppear, SlideTop, SlideBottom } from 'Components/SlideAnimation'

// ** assets
import { ReactComponent as IconShield } from 'Assets/icons/service_shield_blue.svg'

export default function Hero(props) {

    const { getServices, servicePageData } = props
    const { t } = useTranslation()

    // const data = getServices?.services ?? []

    const pdf_url = servicePageData?.regilation_documents?.url ?? ''
    const _regilation_documents_investment_securities_pdf = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''

    console.log(servicePageData)

    return (
        <>
            <div className="about-wrapper-1 w-full">
                <Navbar variant="white" />
                <section>
                    <div className="py-28  px-4 text-white">
                        <div className="container mx-auto">
                            <div className="text-2xl xl:text-xl 2xl:text-2xl 3xl:text-3xl font-bold flex items-center">
                                <SlideLeft>

                                    <IconShield className='mr-6' />
                                </SlideLeft>
                                <SlideRight>
                                    <MarkdownView markdown={servicePageData?.page_heading} />

                                    {/* Investment Securities Services */}
                                </SlideRight>
                            </div>
                            <div className="flex flex-wrap pt-16 items-end">
                                <div className="w-full xl:w-1/2 text-sm xl:text-xs 2xl:text-sm 3xl:text-base xl:leading-6 2xl:leading-6 3xl:leading-7  mb-16">
                                    <JustAppear>
                                        <MarkdownView
                                            markdown={servicePageData?.investment_securities_services}
                                        />
                                    </JustAppear>

                                </div>
                                <div className="w-full h-full xl:w-1/2 mb-16 flex  justify-end xl:text-xs 2xl:text-base">
                                    <SlideBottom>
                                        {
                                            _regilation_documents_investment_securities_pdf &&
                                            <DownloadDocumentButton
                                                onClick={() => window.open(_regilation_documents_investment_securities_pdf, '_blank', 'noopener,noreferrer')}
                                                className="w-fit pl-5 pr-14  ">
                                                {t("Regulation documents")}
                                            </DownloadDocumentButton>
                                        }
                                    </SlideBottom>
                                </div>
                            </div>
                            <div className="flex flex-wrap">

                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
