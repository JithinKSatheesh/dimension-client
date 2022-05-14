import React, {useEffect} from 'react'
import Navbar from 'Components/Navbar'

import AboutImage1 from 'Assets/img/about_hero_1.png'
import AboutImage2 from 'Assets/img/about_hero_2.png'

import { SlideLeft, SlideRight, JustAppear, SlideBottom} from 'Components/SlideAnimation'
import { Markdown } from 'react-showdown'


// ** Store
// import useStoreItem from 'Store/hooks/getStoreItems'
// import initStoreItem from 'Store/hooks/initStoreItems'

export default function Hero(props) {

    const {aboutPageData} = props

    const _aboutImg1URL = aboutPageData?.hero_image_1?.url
    const _aboutImg2URL = aboutPageData?.hero_image_2?.url

    const _aboutImg1 = _aboutImg1URL ? `${process.env.REACT_APP_API_URL}${_aboutImg1URL}` : AboutImage1
    const _aboutImg2 = _aboutImg1URL ? `${process.env.REACT_APP_API_URL}${_aboutImg2URL}` : AboutImage2

    // console.log(_aboutImg1)

    return (
        <>
            <div id="about" className="about-wrapper-1 w-full">
                <Navbar variant="white" />
                <section>
                    <div className="py-28  text-white">
                        <div className="container mx-auto">
                            <div className="text-2xl xl:text-2xl 2xl:text-3xl font-bold">
                                <SlideLeft>
                                {/* About Dimension */}
                                {aboutPageData?.about_page_title}
                                </SlideLeft>
                            </div>
                            <div className="flex flex-wrap pt-24">
                                <div className="w-full xl:w-1/2 text-sm xl:text-xs 2xl:text-sm xl:leading-6 2xl:leading-7 mb-16 xl:pr-8">
                                    <SlideBottom>
                                    <Markdown markdown={ aboutPageData?.hero_description_1} />
                                    {/* <div dangerouslySetInnerHTML={{__html : aboutPageData?.hero_description_1}}></div> */}
                                    

                                    {/* Dimension CJSC was founded in 2018. Dimension Investment Company was registered and licensed by the Central Bank of Armenia on September 28, 2018.
                                    <br /><br />
                                    The company carries out financial operations permitted to investment companies by laws and other legal acts. The company is guided by internationally recognized standards of corporate governance and principles of collegial decision-making.
                                    Armenia’s financial market has great unrealized potentials and Dimension is here to help you. As such, the idea of an Armenian-based investment company which pursues to offer high-quality service in the Armenian market was born.
                                    <br /><br />
                                    Dimension provides a number of consulting, research and analysis services related to securities transactions.
                                     */}
                                    </SlideBottom>

                                </div>
                                <div className="w-full xl:w-1/2   mb-16 xl:pl-8">
                                    <div className='w-full h-full relative rounded-xl mx-auto xl:mx-0   xl:ml-auto'>
                                        <JustAppear>
                                        <div className="relative w-full h-full  rounded-xl">
                                            <div className="absolute  hero-img-overlay w-full h-full"></div>
                                            <img src={_aboutImg1} alt="" className='w-full h-full rounded-xl' />
                                        </div>
                                        </JustAppear>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full xl:w-1/2 text-sm xl:text-xs 2xl:text-sm xl:leading-6 2xl:leading-7 mb-16 order-1 xl:order-2 xl:pl-8">
                                    <SlideBottom>
                                    <Markdown markdown={ aboutPageData?.hero_description_2} />
                                    {/* <div dangerouslySetInnerHTML={{__html : aboutPageData?.hero_description_2}}></div> */}
                                    {/* Founded in 2018 and with capabilities spanning in Investment Securities Services, Capital Markets Advisory, and Investment Management & Research, Dimension strives to put clients first by being their most reliable, insightful, and effective investment services partner in Armenia, while maintaining the firm's high integrity. Dimension’s capabilities are fortified by its independence and conflicts of interest-free status, multi-perspective and client-centric culture, professional team, diverse & highly engaged shareholders, and global network, capabilities, and mindset.
                                    <br /><br />
                                    The principle of the company is to provide high quality of services and to show an individual approach to each partner and customer.
                                    <br /><br /> */}
                                    <div className="font-bold">
                                    <Markdown markdown={ aboutPageData?.hero_description_awards} />
                                    {/* <div dangerouslySetInnerHTML={{__html : aboutPageData?.hero_description_awards}}></div> */}
                                        {/* Dimension Investment Company received the award of best account operator by the Armenia Securities Exchange and the Central Depository within the framework of the annual AMX Awards:
                                        <br/>
                                            - In the category of best account operator in 2020
                                            <br/>
                                            - In the category of best account operator in 2021.
                                            <br/> */}
                                    </div>
                                    </SlideBottom>

                                </div>
                                <div className="w-full xl:w-1/2 mb-16 order-2 xl:order-1 xl:pr-8">
                                    <div 
                                        style={{
                                            background : `radial-gradient(527.72% 147.43% at 14.08% -13.43%, rgba(0, 97, 145, 0.5) 34.9%, rgba(0, 97, 146, 0) 98.96%),url(${_aboutImg2}) `,
                                            backgroundSize : 'cover, cover'
                                        }}
                                        className='h-64 xl:h-full w-full relative rounded-xl mx-auto xl:mx-0   xl:mr-auto'>
                                        {/* <div className=" w-full h-full  hero-img-overlay rounded-xl"></div> */}
                                        {/* <img src={AboutImage2} alt="" className='w-full h-full rounded-xl' /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
