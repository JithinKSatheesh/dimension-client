import React, {useState, useEffect} from 'react'
import { PopUpcontainer } from 'Components/PopUpcontainer'
// import { NewsCard } from './NewsCard'

import { UpdateStatus } from 'Components/UpdateStatus'

import { ResearchCard } from 'Pages/Home/Research'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function Content(props) {

    const [popup, setPopup] = useState(false)

    const { getMarketResearch } = useStoreItem()
    const { initMarketResearch } = initStoreItem()

    const data = getMarketResearch?.marketResearch ?? []

    useEffect(() => initMarketResearch(), [])

    const _data = [
        {
            img: '',
            title: "Demo",
            type: "Type",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        {
            img: '',
            title: "Demo",
            type: "Type",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        {
            img: '',
            title: "Demo",
            type: "Type",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        {
            img: '',
            title: "Demo",
            type: "Type",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
    ]



    return (
        <>
            <div className="w-full  news-wrapper-1">
                <section>
                    <div className="py-28  px-4 text-dark-blue">
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="text-2xl xl:text-3xl font-bold flex items-center my-2">
                                    Market researches
                                </div>

                            </div>
                            <div className="py-16">
                                <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-16 xl:gap-16">
                                    {[...data].map((item, index) =>
                                        <ResearchCard 
                                            onClick={() => setPopup(true)}
                                            key={index} item={item?.attributes} />)
                                    }
                                </div>
                            </div>
                            <UpdateStatus date="30.3.2022" />
                        </div>
                    </div>
                </section>
            </div>
            <PopUpcontainer heading="Research request" onClose={() => setPopup(false)} open={popup}  >
                <div className="text-white w-96">
                    <div className="py-3 text-xs"> Full name </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 text-xs"> Email address </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    
                    <div
                        onClick={() => {}}
                        className="mx-auto xl:ml-auto xl:mr-0 mt-10 border border-blue-light rounded-xl py-2 px-5 cursor-pointer text-center  font-bold text-white">
                        Send request
                    </div>
                </div>
            </PopUpcontainer>

        </>
    )
}

