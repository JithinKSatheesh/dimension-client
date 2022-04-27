import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'
import {ReactComponent as Logo2} from 'Assets/icons/logo_2.svg'

// **assets
import NewsPlaceholder from 'Assets/img/news_sample_1.png'

import {ThreeDots} from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

// ** utils
import { formatDate } from 'Utils/time'

export default function News(props) {

    const { getArticles } = useStoreItem()
    const { initArticles } = initStoreItem()

    const _data = getArticles?.articles ?? []
    const data = _data?.slice(0, 4)
    const _date = getArticles?.articles?.[0]?.attributes?.updatedAt

    useEffect(() => initArticles(), [])
    

    return (
        <>
         <div className=" hero-wrapper-5">
            <div className="container py-32 mx-auto px-4 ">
                <div className="flex justify-between items-center pb-24 ">
                    <div className="text-3xl  font-semibold text-white">
                        News
                    </div>
                        <Link to="/news">
                    <div className="text-base text-white flex items-center cursor-pointer">
                        <div className="mr-3 font-bold">All&nbsp;news</div>
                        <IconRightArrow />
                    </div>
                        </Link>
                </div>
                {/* ---------------------------- */}
                {data?.length <= 0 ?
                    <div className='flex justify-center '> <ThreeDots color='white' />  </div>
                    :
                    <>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 ">
                        {[...data].map((item, index) => (
                            <div key={item?.id} className={`  ${(index === 0 || index === 3) && 'col-span-1 xl:col-span-2'}`}>
                                <Link to={`/news/${item?.id}#newstop`}>
                                    <NewsCard item={item?.attributes} index={index} />
                                </Link>
                            </div>
                        ))}
                    </div>
                
                    </>}
            </div>
        </div>    
        </>
    )
}


export const NewsCard = (props) => {

    const _imageURL =  props?.item?.image?.data ? `${process.env.REACT_APP_API_URL}${props?.item?.image?.data?.attributes?.url}` : NewsPlaceholder


    return(<div className={`news-card`}>
    <div 
        style={{
            backgroundImage : `url(${_imageURL})`,
            backgroundSize : 'cover',
        }} 
        className="relative h-80 rounded-xl" >
         <div className="absolute w-full h-full news-img-overlay ">
             <div className="flex h-full items-end">
                 <div className='p-7 text-white'>
                    <div className="text-sm py-2.5 font-bold">
                        {formatDate(props.item?.publishedAt)}
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