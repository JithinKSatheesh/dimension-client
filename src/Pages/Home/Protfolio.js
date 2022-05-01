import React, { useEffect, useState } from 'react'

import { SlideBottom } from 'Components/SlideAnimation'
import { truncate } from 'Utils/string'

import { ReactComponent as IconRightArrow } from 'Assets/icons/ArrowRight.svg'

import { ThreeDots } from 'react-loader-spinner'

// components
import { DetailsButton } from 'Components/Buttons'
import { Link } from 'react-router-dom'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'


export default function Protfolio(props) {

    // const [protfolioData, setProtfolioData] = useState([])

    const { getConfigs } = useStoreItem()
    // const { initProtfolio } = initStoreItem()

    const _data = getConfigs?.configs?.home_page?.portfolios ?? []
    const data = _data?.slice(0, 4)


    // useEffect(() => {
    //     initProtfolio()
    // }, [])


    return (
        <>
            <div className=" hero-wrapper-6">
                <div className="container py-32 mx-auto ">
                    <div className="flex justify-between items-center items-center pb-24 ">
                        <div className="text-3xl xl:text-xl 2xl:text-2xl  3xl:text-3xl   font-semibold text-blue">
                            Portfolio
                        </div>
                        <div className="text-base xl:text-sm text-blue flex items-center cursor-pointer">
                            <Link to='/protfolio'>
                                <div className="mr-3 font-bold">All&nbsp;projects</div>
                            </Link>
                            <IconRightArrow />
                        </div>
                    </div>
                    {/* --------------------------- */}
                    {data?.length <= 0 ?
                        <div className='flex justify-center '> <ThreeDots color='#206291' />  </div>
                        :
                        <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-8 2xl:gap-16">
                            {[...data].map((item, index) =>
                                <ProtfolioCard key={item?.id} item={item} />)
                            }
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export const ProtfolioCard = (props) => {

    const _APIimage = props?.item?.image?.url
    const _imageURL = _APIimage ? `${process.env.REACT_APP_API_URL}${_APIimage}` : ''

    // console.log(props?.item)

    return (
        <SlideBottom>

            <div className="bg-blue-light rounded-xl p-7  hover-border-outline-white border-2">
                <div
                    style={{
                        backgroundImage: `url(${_imageURL})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'

                    }}
                    className="w-36 h-36 bg-white  mx-auto rounded-full"></div>
                <div className="py-5 text-center font-semibold text-xl xl:text-lg text-dark-blue">
                    {props?.item?.title}
                </div>
                <div className="text-center text-blue h-12 xl:h-10 xl:text-sm">
                    {props?.item?.type_of_project}
                </div>
                <div className=" text-center text-xs xl:text-xs 2xl:text-sm text-dark-blue h-28 xl:h-24 overflow-hidden truncate-2">
                    {truncate(props?.item?.description)}
                </div>
                <div className="text-center py-5">
                    <a
                        target="_blank"
                        href={props?.item?.link}>
                        <div
                            className='btn w-full bg-dark-blue-grad py-3 text-center rounded-xl text-white font-semibold'
                        >
                            Read&nbsp;more
                        </div>
                    </a>
                    {/* <DetailsButton to=""> Read&nbsp;more </DetailsButton> */}
                </div>
            </div>
        </SlideBottom>

    )

}