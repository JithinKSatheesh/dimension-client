import React, {  useEffect, useState } from 'react'

import { SlideBottom } from 'Components/SlideAnimation'

import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'


// components
import { DetailsButton } from 'Components/Buttons'
import { Link } from 'react-router-dom'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function Protfolio(props) {

    // const [protfolioData, setProtfolioData] = useState([])

    const { getProtfolio } = useStoreItem()
    const { initProtfolio } = initStoreItem()

    const data = getProtfolio?.protfolio ?? []


    // console.log(getProtfolio)

    const _data = [
        { 
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        { 
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        { 
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        { 
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
    ]



    useEffect(() => {
        initProtfolio()
    }, [])
    

    return (
        <>
        <div className=" hero-wrapper-5">
            <div className="container py-32 mx-auto px-4 ">
                <div className="flex justify-between items-center pb-24 ">
                    <div className="text-3xl  font-semibold text-white">
                        Portfolio
                    </div>
                    <div className="text-base text-white flex items-center cursor-pointer">
                        <Link to='/protfolio'>
                            <div className="mr-3 font-bold">All&nbsp;projects</div>
                        </Link>
                        <IconRightArrow />
                    </div>
                </div>
                {/* --------------------------- */}
                <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-16 xl:gap-16">
                    {[...data].map((item, index) => 
                        <ProtfolioCard key={item?.id} item={item?.attributes} />)
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export const ProtfolioCard = (props) => {

    const _imageURL =  `${process.env.REACT_APP_API_URL}${props?.item?.image?.data?.attributes?.url}`

    // console.log(_imageURL)

    return(
        <SlideBottom>

        <div className="bg-blue-light rounded-xl p-7 ">
            <div 
                style={{
                    backgroundImage : `url(${_imageURL})`,
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat',
                    backgroundSize : 'cover'

                }}
                className="w-36 h-36 bg-white  mx-auto rounded-full"></div>
            <div className="py-5 text-center font-semibold text-xl text-dark-blue">
                {props?.item?.title}
            </div>
            <div className="text-center text-blue">
                {props?.item?.type}
            </div>
            <div className="py-5 text-center text-sm text-dark-blue">
                {props?.item?.description}
            </div>
            <div className="text-center pt-5">
                <a 
                    className='btn px-12 bg-dark-blue-grad py-3 text-center rounded-xl text-white font-semibold'
                    target="_blank"
                    href={props?.item?.link}> Read&nbsp;more</a>
                {/* <DetailsButton to=""> Read&nbsp;more </DetailsButton> */}
            </div>
        </div>
        </SlideBottom>

    )

}