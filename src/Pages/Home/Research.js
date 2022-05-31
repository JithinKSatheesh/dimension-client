import React, { useEffect, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import { truncate } from 'Utils/string'
import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'
import BrandImg from 'Assets/brands/brand1.png'

import {ThreeDots} from 'react-loader-spinner'

// components
import { GetButton } from 'Components/Buttons'
import { Link } from 'react-router-dom'
import { PopUpcontainer } from 'Components/PopUpcontainer'
import {MarketResearchPopup} from 'Pages/MarketResearch/MarketResearchPopup'
import { UpdateStatus } from 'Components/UpdateStatus'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'


export default function Research(props) {

    const { getConfigs } = useStoreItem()
    const {t} = useTranslation()
    // const { initMarketResearch } = initStoreItem()

    const homePage = getConfigs?.configs?.home_page
    const _data = getConfigs?.configs?.home_page?.market_researches ?? []
    const data = _data?.slice(0, 4)

    const [popup, setPopup] = useState()

    // useEffect(() => initMarketResearch(), [])

    


    return (
        <>
            <div className=" hero-wrapper-8">
                <div className="container py-32 mx-auto  ">
                    <div className="flex flex-wrap justify-between items-center pb-24 ">
                        <div className="text-3xl  xl:text-xl 2xl:text-2xl  3xl:text-3xl   font-semibold text-white">
                            {homePage?.market_research_title}
                        </div>
                        <div className="text-base text-white flex items-center cursor-pointer">
                            <Link to="/market-research">
                            <div className="mr-3 font-bold">
                                <Trans i18nKey={"All researches"} >
                                    All&nbsp;researches
                                </Trans>
                            </div>
                            </Link>
                            <IconRightArrow  />
                        </div>
                    </div>
                    {/* --------------------------- */}
                    {data?.length <= 0 ?
                        <div className='flex justify-center '> <ThreeDots color='#206291' />  </div>
                        :
                        <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-8 2xl:gap-16">
                            {[...data].map((item, index) =>
                                <ResearchCard onClick={() => setPopup({item})} key={item?.id} item={item} />)
                            }
                        </div>
                    }
                </div>
            </div>  
           
            <PopUpcontainer heading="Research request" onClose={() => setPopup(false)} open={popup}>
                <MarketResearchPopup popup={popup} />
            </PopUpcontainer >
        </>
    )
}


export const ResearchCard = (props) => {

    const {t} = useTranslation()
    // const _imageURL =  `${process.env.REACT_APP_API_URL}${props?.item?.image?.data?.attributes?.url}`
    const _APIimage = props?.item?.image?.url
    // console.log(_APIimage)
    const _imageURL =  _APIimage ? `${process.env.REACT_APP_API_URL}${_APIimage}` : '/assets/photos/sample-icon-2.png'


    return(
        <div className="bg-blue-light rounded-xl p-7 hover-border-outline border-2 flex flex-col h-full justify-between">
            {/* <div className="text-center py-16">
                <img src={_imageURL} alt="" className='mx-auto' />
            </div> */}
            <div 
                style={{
                    backgroundImage : `url(${_imageURL})`,
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat',
                    backgroundSize : 'contain'

                }}
                className="w-36 h-36   mx-auto "></div>
            <div className="py-5 text-center font-semibold text-xl text-dark-blue">
                {props?.item?.title}
            </div>
            <div className=" text-center text-xs 2xl:text-xs text-dark-blue ">
                {(props?.item?.description) }
            </div>
            <div className="text-center py-5">
                <GetButton 
                    to={props?.to}  
                    onClick={props?.onClick}
                    className="w-full xl:text-xs 3xl:text-xs sm:max-w-sm mx-auto py-2 bg-dark-blue-grad-hover cursor-pointer">  {t("Get it")} </GetButton>
            </div>
        </div>
    )

}
