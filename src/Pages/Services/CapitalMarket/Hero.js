import React, {useEffect} from 'react'
import MarkdownView from 'react-showdown';

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'
import { SlideLeft, SlideRight, JustAppear, SlideTop, SlideBottom} from 'Components/SlideAnimation'

// ** assets
import { ReactComponent as IconHome  } from 'Assets/icons/service_home_blue.svg'


export default function Hero(props) {

    const { getServices, servicePageData } = props
   
    // const data = getServices?.services ?? []

    const pdf_url = servicePageData?.regilation_documents_capital_market_pdf?.url ?? ''
    const _regilation_documents_capital_market_pdf = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''

    // console.log(data)
    
    return (
        <>
        <div className="about-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-3xl font-bold flex items-center">
                            <SlideLeft>
                                <IconHome className='mr-6' />  
                            </SlideLeft>
                            <SlideRight>
                                Capital Markets Advisory
                            </SlideRight>
                        </div>
                        <div className="flex flex-wrap pt-16 items-end">
                            <div className="w-full xl:w-1/2 text-sm mb-16">
                                <JustAppear>
                                    <MarkdownView markdown={servicePageData?.capital_market_advisory} />
                                {/* Capital Markets Advisory is a key business area of Dimension and an integral part of its ability to achieve the Mission and Vision of the company. It consists of mergers & acquisitions (M&A) advisory, balance sheet advisory & capital restructuring, private placement, and research & analysis services.
                                <br /><br />
                                Our Capital Markets Advisory team consists of a dedicated team that involves experienced investment bankers from Armenia, Europe, and the United States. The team provides hands-on, independent advice to clients on raising capital - both strategically and from an execution perspective. The team advises on capital strategy, focusing on equity transactions such as IPOs, direct listings, private equity deals, and debt transactions such as private and public bonds issuances, private credit placements, and structuring of complex fixed income instruments. Our specialists are responsible for the structuring, underwriting and syndication of the above-mentioned and other products.
                                <br /><br />
                                The range of our clients includes financial sponsors, public and private companies, and clients who need to explore, identify and follow strategic priorities. Our clients rely on us to design solutions that suit distinctive and dynamic needs. Through a broad experience and a wide network of partners and correspondents in Armenia, Europe, and the United States, Dimension gives access to capital and execution that helps position clients for growth, all the while ensuring insightful pre-and post-transaction communications.
                                 */}
                                </JustAppear>

                            </div>
                            <div className="w-full h-full xl:w-1/2 mb-16 flex  justify-end">
                                <SlideBottom>

                            <DownloadDocumentButton 
                                onClick={() => window.open(_regilation_documents_capital_market_pdf, '_blank', 'noopener,noreferrer')}
                                className="w-fit pl-5 pr-14">
                                    Regilation documents
                                </DownloadDocumentButton>
                                </SlideBottom>
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
