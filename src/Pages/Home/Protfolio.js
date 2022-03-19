import React from 'react'

import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'

// components
import { DetailsButton } from 'Components/Buttons'

export default function Protfolio(props) {

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


    const ProtfolioCard = (props) => {

        return(
            <div className="bg-blue-light rounded-xl p-7 ">
                <div className="w-36 h-36 bg-white mx-auto rounded-full"></div>
                <div className="py-5 text-center font-semibold text-xl text-dark-blue">
                    {props?.item?.title}
                </div>
                <div className="text-center text-blue">
                    {props?.item?.type}
                </div>
                <div className="py-5 text-center text-sm text-dark-blue">
                    {props?.item?.desc}
                </div>
                <div className="text-center pt-5">
                    <DetailsButton to=""> Read&nbsp;more </DetailsButton>
                </div>
            </div>
        )

    }
    

    return (
        <>
        <div className=" hero-wrapper-5">
            <div className="container py-32 mx-auto px-4 ">
                <div className="flex justify-between items-center pb-24 ">
                    <div className="text-3xl  font-semibold text-white">
                        Portfolio
                    </div>
                    <div className="text-base text-white flex items-center cursor-pointer">
                        <div className="mr-3">All&nbsp;projects</div>
                        <IconRightArrow />
                    </div>
                </div>
                {/* --------------------------- */}
                <div class="grid grid-cols-1 xl:grid-cols-4 xl:grid-flow-col gap-16 xl:gap-16">
                    {_data.map(item => 
                        <ProtfolioCard item={item} />)
                    }
                </div>
            </div>
        </div>
        </>
    )
}
