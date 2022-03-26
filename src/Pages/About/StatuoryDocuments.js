import React from 'react'

import {ReactComponent as Logo3} from 'Assets/icons/logo_3.svg'
import { DownloadDocumentButton } from 'Components/Buttons'

export default function Statuorydocuments(props) {


    return (
        <>
            <div id="statuory-documents" className="about-wrapper-8">
                <div className="container mx-auto px-4">
                    <div className="pt-36 pb-32">
                        <div className="mb-6 text-dark-blue font-bold text-2xl xl:text-3xl pb-16">
                            Statuory Documents
                        </div>
                        <div className="flex flex-wrap">
                                <DownloadDocumentButton className="xl:mr-10 w-full xl:w-1/4 mb-7">
                                    License
                                </DownloadDocumentButton>
                                <DownloadDocumentButton className="xl:mr-10 w-full xl:w-1/4 mb-7">
                                Charter
                                </DownloadDocumentButton>
                                <DownloadDocumentButton className=" w-full xl:w-1/4 mb-7">
                                Regilation documents
                                </DownloadDocumentButton>
                        </div>
                        <div className="pt-32">
                            <div className="flex justify-end items-center">
                                <div className="text-sm text-dark-blue mr-4">
                                    updated: 15.02.2022
                                </div>
                                <Logo3  />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

