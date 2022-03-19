import React from 'react'

import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'
import BrandImg from 'Assets/brands/brand1.png'

// components
import { GetButton } from 'Components/Buttons'

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


    const ProtfolioCard = (props) => {

        return(
            <div className="bg-blue-light rounded-xl p-7 ">
                <div className="text-center py-20">
                    <img src={BrandImg} alt="" className='mx-auto' />
                </div>
                <div className="py-5 text-center font-semibold text-xl text-dark-blue">
                    {props?.item?.title}
                </div>
                <div className=" text-center text-sm text-dark-blue">
                    {props?.item?.desc}
                </div>
                <div className="text-center pt-10">
                    <GetButton to="/" className="px-16 py-2"> Get&nbsp;it </GetButton>
                </div>
            </div>
        )

    }
    

    return (
        <>
            <div className=" hero-wrapper-6">
                <div className="container py-32 mx-auto px-4 ">
                    <div className="flex justify-between items-center pb-24 ">
                        <div className="text-3xl  font-semibold text-dark-blue">
                            Market researches
                        </div>
                        <div className="text-base text-dark-blue flex items-center cursor-pointer">
                            <div className="mr-3">All&nbsp;projects</div>
                            <IconRightArrow  />
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
