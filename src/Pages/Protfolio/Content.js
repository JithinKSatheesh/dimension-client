import React, {useState} from 'react'
import { PopUpcontainer } from 'Components/PopUpcontainer'
// import { NewsCard } from './NewsCard'

import { UpdateStatus } from 'Components/UpdateStatus'

import { ProtfolioCard } from 'Pages/Home/Protfolio'

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
                                Portfolio
                                </div>

                            </div>
                            <div className="py-16">
                                <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-16 xl:gap-16">
                                    {_data.map((item, index) =>
                                        <ProtfolioCard 
                                            onClick={() => setPopup(true)}
                                            key={index} item={item} />)
                                    }
                                </div>
                            </div>
                            <UpdateStatus date="30.3.2022" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

