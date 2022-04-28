import React, { useState } from 'react'

import { motion } from "framer-motion";
import MarkdownView from 'react-showdown';

// ** assets
import { Accordion } from 'Components/Accordion';
import Otherservices from './OtherServices';

export default function Contents(props) {

    const { getServices, servicePageData } = props

    const [expanded, setExpanded] = useState(false)


    return (
        <>
            <div className=" service-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16">
                            {/* -------------------------- */}
                            {/* --------- Col 1---------- */}
                            <div>

                                <div className='mb-12'>
                                    <Accordion
                                        id={1} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-1"
                                        title={<MarkdownView markdown={servicePageData?.service_heading_1} />}
                                    >
                                        <MarkdownView markdown={servicePageData?.service_description_1} />
                                            
                                        {/* Dimension provides creative solutions to the most specific needs regarding mergers and acquisitions, disposition of a part or restructuring, privatization and globalization of businesses.
                                        <br /><br />
                                        We advise on transactions in both strategic and distressed situations. We may also advise on financial and strategic alternatives to a sale, such as recapitalizations, spin-offs, carve-outs, split-offs or tracking stocks.
                                        <br /><br />
                                        Mergers and acquisitions can bring tremendous synergy to an enterprise and provide greater opportunities and competitive advantages. M&A transactions require complex processes including valuation, due diligence, negotiation and completion. Subsequently, a deep understanding of the nuances and minutiae will guarantee closure of successful M&A deals and to the best interest of our clients.
                                        <br /><br />
                                        <div className="font-bold">
                                            To maximize the gain from such deals, our team of experts:
                                        </div>
                                        <ul className='list-disc pl-8'>
                                            <li>
                                                evaluate potential targets or merger partners as well as financial and strategic alternatives;

                                            </li>
                                            <li>
                                                advise on strategy, timing, structure, financing, pricing;

                                            </li>
                                            <li>
                                                conducts due diligence with a thoroughly quantified assessment to assist the clients in deal process, address tax and legal issues, identify synergies and prepare for integration before the transaction is made;

                                            </li>
                                            <li>
                                                assist in negotiating and closing transactions;

                                            </li>
                                            <li>
                                                act as a dealer-manager in tender or exchange offers.

                                            </li>
                                        </ul> */}

                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={2} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title={<MarkdownView markdown={servicePageData?.service_heading_2} />}
                                    >
                                        <MarkdownView markdown={servicePageData?.service_description_2} />
                                        
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
                                        title={<MarkdownView markdown={servicePageData?.service_heading_3} />}
                                        
                                    >
                                       
                                            <MarkdownView markdown={servicePageData?.service_description_3} />
                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={5} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title={<MarkdownView markdown={servicePageData?.service_heading_4} />}
                                    >
                                             <MarkdownView markdown={servicePageData?.service_description_4} />
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
