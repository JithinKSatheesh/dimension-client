import React from 'react'

import { PdfDownloadButton } from 'Components/Buttons'
import { UpdateStatus } from 'Components/UpdateStatus'

export default function Content(props) {


    return (
        <>

            <div className="client-rights-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                            Laws
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
                            <PdfDownloadButton title={<>Civil Code of Armenia</>} />
                            <PdfDownloadButton title={<>Law on Securities Market</>} />
                            <PdfDownloadButton title={<>Law on the Central <br /> Bank of Armenia</>} />
                            <PdfDownloadButton title={<>Law on Currency <br /> Regulation</>} />
                            <PdfDownloadButton title={<>Anti-Money Laundering <br /> & Terrorism Financing Law</>} />
                            <PdfDownloadButton title={<>Law on Financial <br /> System Mediator</>} />
                        </div>
                        <div className="pt-36">
                            <div className="grid grid-cols-1 xl:grid-cols-2  text-dark-blue gap-16">
                                <div className="">
                                    <div className="text-2xl xl:text-3xl font-bold h-16 xl:h-32">
                                        Legal acts
                                    </div>
                                    <div className='max-w-2xl'>
                                        Central Bank's regulations governing the activities of investment companies have been translated into English and can be downloaded by accessing the relevant section of the Central Bank's official website.
                                    </div>

                                </div>
                                <div className="">
                                    <div className="text-2xl xl:text-3xl font-bold h-24 xl:h-32">
                                        Stock exchange & <br /> Central depository rules
                                    </div>
                                    <div>
                                        <div className="pb-3">
                                            Rules of AMX Armenia stock exchange can be viewed and
                                            <span className='font-bold cursor-pointer'> downloaded here.</span>
                                        </div>
                                        <div>

                                            Rules of Central Depository of Armenia can be viewed and
                                            <span className='font-bold cursor-pointer'> downloaded here.</span>
                                        </div>
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
