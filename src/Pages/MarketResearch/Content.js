import React, {useState} from 'react'
import { PopUpcontainer } from 'Components/PopUpcontainer'
// import { NewsCard } from './NewsCard'

import { UpdateStatus } from 'Components/UpdateStatus'

import { ResearchCard } from 'Pages/Home/Research'

export default function Content(props) {

    const [popup, setPopup] = useState(false)

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
                                    {_data.map((item, index) =>
                                        <ResearchCard 
                                            onClick={() => setPopup(item.id)}
                                            key={index} item={item} />)
                                    }
                                </div>
                            </div>
                            <UpdateStatus date="30.3.2022" />
                        </div>
                    </div>
                </section>
            </div>
            <PopUpcontainer heading="Send request" onClose={() => setPopup(false)} open={popup}  >
                <div className="text-white w-96">
                    <div className="py-3 font-xs"> First name </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 font-xs"> Email address </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 font-xs"> Subject </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 font-xs"> What are you interested in? </div>
                    <textarea className='w-full h-32 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div
                        onClick={() => {}}
                        className="mx-auto xl:ml-auto xl:mr-0 mt-5 border border-blue-light rounded-xl py-2 px-5 cursor-pointer text-center  font-bold text-white">
                        Send request
                    </div>
                </div>
            </PopUpcontainer>

        </>
    )
}

