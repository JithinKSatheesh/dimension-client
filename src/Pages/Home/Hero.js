import React from 'react'
import HeroImg from 'Assets/img/hero.png'

import { SlideLeft, SlideRight, JustAppear} from 'Components/SlideAnimation'

export default function Hero(props) {
    
    const {homepageData} = props

    const _HeroImgURL = homepageData?.hero_image?.url 
    const _heroImg =  _HeroImgURL ? `${process.env.REACT_APP_API_URL}${_HeroImgURL}` : HeroImg
    // console.log(homepageData?.hero_image?.url)

    return (
        <>
            <div className="w-full px-4 py-12 xl:py-24 2xl:py-36 hero-wrapper">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        <div>
                            <div className="hero-h1 text-3xl xl:text-3xl 2xl:text-4xl  3xl:text-5xl  text-dark-blue font-semibold">
                                <SlideLeft>
                                    {homepageData?.hero_heading_1}
                                    {/* Better way */}
                                </SlideLeft>
                                <SlideRight>
                                    {homepageData?.hero_heading_2}
                                    {/* to invest */}
                                </SlideRight>
                            </div>
                            <div className="py-7 xl:text-sm 2xl:text-sm 3xl:text-base  xl:leading-7 2xl:leading-7  3xl:leading-8 text-dark-blue max-w-xl xl:max-w-lg 3xl:max-w-xl">
                                <JustAppear>
                                {homepageData?.hero_description}
                                {/* Dimension was founded with the understanding that the dynamic 
                                investment markets of Armenia require an objective and professional 
                                approach from highly specialized experts who believe in the integrity 
                                of the financial markets. */}
                                </JustAppear>
                            </div>
                        </div>
                        <div className='max-w-lg xl:max-w-xs 2xl:max-w-lg 3xl:max-w-2xl relative rounded-xl'>
                            <JustAppear>
                            <div className="absolute w-full h-full hero-img-overlay rounded-xl"></div>
                            <img src={_heroImg} alt="" className='w-full rounded-xl' />
                            </JustAppear>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
