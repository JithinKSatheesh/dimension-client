import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'


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
import { truncate } from 'Utils/string'

export default function News(props) {

    const { getConfigs } = useStoreItem()
    const { initArticles } = initStoreItem()

    const homePage = getConfigs?.configs?.home_page
    const _data = getConfigs?.configs?.home_page?.news ?? []
    const data = _data?.slice(0, 6)
    // const _date = getConfigs?.configs?.home_page?.news?.[0]?.updatedAt

    // useEffect(() => initArticles(), [])
    

    return (
        <>
         <div className=" hero-wrapper-5">
            <div className="container py-32  xl:py-24 2xl:py-32 mx-auto  ">
                <div className="flex flex-wrap justify-between items-center pb-24 xl:pb-16 2xl:pb-24">
                    <div className="text-3xl xl:text-xl 2xl:text-2xl  3xl:text-3xl  font-semibold text-white">
                        {homePage?.news_title}
                    </div>
                        <Link to="/news">
                    <div className="text-base text-white flex items-center cursor-pointer">
                        <div className="mr-3 font-bold xl:text-sm 2xl:text-base"> 
                            <Trans i18nKey={"All news"}>
                                All&nbsp;news
                            </Trans>
                            </div>
                        <IconRightArrow />
                    </div>
                        </Link>
                </div>
                {/* ---------------------------- */}
                {data?.length <= 0 ?
                    <div className='flex justify-center '> <ThreeDots color='white' />  </div>
                    :
                    <>
                    {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 2xl:gap-16 "> */}
                    <div className="flex flex-wrap ">
                        {[...data].map((item, index) => (
                            // <div key={item?.id} className={`  ${(index === 0 || index === 3) && 'col-span-1 xl:col-span-2'}`}>
                            <div key={item?.id} className={` w-full sm:w-1/2 lg:w-1/3 p-4 `}>
                                <Link to={`/news/${item?.id}#newstop`}>
                                    <NewsCard item={item} index={index} />
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


    const {t} = useTranslation()
    const _imageURL =  props?.item?.image?.url ? `${process.env.REACT_APP_API_URL}${props?.item?.image?.url}` : NewsPlaceholder


    return(<div className={`news-card`}>
    <div 
        style={{
            backgroundImage : `url(${_imageURL})`,
            backgroundSize : 'cover',
        }} 
        className="relative h-[300px] md:h-[250px]  xl:h-[280px] 2xl:h-[300px] rounded-xl" >
         <div className="absolute w-full h-full news-img-overlay ">
             <div className="flex h-full items-end">
                 <div className='p-7 text-white'>
                    <div className="text-sm py-2.5 font-bold">
                        {formatDate(props.item?.publishedAt)}
                    </div>
                    <div className="text-sm text-lg lg::text-2xl xl:text-xl  font-bold ">
                        {truncate(props.item?.title, 50)}
                    </div>
                    <div className="py-2 xl:text-sm flex items-center font-bold">
                        <Link to={`/news/${props?.item?.id}#newstop`} > {t("Read more")} </Link>
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