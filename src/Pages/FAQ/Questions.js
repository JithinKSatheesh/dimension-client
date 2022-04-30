import React, { useEffect, useState } from 'react'

import { Accordion } from 'Components/Accordion';

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import { ThreeDots } from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'


export default function Questions(props) {

    const [expanded, setExpanded] = useState(false)

    const { getConfigs } = useStoreItem()
    // const { initFaq } = initStoreItem()

    const _questions = getConfigs?.configs?.faq ?? []
    const leftHalf = [..._questions]
    const rightHalf = leftHalf.splice(0, Math.floor(_questions.length / 2));


    return (
        <>
            <div className=" faq-wrapper-2">
                <div className="container mx-auto ">
                    {_questions?.length <= 0 ?
                        <div className='flex justify-center py-32'> <ThreeDots color='#206291' />  </div>
                        :
                        <>
                            <div className="py-32">
                                <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8">
                                    {/* -------------------------- */}
                                    {/* --------- Col left ---------- */}
                                    <div>

                                        {
                                            leftHalf.map(item =>
                                                <div className='pb-8'>
                                                    <SlideBottom>
                                                        <Accordion
                                                            id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                                            className={`${expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                                            title={item?.question}
                                                        >
                                                            {item?.answer}
                                                        </Accordion>
                                                    </SlideBottom>
                                                </div>
                                            )
                                        }

                                    </div>

                                    {/* -------------------------- */}
                                    {/* --------- Col right ---------- */}
                                    <div>

                                        {
                                            rightHalf.map(item =>
                                                <div className='pb-8'>
                                                    <SlideBottom>

                                                        <Accordion
                                                            id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                                            className={`${expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                                            title={item?.question}
                                                        >
                                                            {item?.answer}
                                                        </Accordion>
                                                    </SlideBottom>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
