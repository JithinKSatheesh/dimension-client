import React from 'react'


// ** icons
import { ReactComponent as IconCert } from 'Assets/icons/about/certificate.svg'
import { ReactComponent as IconDedication } from 'Assets/icons/about/dedication.svg'
import { ReactComponent as IconLaw } from 'Assets/icons/about/law.svg'
import { ReactComponent as IconPeople } from 'Assets/icons/about/people.svg'
import { ReactComponent as IconConfident } from 'Assets/icons/about/confident.svg'

export default function Buisnessprinciples(props) {


    return (
        <>
            <div className=" about-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 font-bold text-2xl xl:text-3xl pb-24">
                            Our Business Principles
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full xl:w-1/3 order-2 xl:order-1">
                                <div className="w-full max-w-xl h-96  xl:h-full rounded-xl  about-principle-wrapper ">
                                    {/* Image placeholder */}
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 order-1 xl:order-2 pl-0 xl:pl-44">
                                <div class="grid grid-cols-1  xl:grid-cols-2 gap-x-32">
                                    <div >
                                        <div className="max-w-xl mb-20">

                                            <div className="pb-6 ">
                                                <IconCert />
                                            </div>
                                            <div className="pb-4 text-xl text-dark-blue font-bold">
                                                The quality of our work
                                            </div>
                                            <div className='text-dark-blue '>
                                                Within the wide range of financial services available, we offer a unique combination of services to best serve our client’s interests.
                                            </div>
                                        </div>

                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <div className="pb-6">
                                                <IconDedication />
                                            </div>
                                            <div className="pb-4 text-xl text-dark-blue font-bold">
                                                Dedication and loyality is what sets us apart.
                                            </div>
                                            <div className='text-dark-blue '>
                                                We try harder to deliver more than expected.
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <div className="pb-6">
                                                <IconLaw />
                                            </div>
                                            <div className="pb-4 text-xl text-dark-blue font-bold">
                                                People, capital and reputation, the sacred three.
                                            </div>
                                            <div className='text-dark-blue '>
                                                You can never straighten a wrinkled paper. The same truth applies to trust and reputation. Our utmost commitment to the letter and spirit of the laws, rules and ethical principles is the pillar upon which we build business relationships with our clients.
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <div className="pb-6">
                                                <IconPeople />
                                            </div>
                                            <div className="pb-4 text-xl text-dark-blue font-bold">
                                                Integrity and honesty make our business dealings hard to forget.
                                            </div>
                                            <div className='text-dark-blue '>
                                                A good firm is based on people who adhere to high ethical standards in all things they are involved in, whether it is professional or personal.
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='max-w-xl mb-20'>
                                            <div className="pb-6">
                                                <IconConfident />
                                            </div>
                                            <div className="pb-4 text-xl text-dark-blue font-bold">
                                            Confidentiality rules in any dealing with our clients.
                                            </div>
                                            <div className='text-dark-blue '>
                                            Client's confidence in us is the crest we bear with pride and any breach is unthinkable.
                                            </div>
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
