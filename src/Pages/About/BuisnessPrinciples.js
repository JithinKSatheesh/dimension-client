import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom} from 'Components/SlideAnimation'


// ** icons
import { ReactComponent as IconCert } from 'Assets/icons/about/certificate.svg'
import { ReactComponent as DedicationIcon } from 'Assets/icons/about/dedication.svg'
import { ReactComponent as IconLaw } from 'Assets/icons/about/law.svg'
import { ReactComponent as IconPeople } from 'Assets/icons/about/people.svg'
import { ReactComponent as IconConfident } from 'Assets/icons/about/confident.svg'

export default function Buisnessprinciples(props) {


    return (
        <>
            <div id="buisness-principles" className=" about-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 font-bold text-2xl xl:text-3xl pb-24">
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
                                    <div >
                                        <div className="max-w-xl mb-20">
                                            <SlideRight>

                                            <div className="pb-6 ">
                                                <IconCert />
                                            </div>
                                            <div className="pb-4 text-lg 2xl:text-xl text-dark-blue font-bold">
                                                The quality of our work
                                            </div>
                                            <div className='text-dark-blue text-sm 2xl:text-base '>
                                                Within the wide range of financial services available, we offer a unique combination of services to best serve our client’s interests.
                                            </div>
                                            </SlideRight>
                                        </div>

                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <SlideRight>

                                            <div className="pb-6">
                                                <DedicationIcon />
                                                {/* <img src={Dedication} alt="" /> */}
                                            </div>
                                            <div className="pb-4 text-lg 2xl:text-xl text-dark-blue font-bold">
                                                Dedication and loyality is what sets us apart.
                                            </div>
                                            <div className='text-dark-blue text-sm 2xl:text-base '>
                                                We try harder to deliver more than expected.
                                            </div>
                                            </SlideRight>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <SlideRight>

                                            <div className="pb-6">
                                                <IconLaw />
                                            </div>
                                            <div className="pb-4 text-lg 2xl:text-xl text-dark-blue font-bold">
                                                People, capital and reputation, the sacred three.
                                            </div>
                                            <div className='text-dark-blue text-sm 2xl:text-base '>
                                                You can never straighten a wrinkled paper. The same truth applies to trust and reputation. Our utmost commitment to the letter and spirit of the laws, rules and ethical principles is the pillar upon which we build business relationships with our clients.
                                            </div>
                                            </SlideRight>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <SlideRight>

                                            <div className="pb-6">
                                                <IconPeople />
                                            </div>
                                            <div className="pb-4 text-lg 2xl:text-xl text-dark-blue font-bold">
                                                Integrity and honesty make our business dealings hard to forget.
                                            </div>
                                            <div className='text-dark-blue text-sm 2xl:text-base '>
                                                A good firm is based on people who adhere to high ethical standards in all things they are involved in, whether it is professional or personal.
                                            </div>
                                            </SlideRight>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <SlideLeft>

                                            <div className="pb-6">
                                                <IconConfident />
                                            </div>
                                            <div className="pb-4 text-lg 2xl:text-xl text-dark-blue font-bold">
                                            Confidentiality rules in any dealing with our clients.
                                            </div>
                                            <div className='text-dark-blue text-sm 2xl:text-base '>
                                            Client's confidence in us is the crest we bear with pride and any breach is unthinkable.
                                            </div>
                                            </SlideLeft>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
