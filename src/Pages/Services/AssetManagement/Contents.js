import React, { useState } from 'react'


// ** assets
import { Accordion } from 'Components/Accordion';
import Otherservices from './OtherServices';

export default function Contents(props) {

    const {getServices} = props
    const [expanded, setExpanded] = useState(false)


    return (
        <>
            <div className="service-wrapper-2 ">
                <div className="container mx-auto px-4 ">
                    <div className="py-36">
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16">
                            {/* -------------------------- */}
                            {/* --------- Col 1---------- */}
                            <div>

                                <div className='mb-12'>
                                    <Accordion
                                        id={1} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-1"
                                        title={<>Funds <br/> Management</>}
                                    >
                                        Our subsidiary company Dimension Funds Management manages two open, non-public, leveraged fixed income funds. Dimension Fixed Income Funds (AMD and US$ target to deliver capital appreciation by dynamically investing in Armenian listed bonds. Funds’ invest in diversified portfolios of Armenian government and higher-quality corporate bonds listed and traded on Armenian Securities Exchange. Funds seek higher total returns than typical core emerging market bond strategies and provide freedom to invest across a variety of Armenian government and corporate bonds. Returns are enhanced by opportunistically deploying leverage and participating in bond underwriting syndicates (I pretty much copied from the factsheets).

                                    </Accordion>
                                </div>
                                
                            </div>
                            {/* -------------------------- */}
                            {/* --------- Col 2---------- */}
                            <div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={3} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-1"
                                        title={<>Portfolio Management <br/> & Private Wealth Solutions</>}
                                    >
                                       We facilitate and enhance our clients’ portfolio and private wealth management. Solutions range from brokerage account opening, retirement and goals-based planning to delivering financial advice & recommendations based on carefully constructed portfolios and smart rebalancing. The service is supplemented by regular, relevant, and transparent portfolio performance reporting.
                                        <br/>
                                        Portfolio and wealth management services are provided to a wide range of clients, including but not limited to institutional clients and high net worth individuals based in Armenia and abroad. Investment advisors ensure that each client is treated accordingly based on the risk appetite, investment objectives, financial constraints, special considerations, and other key factors. 

                                    </Accordion>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Otherservices getServices={getServices} />
            </div>
        </>
    )
}
