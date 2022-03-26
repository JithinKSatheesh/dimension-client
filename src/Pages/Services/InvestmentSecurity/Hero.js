import React from 'react'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'

// ** assets
import { ReactComponent as IconShield } from 'Assets/icons/service_shield.svg'

export default function Hero(props) {
    

    return (
        <>
        <div className="about-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-3xl font-bold flex items-center">
                        <IconShield className='mr-6' />  
                            Investment Securities Services
                        </div>
                        <div className="flex flex-wrap pt-16 items-end">
                            <div className="w-full xl:w-1/2 text-sm mb-16">
                            We have years of experience in executing large and complex corporate securities transactions in the Armenian capital market and beyond. By upholding our mission statement and our fiduciary duties, we put the interests of clients first and offer comprehensive services covering all aspects of dealing with securities: underwriting; exchange listing; market making; corporate registry and custodian services.
                                
                            </div>
                            <div className="w-full h-full xl:w-1/2 mb-16 flex  justify-end">
                                <DownloadDocumentButton className="w-fit pl-5 pr-14">
                                    Regilation documents
                                </DownloadDocumentButton>
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
