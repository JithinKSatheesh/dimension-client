import React, { useState, useEffect } from 'react'
// import { NewsCard } from './NewsCard'
import { SlideTop } from 'Components/SlideAnimation'

import { UpdateStatus } from 'Components/UpdateStatus'

import { ResearchCard } from 'Pages/Home/Research'

import { ThreeDots } from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { MarketResearchPopup } from './MarketResearchPopup'

export default function Content(props) {

    const [popup, setPopup] = useState(false)

    const { getMarketResearch } = useStoreItem()
    const { initMarketResearch } = initStoreItem()

    const data = getMarketResearch?.marketResearch ?? []

    useEffect(() => initMarketResearch(), [])


    return (
        <>
            <div className="w-full  news-wrapper-1">
                <section>
                    <div className="py-28  px-4 text-dark-blue">
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="text-2xl xl:text-3xl font-bold flex items-center my-2">
                                   <SlideTop>
                                    Market researches
                                   </SlideTop>
                                </div>

                            </div>
                                {data?.length <= 0 ?
                                    <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                                    :
                                    <>
                                    <div className="py-16">
                                        <div className="grid grid-cols-1 xl:grid-cols-4  gap-16 xl:gap-16">
                                            {[...data].map((item, index) =>
                                                <ResearchCard
                                                    onClick={() => setPopup(true)}
                                                    key={index} item={item?.attributes} />)
                                            }
                                        </div>
                                    </div>
                                    <UpdateStatus date="30.3.2022" />
                                    </>
                                }
                        </div>
                    </div>
                </section>
            </div>
            <MarketResearchPopup popup={popup} setPopup={setPopup} />

        </>
    )
}

