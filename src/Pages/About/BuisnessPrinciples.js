import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom} from 'Components/SlideAnimation'


// ** icons
import { ReactComponent as QualityAndProfessionalism } from 'Assets/icons/about/quality_and_professionalism.svg'
import { ReactComponent as TeamApproach } from 'Assets/icons/about/team_approach.svg'
import { ReactComponent as Integrity } from 'Assets/icons/about/Integrity.svg'
import { ReactComponent as Confidentality } from 'Assets/icons/about/confidentality.svg'
// import { ReactComponent as IconPeople } from 'Assets/icons/about/people.svg'

const _BuisnessPrinciples = [
    {
        icon : <QualityAndProfessionalism />,
        title : ' Quality and High professionalism',
        description : 'We offer wide-range of financial and investment services, ensuring the high quality of services provided, while putting our clients first. We take an individual approach to each partner and customer by building stable and long-term relationships. The company is guided by internationally recognized corporate governance norms and principles of collegial decision making.'
    },
    {
        icon :  <TeamApproach />,
        title : "Team Approach",
        description :  "Our team members share common values and are committed to the company's strategy. The employees of Dimension Investments are dedicated and united, who spare no effort and energy to properly carry out every project. We share our experience with each other, thereby creating effective working relationships.",
    },
    {
        icon :  <Confidentality />,
        title : "Confidentiality",
        description :  "The confidentiality of personal information of our customers is of utmost importance. Guided by the legislation of the Republic of Armenia, we guarantee the security of information about our customers and partners.",
    },
    {
        icon :  <Integrity />,
        title : "Integrity and Honesty",
        description :  "Building on our reputation, we highly value trust, honesty, and business ethics. Our vision is to become a stable, reliable financial institution in the financial market of the Republic of Armenia that acts within the framework of fiduciary responsibilities when providing services to investors.",
    },
]

export default function Buisnessprinciples(props) {


    const DataCard = (props) => {

        const {item} = props

        return (
            <div >
                <div className="max-w-xl mb-20">
                    <SlideRight>

                        <div className="pb-6 ">
                            {item?.icon}
                        </div>
                        <div className="pb-4 text-lg 2xl:text-xl text-dark-blue font-bold">
                            {item?.title}
                        </div>
                        <div className='text-dark-blue  leading-6 2xl:leading-6 text-xs 2xl:text-sm  '>
                            {item?.description}
                        </div>
                    </SlideRight>
                </div>

            </div>
        )
    }

    return (
        <>
            <div id="buisness-principles" className=" about-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 font-bold text-2xl xl:text-3xl pb-24 text-dark-blue">
                            <SlideLeft>
                            Our Business Principles
                            </SlideLeft>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full xl:w-1/3 order-2 xl:order-1">
                                <div className="w-full max-w-xl h-96  xl:h-full rounded-xl  about-principle-wrapper ">
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
