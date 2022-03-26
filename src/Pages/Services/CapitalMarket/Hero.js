import React from 'react'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'

// ** assets
import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'

export default function Hero(props) {
    

    return (
        <>
        <div className="about-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-3xl font-bold flex items-center">
                        <IconHome className='mr-6' />  Capital Markets Advisory
                        </div>
                        <div className="flex flex-wrap pt-16 items-end">
                            <div className="w-full xl:w-1/2 text-sm mb-16">
                                Capital Markets Advisory is a key business area of Dimension and an integral part of its ability to achieve the Mission and Vision of the company. It consists of mergers & acquisitions (M&A) advisory, balance sheet advisory & capital restructuring, private placement, and research & analysis services.
                                <br /><br />
                                Our Capital Markets Advisory team consists of a dedicated team that involves experienced investment bankers from Armenia, Europe, and the United States. The team provides hands-on, independent advice to clients on raising capital - both strategically and from an execution perspective. The team advises on capital strategy, focusing on equity transactions such as IPOs, direct listings, private equity deals, and debt transactions such as private and public bonds issuances, private credit placements, and structuring of complex fixed income instruments. Our specialists are responsible for the structuring, underwriting and syndication of the above-mentioned and other products.
                                <br /><br />
                                The range of our clients includes financial sponsors, public and private companies, and clients who need to explore, identify and follow strategic priorities. Our clients rely on us to design solutions that suit distinctive and dynamic needs. Through a broad experience and a wide network of partners and correspondents in Armenia, Europe, and the United States, Dimension gives access to capital and execution that helps position clients for growth, all the while ensuring insightful pre-and post-transaction communications.

                            </div>
                            <div className="w-full h-full xl:w-1/2 mb-16 flex  justify-end">
                            <DownloadDocumentButton className="w-fit pl-5 pr-14">
                                    Regilation documents
                                </DownloadDocumentButton>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
            
        </>
    )
}
