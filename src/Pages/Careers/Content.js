import React, {useState} from 'react'

import { Accordion } from 'Components/Accordion';


export default function Content(props) {
    
    const [expanded, setExpanded] = useState(false)

    const questions = [
        {
            id :1,
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :2,
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :3,
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :4,
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :5,
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :6,
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },

    ]

    const leftArray = questions.splice(0, Math.floor(questions.length / 2));

    return (
        <>
            <div className=" faq-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-32">
                        <div className="flex justify-between items-center pb-16">
                            <div className="text-2xl xl:text-3xl font-bold flex items-center my-2 text-dark-blue">
                            Careers
                            </div>

                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8">
                            {/* -------------------------- */}
                            {/* --------- Col left ---------- */}
                            <div>                            
                            {
                                questions.map(item => 
                                    <div className='pb-8'>
                                    <Accordion
                                        id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                        className={`${ expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                        title={item?._q}
                                    >
                                        {item?._a}
                                    </Accordion>
                                </div>
                                )
                            }
                            </div>
                               
                            {/* -------------------------- */}
                            {/* --------- Col right ---------- */}
                            <div>                            
                            {
                                leftArray.map(item => 
                                    <div className='pb-8'>
                                    <Accordion
                                        id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                        className={`${ expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                        title={item?._q}
                                    >
                                        {item?._a}
                                    </Accordion>
                                </div>
                                )
                            }
                            </div>
                               
                                
                            

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
