import React from 'react'

import { SlideTop, SlideBottom} from 'Components/SlideAnimation'

export default function Mission(props) {
    
    const {homepageData} = props

    return (
        <>
        <div className=" bg-dark-blue-grad relative hero-wrapper-2">
            <div className="container py-32 mx-auto ">
                <div className="px-14 pt-14 bg-blue-light rounded-xl mission-wrapper-1">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-1/2 mb-14">
                            <div className="pb-7 text-2xl xl:text-xl 2xl:text-2xl 3xl:text-3xl text-dark-blue font-semibold">
                                <SlideTop>
                                    Mission
                                </SlideTop>
                            </div>
                            <div className="max-w-lg  xl:max-w-sm  3xl:max-w-lg text-dark-blue text-sm xl:text-xs 2xl:text-sm 3xl:text-base leading-7 xl:leading-7 2xl:leading-7 3xl:leading-8">
                                <SlideBottom>
                                    {homepageData?.mission}
                                    {/* Our mission is to put clients first by being their most reliable, insightful, and effective investment services partner in Armenia, while maintaining the firm’s high integrity.  */}
                                </SlideBottom>
                            </div>
                        </div>
                        <div className="w-full  xl:w-1/2 mb-14">
                            <div className="pb-7 text-2xl xl:text-xl  2xl:text-2xl 3xl:text-3xl text-dark-blue font-semibold">
                                <SlideTop>
                                    Vision
                                </SlideTop>

                            </div>
                            <div className="max-w-lg  xl:max-w-sm  3xl:max-w-lg text-dark-blue text-sm xl:text-xs 2xl:text-sm 3xl:text-base leading-7 xl:leading-7 2xl:leading-7 3xl:leading-8">
                                    <SlideBottom>
                                        {homepageData?.vision}
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
