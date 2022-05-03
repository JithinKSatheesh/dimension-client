import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'

// ** assets
// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'

export default function Hero(props) {
    

    return (
        <>
        <div className="investor-relations-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-2xl 2xl:text-3xl  font-bold flex items-center">
                        <SlideLeft>
                            FAQ
                        </SlideLeft>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            
        </>
    )
}
