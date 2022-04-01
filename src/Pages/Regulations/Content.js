import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import { PdfDownloadButton } from 'Components/Buttons'
import { UpdateStatus } from 'Components/UpdateStatus'

export default function Content(props) {


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
                            <PdfDownloadButton title={<>Civil Code of Armenia</>} />
                            <PdfDownloadButton title={<>Law on Securities Market</>} />
                            <PdfDownloadButton title={<>Law on the Central <br /> Bank of Armenia</>} />
                            <PdfDownloadButton title={<>Law on Currency <br /> Regulation</>} />
                            <PdfDownloadButton title={<>Anti-Money Laundering <br /> & Terrorism Financing Law</>} />
                            <PdfDownloadButton title={<>Law on Financial <br /> System Mediator</>} />
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
                                            <span className='font-bold cursor-pointer'> downloaded here.</span>
                                        </div>
                                        <div>

                                            Rules of Central Depository of Armenia can be viewed and
                                            <span className='font-bold cursor-pointer'> downloaded here.</span>
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
