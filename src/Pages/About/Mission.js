import React from 'react'

import { SlideTop, SlideBottom} from 'Components/SlideAnimation'

export default function Mission(props) {
    

    const {getHomePageData} = props

    return (
        <>
        <div id="mission"  className=" bg-dark-blue-grad relative about-wrapper-6">
            <div className="container py-32 mx-auto">
                <div className="px-14 pt-14 bg-blue-light rounded-xl mission-wrapper-1">
                <div className="flex flex-wrap">
                        <div className="w-full xl:w-1/2 mb-14">
                            <div className="pb-7 text-2xl 2xl:text-3xl text-dark-blue font-semibold">
                                <SlideTop>
                                    {getHomePageData?.mission_title}
                                </SlideTop>
                            </div>
                            <div className="max-w-lg  xl:max-w-sm  3xl:max-w-lg text-dark-blue text-sm xl:text-xs 2xl:text-sm 3xl:text-base leading-7 xl:leading-7 2xl:leading-7 3xl:leading-8">
                                <SlideBottom>
                                    {getHomePageData?.mission}
                                    {/* Our mission is to put clients first by being their most reliable, insightful, and effective investment services partner in Armenia, while maintaining the firm’s high integrity.  */}
                                </SlideBottom>
                            </div>
                        </div>
                        <div className="w-full  xl:w-1/2 mb-14">
                            <div className="pb-7 text-2xl 2xl:text-3xl text-dark-blue font-semibold">
                                <SlideTop>
                                {getHomePageData?.vision_title}
                                </SlideTop>

                            </div>
                            <div className="max-w-lg  xl:max-w-sm  3xl:max-w-lg text-dark-blue text-sm xl:text-xs 2xl:text-sm  3xl:text-base  leading-7 xl:leading-7 2xl:leading-7 3xl:leading-8">
                                    <SlideBottom>
                                        {getHomePageData?.vision}
                                        {/* Our mission is to put clients first by being their most reliable, insightful, and effective investment services partner in Armenia, while maintaining the firm’s high integrity. */}
                                    </SlideBottom>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
