import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import {ThreeDots} from 'react-loader-spinner'

import { ReactComponent as Logo3 } from 'Assets/icons/logo_3.svg'
import { DownloadDocumentButton } from 'Components/Buttons'
import { formatDate } from 'Utils/time'
import { isEmpty } from 'Utils/string'

export default function Statuorydocuments(props) {

    const { getAboutPage } = props

    const data = getAboutPage?.about ?? {}
    const _date = getAboutPage?.about?.attributes?.updatedAt

    const license_pdf = data?.attributes?.license_pdf?.data?.attributes?.url ?? ''
    const _license_pdf = license_pdf ? `${process.env.REACT_APP_API_URL}${license_pdf}` : ''

    const regilation_pdf = data?.attributes?.regilation_pdf?.data?.attributes?.url ?? ''
    const _regilation_pdf = regilation_pdf ? `${process.env.REACT_APP_API_URL}${regilation_pdf}` : ''

    const charter_pdf = data?.attributes?.charter_pdf?.data?.attributes?.url ?? ''
    const _charter_pdf = charter_pdf ? `${process.env.REACT_APP_API_URL}${charter_pdf}` : ''




    return (
        <>
            <div id="statuory-documents" className="about-wrapper-8">
                <div className="container mx-auto px-4">
                    <div className="pt-36 pb-32">
                        <div className="mb-6 text-dark-blue font-bold text-2xl xl:text-3xl pb-16">
                            <SlideLeft>
                                Statuory Documents
                            </SlideLeft>
                        </div>
                        <SlideBottom>
                            {isEmpty(data) ?
                                <div className=' flex justify-center'> <ThreeDots color='#206291' />  </div>
                                :
                                <div className="flex flex-wrap">

                                    <DownloadDocumentButton
                                        onClick={() => window.open(_license_pdf, '_blank', 'noopener,noreferrer')}
                                        className="xl:mr-10 w-full xl:w-1/4 mb-7">
                                        License
                                    </DownloadDocumentButton>
                                    <DownloadDocumentButton
                                        onClick={() => window.open(_charter_pdf, '_blank', 'noopener,noreferrer')}
                                        className="xl:mr-10 w-full xl:w-1/4 mb-7">
                                        Charter
                                    </DownloadDocumentButton>
                                    <DownloadDocumentButton
                                        onClick={() => window.open(_regilation_pdf, '_blank', 'noopener,noreferrer')}
                                        className=" w-full xl:w-1/4 mb-7">
                                        Regilation documents
                                    </DownloadDocumentButton>
                                </div>
                            }
                        </SlideBottom>
                        <div className="pt-32">
                            <div className="flex justify-center xl:justify-end items-center">
                                <div className="text-sm text-dark-blue mr-4">
                                    {formatDate(_date)}
                                </div>
                                <Logo3 />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

