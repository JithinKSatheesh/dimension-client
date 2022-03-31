import React, {useEffect, useState} from 'react'
import { PopUpcontainer } from 'Components/PopUpcontainer'
// import { NewsCard } from './NewsCard'
import { SlideTop} from 'Components/SlideAnimation'


import { UpdateStatus } from 'Components/UpdateStatus'
import { ProtfolioCard } from 'Pages/Home/Protfolio'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { formatDate } from 'Utils/time'

export default function Content(props) {

    const [popup, setPopup] = useState(false)

    const { getProtfolio } = useStoreItem()
    const { initProtfolio } = initStoreItem()

    const data = getProtfolio?.protfolio ?? []
    const _date = getProtfolio?.protfolio?.[0]?.attributes?.updatedAt

    useEffect(() => initProtfolio(), [])

    console.log(data)

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
                                    <SlideTop>
                                        Portfolio
                                    </SlideTop>
                                </div>

                            </div>
                            <div className="py-16">
                                <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-16 xl:gap-16">
                                    {[...data].map((item, index) =>
                                        <ProtfolioCard key={item?.id} item={item?.attributes} />)
                                    }
                                </div>
                            </div>
                            <UpdateStatus date={formatDate(_date)} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

