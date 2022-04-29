import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'



// ** assets
// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'

export default function Hero(props) {
    
    const {config} = props
    console.log(config)

    return (
        <>
        <div className="investor-relations-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-3xl font-bold flex items-center">
                       <SlideLeft>
                        Regulations
                       </SlideLeft>
                        </div>
                        <div className="flex flex-wrap pt-8 items-end">
                            <div className="w-full xl:w-1/2 text-sm mb-16 max-w-lg">
                                <SlideBottom>
                                    {config?.regulation?.heading_description}
                            {/* Dimension’s vision is to become the leading Armenian independent investment bank with world-class capital intermediation and investment capabilities offered to the best clients in Armenia.  */}
                                </SlideBottom>
                            </div>
                            <div className="w-full h-full xl:w-1/2 mb-16 flex  justify-end">
                               
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
            
        </>
    )
}
