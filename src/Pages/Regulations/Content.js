import React, { useEffect } from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import { PdfDownloadButton } from 'Components/Buttons'
import { UpdateStatus } from 'Components/UpdateStatus'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function Content(props) {

    const { getRegulations } = useStoreItem()
    const { initRegulationsPage } = initStoreItem()

    const data = getRegulations?.regulations ?? []

    const civil_code_of_armenia = data?.attributes?.civil_code_of_armenia ?? ''
    const law_on_securities_market = data?.attributes?.law_on_securities_market ?? ''
    const law_on_the_central_bank_of_armenia = data?.attributes?.law_on_the_central_bank_of_armenia ?? ''
    const law_on_currency_regulation = data?.attributes?.law_on_currency_regulation ?? ''
    const anti_money_laundering_law = data?.attributes?.anti_money_laundering_law ?? ''
    const law_on_financial_system_mediator = data?.attributes?.law_on_financial_system_mediator ?? ''
    const rules_of_amx_armenia = data?.attributes?.rules_of_amx_armenia ?? ''
    const rules_of_central_depository = data?.attributes?.rules_of_central_depository ?? ''


    

    useEffect(() => initRegulationsPage(), [])


    return (
        <>

            <div className="client-rights-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                           <SlideLeft>

                            Laws
                           </SlideLeft>
                        </div>
                        <JustAppear>

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
                            <PdfDownloadButton 
                                onClick={() => window.open(civil_code_of_armenia, '_blank', 'noopener,noreferrer')}
                                title={<>Civil Code of Armenia</>} />
                            <PdfDownloadButton 
                                onClick={() => window.open(law_on_securities_market, '_blank', 'noopener,noreferrer')}
                                title={<>Law on Securities Market</>} />
                            <PdfDownloadButton 
                                onClick={() => window.open(law_on_the_central_bank_of_armenia, '_blank', 'noopener,noreferrer')}
                                title={<>Law on the Central <br /> Bank of Armenia</>} />
                            <PdfDownloadButton 
                                onClick={() => window.open(law_on_currency_regulation, '_blank', 'noopener,noreferrer')}
                                title={<>Law on Currency <br /> Regulation</>} />
                            <PdfDownloadButton 
                                onClick={() => window.open(anti_money_laundering_law, '_blank', 'noopener,noreferrer')}
                                title={<>Anti-Money Laundering <br /> & Terrorism Financing Law</>} />
                            <PdfDownloadButton 
                                onClick={() => window.open(law_on_financial_system_mediator, '_blank', 'noopener,noreferrer')}
                                title={<>Law on Financial <br /> System Mediator</>} />
                        </div>
                        </JustAppear>
                        <div className="pt-36">
                            <div className="grid grid-cols-1 xl:grid-cols-2  text-dark-blue gap-16">
                                <div className="">
                                    <div className="text-2xl xl:text-3xl font-bold h-16 xl:h-32">
                                        <SlideBottom>
                                        Legal acts
                                        </SlideBottom>
                                    </div>
                                    <div className='max-w-2xl text-sm 2xl:text-base'>
                                        <SlideTop>

                                        Central Bank's regulations governing the activities of investment companies have been translated into English and can be downloaded by accessing the relevant section of the Central Bank's official website.
                                        </SlideTop>
                                    </div>

                                </div>
                                <div className="">
                                    <div className="text-2xl xl:text-3xl font-bold h-24 xl:h-32">
                                       <SlideBottom>
                                        Stock exchange & <br /> Central depository rules
                                       </SlideBottom>
                                    </div>
                                    <div className='text-sm 2xl:text-base'>
                                        <SlideTop>
                                        <div className="pb-3">
                                            Rules of AMX Armenia stock exchange can be viewed and
                                            <span 
                                                onClick={() => window.open(rules_of_amx_armenia, '_blank', 'noopener,noreferrer')}
                                                className='font-bold cursor-pointer'> downloaded here.</span>
                                        </div>
                                        <div>

                                            Rules of Central Depository of Armenia can be viewed and
                                            <span 
                                                onClick={() => window.open(rules_of_central_depository, '_blank', 'noopener,noreferrer')}
                                                className='font-bold cursor-pointer'> downloaded here.</span>
                                        </div>
                                        </SlideTop>
                                    </div>

                                </div>
                            </div>
                            <UpdateStatus className="pt-32 "   date="15.02.2022" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
