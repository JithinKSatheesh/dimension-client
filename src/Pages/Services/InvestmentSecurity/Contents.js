import React, { useState } from 'react'

import { motion } from "framer-motion";

// ** assets
import { Accordion } from 'Components/Accordion';
import Otherservices from './OtherServices';
import { Markdown } from 'react-showdown';

export default function Contents(props) {
    
    const {getServices,  servicePageData} = props

    const [expanded, setExpanded] = useState(false)


    return (
        <>
            <div className=" service-wrapper-2">
                <div className="container mx-auto ">
                    <div className="py-36">
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16">
                            {/* -------------------------- */}
                            {/* --------- Col 1---------- */}
                            <div>

                                <div className='mb-12'>
                                    <Accordion
                                        id={1} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-1"
                                        title={<Markdown markdown={servicePageData?.service_heading_1} />}
                                    >
                                        <Markdown markdown={servicePageData?.service_description_1} />
                                        {/* Dimension offers underwriting services to clients that raise capital through an Initial Public Offering (IPO) or secondary offering. As the underwriter, Dimension assesses risk and the appropriate price of particular securities and ensures that the client’s offering will raise the capital needed. Upon agreement with the issuer, the underwriting can either be done on guaranteed or on best-effort basis.

                                        <br /><br />
                                        We are specialized in the underwriting of securities in the Armenian market, guiding medium and large size local companies through the entire capital raise process. We act as an advisor for our clients, file the prospectus and submit the application to the Central Bank of Armenia on behalf of the issuer. To secure investments, Dimension organizes financial roadshows to market the securities through series of presentations and meetings. Dimension gathers initial non-binding subscriptions and gauges the demand for the securities. When the securities are registered, Dimension closes the offering and sells the securities to investors through an exchange (IPOs, secondary public offerings).

                                        <br /><br />
                                        In some cases, Dimension may involve co-underwriters for the capital raise process, forming an underwriting syndicate.
 */}

                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={2} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title={<Markdown markdown={servicePageData?.service_heading_2} />}
                                        
                                    >
                                        <Markdown markdown={servicePageData?.service_description_2} />
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
                                        title={<Markdown markdown={servicePageData?.service_heading_3} />}
                                    >
                                        <Markdown markdown={servicePageData?.service_description_3} />
                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={5} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title={
                                            <Markdown markdown={servicePageData?.service_heading_4} />
                                        }
                                    >
                                        <Markdown markdown={servicePageData?.service_description_4} />
                                        {/* Dimension is a licensed Account Operator of the Central Depository of Armenia. We employ a team of licensed, award-winning specialists who with the assistance of the in-house lawyers provide high quality depository services. Our positioning and expertise in the field puts us at the forefronts of the Armenian market, where we are proud to serve more than 100 corporate clients.
                                        <br /><br />
                                        <div className="font-bold">
                                            We act as the intermediary for the following depository services:
                                        </div>
                                        <br />
                                        Registry related services
                                        <br /><br />
                                        <div>
                                            <ul className='list-disc pl-8'>
                                                <li>
                                                    Conclusion and re-conclusion of contracts for the maintenance of Issuer’s shares registry
                                                </li>
                                                <li>
                                                    Administering operations related to securities placement
                                                </li>
                                                <li>
                                                    Conducting operations conditioned by corporate actions
                                                </li>
                                                <li>
                                                    Amending information in the registry systems
                                                </li>
                                                <li>
                                                    Supplying statements and list of shareholders from the unified system
                                                </li>
                                            </ul>
                                        </div>

                                        <br />
                                        Securities custody
                                        <br /><br />
                                        <ul className='list-disc pl-8'>
                                            <li>
                                                Opening and custody of securities accounts

                                            </li>
                                            <li>
                                                Change of securities account information

                                            </li>
                                            <li>
                                                Conducting operations caused by securities transfer

                                            </li>
                                            <li>
                                                Registration of rights for the pledge of securities

                                            </li>
                                        </ul> */}

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
