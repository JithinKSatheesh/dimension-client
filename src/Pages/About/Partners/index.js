import React, {useState} from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideTop } from 'Components/SlideAnimation'

//  ** Brands
// import LogoRvs from 'Assets/brands/Rvs.png'
// import LogoDefoe from 'Assets/brands/defoe.png'
// import LogoAdriatic from 'Assets/brands/adriatic.png'
// **

import { PopUpcontainerBareBone } from 'Components/PopUpcontainer'

import { ThreeDots } from 'react-loader-spinner'
import { RenderPartners, RenderPartnerExpanded } from './RenderPartners'

export default function Partners(props) {

    const { getAboutPage } = props

    const partners = getAboutPage?.partners || []
    
    const [popup, setPopup] = useState(false)

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
                        {partners?.length <= 0 ?
                            <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                            :
                            <>
                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-24">
                                    {
                                        partners.map(item =>
                                            <RenderPartners
                                                key={item?.id}
                                                item={item?.attributes}
                                                onClick={() => setPopup(item?.attributes)}
                                            />)
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <PopUpcontainerBareBone onClose={() => setPopup(false)} open={popup}>
                <RenderPartnerExpanded item={popup} onClick={() => setPopup(false)} />
            </PopUpcontainerBareBone>

        </>
    )
}


