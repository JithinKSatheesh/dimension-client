import React from 'react'

import {SlideTop } from 'Components/SlideAnimation'


import { NewsCard } from './NewsCard'

import {UpdateStatus} from 'Components/UpdateStatus'

export default function Content(props) {


    const _news = [
        {
            id:1,
            date : '30.2.2022',
            img : '/assets/photos/news_sample_2.png',
            title : 'Article name',
            content : `In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds. In international markets, Dimension offers private portfolio and wealth management solutions to institutional clients, high net worth individuals, and other investors based in Armenia and abroad.`,

        },
        {
            id:2,
            date : '30.2.2022',
            img : '/assets/photos/news_sample_1.png',
            title : 'Article name',
            content : `In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds. In international markets, Dimension offers private portfolio and wealth management solutions to institutional clients, high net worth individuals, and other investors based in Armenia and abroad.`,

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
                                    News
                                  </SlideTop>
                                </div>
                                <div className='flex '>
                                    <div className="py-2 px-5 mr-3 rounded-xl bg-blue-light cursor-pointer hover:border border-dark-blue">
                                        Recent
                                    </div>
                                    <div className="py-2 px-5 rounded-xl bg-blue-light cursor-pointer hover:border border-dark-blue">
                                        Popular
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="py-16">
                                {_news.map(item =>  <NewsCard key={item.id} item={item} />)}
                            </div>
                            <UpdateStatus date="30.3.2022" />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

