import React from 'react'

//  ** Brands
import LogoRvs from 'Assets/brands/Rvs.png'
import LogoDefoe from 'Assets/brands/defoe.png'
import LogoAdriatic from 'Assets/brands/adriatic.png'

// **
import { ReactComponent as IconLocation } from 'Assets/icons/location.svg'

export default function Partners(props) {


    return (
        <>
            <div className=" about-wrapper-5">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 text-white font-bold text-2xl xl:text-3xl pb-16">
                        Our partners
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-24">
                            <div className="p-8 rounded-xl bg-blue-light text-dark-blue">
                                <div className="h-32 border-b-2 border-color-blue">
                                    <img src={LogoRvs} alt="" />
                                </div>
                                <div className="text-sm mt-10 flex items-center">
                                   <IconLocation className='mr-4' /> Newport Beach, California
                                </div>
                            </div>
                            <div className="p-8 rounded-xl bg-blue-light">
                                <div className="h-32 border-b-2 border-color-blue">
                                    <img src={LogoDefoe} alt="" />
                                </div>
                                <div className="text-sm mt-10 flex items-center">
                                <IconLocation className='mr-4' /> Zagreb, Croatia
                                </div>
                            </div>
                            <div className="p-8 rounded-xl bg-blue-light">
                                <div className="h-32 border-b-2 border-color-blue">
                                    <img src={LogoAdriatic} alt="" />
                                </div>
                                <div className="text-sm mt-10 flex items-center">
                                <IconLocation className='mr-4' /> London, UK
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
