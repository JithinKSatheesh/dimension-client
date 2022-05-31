import React, { useState, useEffect } from 'react'
// import { NewsCard } from './NewsCard'
import { SlideTop } from 'Components/SlideAnimation'

import { UpdateStatus } from 'Components/UpdateStatus'

import { ResearchCard } from 'Pages/Home/Research'
import { PopUpcontainer } from 'Components/PopUpcontainer';

import { ThreeDots } from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

import { MarketResearchPopup } from './MarketResearchPopup'
import { formatDate } from 'Utils/time';

export default function Content(props) {

    const [popup, setPopup] = useState(false)

    const {  getConfigs} = useStoreItem()
    const {  } = initStoreItem()

    
    // useEffect(() => initAllConfigs(), [])
    
    const data = getConfigs?.configs?.market_research ?? []
    const homePage = getConfigs?.configs?.home_page
    
    console.log(data)
    // const data = getMarketResearch?.marketResearch ?? []


    return (
        <>
            <div className="w-full  news-wrapper-1">
                <section>
                    <div className="py-28  px-4 text-dark-blue">
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="text-2xl xl:text-2xl   2xl:text-3xl  font-bold flex items-center my-2">
                                   <SlideTop>
                                    {homePage?.market_research_title}
                                   </SlideTop>
                                </div>

                            </div>
                                {data?.length <= 0 ?
                                    <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                                    :
                                    <>
                                    <div className="py-16">
                                        <div className="grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4  gap-16 xl:gap-4 2xl:gap-16">
                                            {[...data].map((item, index) =>
                                                <ResearchCard
                                                    onClick={() => setPopup({item})}
                                                    key={index} item={item} />)
                                            }
                                        </div>
                                    </div>
                                    </>
                                }
                        </div>
                    </div>
                </section>
            </div>
        <PopUpcontainer heading="Research request" onClose={() => setPopup(false)} open={popup}>
            <MarketResearchPopup popup={popup}  />
        </PopUpcontainer >
        <UpdateStatus date={formatDate(getConfigs?.configs?.market_research?.[0]?.updatedAt)} />
        </>
    )
}

