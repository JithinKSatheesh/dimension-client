import React from 'react'
import { useTranslation } from 'react-i18next'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'

import useStoreItem from 'Store/hooks/getStoreItems'
// ** assets
// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'
export default function Hero(props) {
    
    const {t} = useTranslation()
    const { getConfigs } = useStoreItem()

    return (
        <>
        <div className="investor-relations-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl  xl:text-2xl 2xl:text-3xl  font-bold flex items-center">
                          <SlideLeft>
                            {getConfigs?.configs?.reports?.investor_relation?.heading}
                          </SlideLeft>
                        </div>
                        <div className="flex flex-wrap pt-8 items-end">
                            <div className="w-full xl:w-1/2 text-sm xl:text-xs 2xl:text-sm xl:leading-6 2xl:leading-6 mb-16 max-w-lg">
                                <SlideBottom>
                                    {getConfigs?.configs?.reports?.investor_relation?.description}
                                {/* Based on our stated mission and vision, one of our core beliefs regarding company’s success is establishing proper investor relations with our shareholders. Therefore, in order to achieve effectiveness and good reputation we follow our corporate governance standards.  */}
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
