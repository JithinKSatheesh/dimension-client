import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

//  ** Brands
// import LogoRvs from 'Assets/brands/Rvs.png'
// import LogoDefoe from 'Assets/brands/defoe.png'
// import LogoAdriatic from 'Assets/brands/adriatic.png'
// **

import { ThreeDots } from 'react-loader-spinner'
import { ReactComponent as IconLocation } from 'Assets/icons/location.svg'

export default function Partners(props) {

    const { getAboutPage } = props

    const partners = getAboutPage?.partners || []

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
                                            />)
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

const RenderPartners = (props) => {

    const { item } = props

    const _image = item?.logo?.data ? `${process.env.REACT_APP_API_URL}${item?.logo?.data?.attributes?.url}` : ''

    // console.log(item)

    return (
        <SlideBottom>
            <div className="p-8 rounded-xl bg-blue-light text-blue  hover-border-outline border-2">
                <div className="h-32 border-b-2 border-color-blue">
                    <img src={_image} alt="" />
                </div>
                <div className="flex justify-between items-center mt-10">
                    <div className="text-sm flex items-center">
                        <IconLocation className='mr-4' />{item?.address}
                    </div>
                    {/* {item?.website} */}
                    <a href={item?.website} target="_blank">
                        <div className="text-xs rounded-lg bg-dark-blue-grad p-2 text-white cursor-pointer flex">
                            <svg  width="14" height="14" viewBox="0 0 24 24" fill='white' ><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>
                            &nbsp;&nbsp;About&nbsp;us
                        </div>
                    </a>
                </div>
            </div>
        </SlideBottom>
    )
}