import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom } from 'Components/SlideAnimation'

import AboutImage1 from 'Assets/img/about_principles.png'

// ** icons
import { ReactComponent as QualityAndProfessionalism } from 'Assets/icons/about/quality_and_professionalism.svg'
import { ReactComponent as TeamApproach } from 'Assets/icons/about/team_approach.svg'
import { ReactComponent as Integrity } from 'Assets/icons/about/Integrity.svg'
import { ReactComponent as Confidentality } from 'Assets/icons/about/confidentality.svg'
import { Markdown } from 'react-showdown'
// import { ReactComponent as IconPeople } from 'Assets/icons/about/people.svg'

export default function Buisnessprinciples(props) {

    const { aboutPageData } = props

    const _aboutImg1URL = aboutPageData?.buisness_principle_image?.url
    const _aboutImg1 = _aboutImg1URL ? `${process.env.REACT_APP_API_URL}${_aboutImg1URL}` : AboutImage1

    const _BuisnessPrinciples = [
        {
            icon: <QualityAndProfessionalism />,
            title: aboutPageData?.buisness_principle_1,
            description: aboutPageData?.buisness_principle_description_1
        },
        {
            icon: <TeamApproach />,
            title: aboutPageData?.buisness_principle_2,
            description: aboutPageData?.buisness_principle_description_2
        },
        {
            icon: <Confidentality />,
            title: aboutPageData?.buisness_principle_3,
            description: aboutPageData?.buisness_principle_description_3
        },
        {
            icon: <Integrity />,
            title: aboutPageData?.buisness_principle_4,
            description: aboutPageData?.buisness_principle_description_4
        },
    ]


    const DataCard = (props) => {

        const { item } = props

        return (
            <div >
                <div className="max-w-xl mb-20">
                    <SlideRight>

                        <div className="pb-6 ">
                            {item?.icon}
                        </div>
                        <div className="pb-4 text-lg xl:text-sm 2xl:text-xl text-dark-blue font-bold">
                            {item?.title}
                        </div>
                        <div className='text-dark-blue  text-xs xl:text-xs 2xl:text-sm   leading-6 xl:leading-6 2xl:leading-6 '>
                           <Markdown markdown={item?.description} />
                        </div>
                    </SlideRight>
                </div>

            </div>
        )
    }

    return (
        <>
            <div id="principles" className=" about-wrapper-2">
                <div className="container mx-auto ">
                    <div className="py-36">
                        <div className="mb-6 font-bold text-2xl xl:text-2xl 2xl:text-3xl pb-24 text-dark-blue">
                            <SlideLeft>
                                {/* Our Business Principles */}
                                {aboutPageData?.buisness_principle_title}
                            </SlideLeft>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full xl:w-1/3 order-2 xl:order-1">
                                <div 
                                    style={{
                                        backgroundImage: `linear-gradient(102.45deg, rgba(0, 97, 146, 0.6) 2.71%, rgba(0, 97, 146, 0) 99.17%), url(${_aboutImg1})`,
                                        backgroundSize: 'cover'
                                    }}
                                    className="w-full max-w-xl h-96  xl:h-full rounded-xl   ">
                                    {/* Image placeholder */}
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 order-1 xl:order-2 pl-0 xl:pl-44">
                                <div className="grid grid-cols-1  xl:grid-cols-2 gap-x-20 2xl:gap-x-32">
                                    {_BuisnessPrinciples.map(item => <DataCard item={item} key={item.title} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
