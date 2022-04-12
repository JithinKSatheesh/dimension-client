import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


//  ** Brands
import LogoRvs from 'Assets/brands/Rvs.png'
import LogoDefoe from 'Assets/brands/defoe.png'
import LogoAdriatic from 'Assets/brands/adriatic.png'

// **
import { ReactComponent as IconLocation } from 'Assets/icons/location.svg'

export default function Partners(props) {

    const RenderPartners = (props) => {

        return (
            <SlideBottom>
                <div className="p-8 rounded-xl bg-blue-light text-dark-blue  hover-border-outline border-2">
                    <div className="h-32 border-b-2 border-color-blue">
                        <img src={props?.image} alt="" />
                    </div>
                    <div className="text-sm mt-10 flex items-center">
                        <IconLocation className='mr-4' />{props?.location}
                    </div>
                </div>
            </SlideBottom>
        )
    }


    return (
        <>
            <div id="partners" className=" about-wrapper-5">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 text-white font-bold text-2xl xl:text-3xl pb-16">
                            <SlideLeft>
                                Our partners
                            </SlideLeft>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-24">
                            <RenderPartners
                                image={LogoRvs}
                                location={"Newport Beach, California"}
                            
                            />
                            <RenderPartners
                                image={LogoDefoe}
                                location={"Zagreb, Croatia"}
                            
                            />
                            <RenderPartners
                                image={LogoAdriatic}
                                location={" London, UK"}
                            
                            />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
