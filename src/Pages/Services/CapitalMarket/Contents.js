import React, { useState } from 'react'

import { motion } from "framer-motion";

// ** assets
import { Accordion } from 'Components/Accordion';
import Otherservices from './OtherServices';

export default function Contents(props) {

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
                                        title="Mergers & Acquisitions (M&A) Advisory"
                                    >
                                        Dimension provides creative solutions to the most specific needs regarding mergers and acquisitions, disposition of a part or restructuring, privatization and globalization of businesses.
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


                                        </ul>

                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={2} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title="Private Placements"
                                    >
                                        Private placements are an alternative to public offerings for those companies that seek to raise capital for expansion, refinancing, or other purposes. Through a broad network of partners, investors, and correspondents, Dimension sells shares, bonds, or other securities to pre-selected investors and institutions. These investors are usually high net worth individuals, financial institutions, pension funds, insurance companies, and other funds. Before the placement, we also act as an advisor to structure the process in a manner that advances company’s strategic and financial objectives.
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
                                        title="Balance Sheet Advisory & Capital Restructuring"
                                    >
                                        Dimension offers a toolbox of balance sheet solutions in a fully integrated manner. The financial and legal teams have experience assisting clients with different organizational (LLCs, CJSCs, OJSCs) and capital structures at different growth stages.
                                        <br /><br />
                                        We evaluate the asset and liability structures in detail, identifying gaps and offering solutions such as improved liquidity positions, efficient working capital management, tax optimization, debt advisory, interest and currency risk management, and other key areas and business units. Based on the analyses and conclusions thereof, Dimension offers alternative debt and/or equity financing methods, risk management planning and execution, investment opportunities, and capital restructuring strategy. These solutions have the goal of optimizing the capital structure and securing the optimal weighted average cost of capital (WACC) for the client firm. As a licensed investment advisor, Dimension makes investment recommendations in real sector or capital markets, ensuring that the client’s assets generate the best risk-adjusted returns.

                                    </Accordion>
                                </div>
                                <div className='mb-12'>
                                    <Accordion
                                        id={5} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-2"
                                        title="Research & Analyses"
                                    >
                                        Our analysts create custom, spreadsheet-based financial models to assist capital budgeting or investment decision making. The team has an extensive experience in developing Discounted Cash Flow (DCF), comparable & multiple-based, M&A, three-statement, consolidation, restructuring, budgeting, ad other models. The preparation of models is incorporated with feasibility studies and financial projections to give the most practical and relevant financial advice that is applicable to the observed scenario.
                                        <br /><br />
                                        Dimension’s team of analysts conducts independent research and makes corresponding recommendations to empower our clients to make value maximizing financial decisions. Research services include sell-side/buy-side reports, market overviews, white papers, articles, specialized research. We are specialized in analyzing local and international equity and fixed income products, the coverage of which is distributed to prospective retail or institutional investors.
                                        <br /><br />
                                        When providing research services, our objective is to be the most reliable and insightful financial partner and fuel the growth of client’s business.

                                    </Accordion>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Otherservices />
            </div>
        </>
    )
}
