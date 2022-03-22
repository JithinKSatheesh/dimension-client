import React from 'react'
import Navbar from 'Components/Navbar'

import AboutImage1 from 'Assets/img/about_hero_1.png'
import AboutImage2 from 'Assets/img/about_hero_2.png'

export default function Hero(props) {
    

    return (
        <>
        <div className="about-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-3xl font-bold">
                            About Dimension
                        </div>
                        <div className="flex flex-wrap pt-24">
                            <div className="w-full xl:w-1/2 text-sm mb-16">
                                    Dimension CJSC was founded in 2018. Dimension Investment Company was registered and licensed by the Central Bank of Armenia on September 28, 2018.
                                    <br /><br />
                                    The company carries out financial operations permitted to investment companies by laws and other legal acts. The company is guided by internationally recognized standards of corporate governance and principles of collegial decision-making.
                                    Armenia’s financial market has great unrealized potentials and Dimension is here to help you. As such, the idea of an Armenian-based investment company which pursues to offer high-quality service in the Armenian market was born.
                                    <br /><br />
                                    Dimension provides a number of consulting, research and analysis services related to securities transactions.

                            </div>
                            <div className="w-full xl:w-1/2 mb-16">
                                    <div className='max-w-lg 3xl:max-w-2xl h-full relative rounded-xl mx-auto xl:mx-0   xl:ml-auto'>
                                        <div className="absolute w-full h-full  hero-img-overlay rounded-xl"></div>
                                        <img src={AboutImage1} alt="" className='w-full h-full rounded-xl' />
                                    </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full xl:w-1/2 text-sm mb-16 order-1 xl:order-2">
                            Founded in 2018 and with capabilities spanning in Investment Securities Services, Capital Markets Advisory, and Investment Management & Research, Dimension strives to put clients first by being their most reliable, insightful, and effective investment services partner in Armenia, while maintaining the firm's high integrity. Dimension’s capabilities are fortified by its independence and conflicts of interest-free status, multi-perspective and client-centric culture, professional team, diverse & highly engaged shareholders, and global network, capabilities, and mindset.
                            <br/><br/>
                            The principle of the company is to provide high quality of services and to show an individual approach to each partner and customer.
                            <br/><br/>
                            <div className="font-bold">
                                Dimension Investment Company received the award of best account operator by the Armenia Securities Exchange and the Central Depository within the framework of the annual AMX Awards:
                                <div>
                                    - In the category of best account operator in 2020
                                </div>
                                <div>
                                    - In the category of best account operator in 2021.
                                </div>
                            </div>

                            </div>
                            <div className="w-full xl:w-1/2 mb-16 order-2 xl:order-1">
                                    <div className='max-w-lg 3xl:max-w-2xl h-full relative rounded-xl mx-auto xl:mx-0   xl:mr-auto'>
                                        <div className="absolute w-full h-full  hero-img-overlay rounded-xl"></div>
                                        <img src={AboutImage2} alt="" className='w-full h-full rounded-xl' />
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
