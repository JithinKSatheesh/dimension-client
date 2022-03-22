import React from 'react'

import { ReactComponent as IconDownload } from 'Assets/icons/download_2.svg'
import {ReactComponent as Logo3} from 'Assets/icons/logo_3.svg'

export default function Statuorydocuments(props) {


    return (
        <>
            <div className="about-wrapper-8">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 text-dark-blue font-bold text-2xl xl:text-3xl pb-16">
                            Statuory Documents
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-1/4 max-w-lg rounded-xl bg-blue-light p-4 mr-10">
                                <div className='flex text-dark-blue'>
                                    <IconDownload className='mr-3' />
                                    License
                                </div>
                            </div>
                            <div className="w-1/4 max-w-lg rounded-xl bg-blue-light p-4 mr-10">
                                <div className='flex text-dark-blue'>
                                    <IconDownload className='mr-3' />
                                    Charter
                                </div>
                            </div>
                            <div className="w-1/4 max-w-lg rounded-xl bg-blue-light p-4 mr-10">
                                <div className='flex text-dark-blue'>
                                    <IconDownload className='mr-3' />
                                    Regilation documents
                                </div>
                            </div>
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
