import React, { useState } from 'react'

import { motion } from "framer-motion";

// ** assets
import { Accordion } from 'Components/Accordion';
import Otherservices from './OtherServices';

export default function Contents(props) {
    
    const {getServices} = props

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
                                        title={<>Securities <br /> Underwriting</>}
                                    >
                                        Dimension offers underwriting services to clients that raise capital through an Initial Public Offering (IPO) or secondary offering. As the underwriter, Dimension assesses risk and the appropriate price of particular securities and ensures that the client’s offering will raise the capital needed. Upon agreement with the issuer, the underwriting can either be done on guaranteed or on best-effort basis.

                                        <br /><br />
                                        We are specialized in the underwriting of securities in the Armenian market, guiding medium and large size local companies through the entire capital raise process. We act as an advisor for our clients, file the prospectus and submit the application to the Central Bank of Armenia on behalf of the issuer. To secure investments, Dimension organizes financial roadshows to market the securities through series of presentations and meetings. Dimension gathers initial non-binding subscriptions and gauges the demand for the securities. When the securities are registered, Dimension closes the offering and sells the securities to investors through an exchange (IPOs, secondary public offerings).

                                        <br /><br />
                                        In some cases, Dimension may involve co-underwriters for the capital raise process, forming an underwriting syndicate.


                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={2} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title={<>Market <br /> Making</>}
                                    >
                                        We provide market making services to improve trading liquidity and general marketability of exchange-traded financial securities. Based on the agreement with the issuer, Dimension buys and holds predetermined volume of security inventory with the aim of quoting a set quantity on the exchange where the security is listed. With sufficient liquidity and continuous bid-ask quotations, trading costs and margins are decreased, while the demand in the capital market is increased and met.
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
                                        title={<>Exchange <br /> Listing</>}
                                    >
                                        Another key business direction in our advisory business is the professional advisory for the SMEs and corporation that seek to list a security on an exchange (both local and international). Specifically, we prepare and submit applications and prospectus to regulators and make sure that the issuer complies with the regulatory requirements before and after the listing. At all stages, Dimension acts as the issuer’s principal channel of communication with the exchange, responding on behalf of the issuer to all enquiries made by the exchange.
                                        <br /><br />
                                        Through our network of investment banks and advisors we can help companies to list on international exchanges, such as Vienna Stock Exchange and London Stock Exchange.

                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={5} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title={<>Corporate Registry <br/> & Securities Custody</>}
                                    >
                                        Dimension is a licensed Account Operator of the Central Depository of Armenia. We employ a team of licensed, award-winning specialists who with the assistance of the in-house lawyers provide high quality depository services. Our positioning and expertise in the field puts us at the forefronts of the Armenian market, where we are proud to serve more than 100 corporate clients.
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
                                        </ul>

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
