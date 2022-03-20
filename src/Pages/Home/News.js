import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'
import {ReactComponent as Logo2} from 'Assets/icons/logo_2.svg'

// **assets
import NewsPlaceholder from 'Assets/img/news_sample_1.png'

export default function News(props) {


    const newsData = [
        {
            title : "Sample",
            img : '',
            date : '15.02.2022',
            id : 1
        },
        {
            title : "Sample",
            img : '/assets/photos/news_sample_2.png',
            date : '15.02.2022',
            id : 2
        },
        {
            title : "Sample",
            img : '',
            date : '15.02.2022',
            id : 3
        },
        {
            title : "Sample",
            img : '/assets/photos/news_sample_4.png',
            date : '15.02.2022',
            id : 4
        },
    ]

    const NewsCard = (props) => {
        return(<div className={`news-card  ${(props.index === 0 || props.index === 3 ) && 'col-span-1 xl:col-span-2'}`}>
        <div 
            style={{
                backgroundImage : `url(${props?.item?.img ? props?.item?.img :  NewsPlaceholder})`,
                backgroundSize : 'cover',
            }} 
            className="relative h-80 rounded-xl" >
             <div className="absolute w-full h-full news-img-overlay ">
                 <div className="flex h-full items-end">
                     <div className='p-7 text-white'>
                        <div className="text-sm py-2.5 font-bold">
                            {props.item?.date}
                        </div>
                        <div className="text-2xl  font-bold ">
                            {props.item?.title}
                        </div>
                        <div className="py-2 5 flex items-center font-bold">
                            <Link to="/" > Read more </Link>
                            <div className="ml-4">
                                <IconRightArrow  />
                            </div>
                        </div>
                     </div>
                 </div>
             </div>
        </div>
    </div>)
    }
    

    return (
        <>
         <div className=" hero-wrapper-8">
            <div className="container py-32 mx-auto px-4 ">
                <div className="flex justify-between items-center pb-24 ">
                    <div className="text-3xl  font-semibold text-white">
                        News
                    </div>
                    <div className="text-base text-white flex items-center cursor-pointer">
                        <div className="mr-3 font-bold">All&nbsp;news</div>
                        <IconRightArrow />
                    </div>
                </div>
                {/* ---------------------------- */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 ">
                    {newsData.map((item, index) => (<NewsCard key={index} item={item} index={index} />))}
                </div>
                <div className="pt-32">
                    <div className="flex justify-end items-center">
                        <div className="text-sm text-white mr-4">
                            updated: 15.02.2022
                        </div>
                        <Logo2 />
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}
