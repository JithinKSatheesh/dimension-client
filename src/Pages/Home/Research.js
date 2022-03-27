import React from 'react'

import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'
import BrandImg from 'Assets/brands/brand1.png'

// components
import { GetButton } from 'Components/Buttons'
import { Link } from 'react-router-dom'

export default function Research(props) {

    const _data = [
        { 
            img : '',
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        { 
            img : '',
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        { 
            img : '',
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
        { 
            img : '',
            title : "Demo",
            type : "Type",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tincidunt massa nisl.',
        },
    ]


    return (
        <>
            <div className=" hero-wrapper-6">
                <div className="container py-32 mx-auto px-4 ">
                    <div className="flex justify-between items-center pb-24 ">
                        <div className="text-3xl  font-semibold text-dark-blue">
                            Market researches
                        </div>
                        <div className="text-base text-dark-blue flex items-center cursor-pointer">
                            <Link to="/market-research">
                            <div className="mr-3 font-bold">All&nbsp;researches</div>
                            </Link>
                            <IconRightArrow  />
                        </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-16 xl:gap-16">
                        {_data.map((item, index) =>
                            <ResearchCard to="/market-research" key={index} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export const ResearchCard = (props) => {

    return(
        <div className="bg-blue-light rounded-xl p-7 ">
            <div className="text-center py-16">
                <img src={BrandImg} alt="" className='mx-auto' />
            </div>
            <div className="py-5 text-center font-semibold text-xl text-dark-blue">
                {props?.item?.title}
            </div>
            <div className=" text-center text-xs 2xl:text-sm text-dark-blue">
                {props?.item?.desc}
            </div>
            <div className="text-center pt-10">
                <GetButton 
                    to={props?.to}  
                    onClick={props?.onClick}
                    className="px-20 py-2 bg-dark-blue-grad-hover cursor-pointer"> Get&nbsp;it </GetButton>
            </div>
        </div>
    )

}
