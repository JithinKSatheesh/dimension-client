import React, {useEffect, useState} from 'react'

import { Accordion } from 'Components/Accordion';
import { DetailsButton} from 'Components/Buttons'
import { PopUpcontainer } from 'Components/PopUpcontainer'

// import { ReactComponent as IconDownload } from 'Assets/icons/download_2.svg';

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { formatDate } from 'Utils/time';

const IconDownload = () => <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z"/></svg>

export default function Content(props) {
    
    const [expanded, setExpanded] = useState(false)
    const [popup, setPopup] = useState(false)

    const {  getCareers } = useStoreItem()
    const { initCareers } = initStoreItem()

    const data = getCareers?.careers ?? []


    console.log(getCareers)

    const jobs = [
        {
            id :1,
            position : 'Angular Developer',
            type : 'Full time',
            due : '30.2.2022',
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :2,
            position : 'Angular Developer',
            type : 'Full time',
            due : '30.2.2022',
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :4,
            position : 'Angular Developer',
            type : 'Full time',
            due : '30.2.2022',
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :5,
            position : 'Angular Developer',
            type : 'Full time',
            due : '30.2.2022',
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id :6,
            position : 'Angular Developer',
            type : 'Full time',
            due : '30.2.2022',
            _q : 'Do you provide customer support?',
            _a : " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },

    ]

    const leftArray = [...data]
    const rightArray = leftArray.splice(0, Math.floor(leftArray.length / 2));


    useEffect(() => { initCareers() }, [])
    

    return (
        <>
            <div className=" faq-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-32">
                        <div className="flex justify-between items-center pb-16">
                            <div className="text-2xl xl:text-3xl font-bold flex items-center my-2 text-dark-blue">
                                <SlideLeft>
                                    Careers
                                </SlideLeft>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8">
                            {/* -------------------------- */}
                            {/* --------- Col left ---------- */}
                            <div>                            
                            {
                                [...leftArray].map(item => 
                                    <div className='pb-8'>
                                        <SlideBottom>
                                     <Accordion
                                        id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                        className={`${ expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                        headerElement={<>
                                            <div className={`flex flex-wrap text-sm 2xl:text-base ${expanded === item?.id ? 'text-white' : 'text-dark-blue'}  `}>
                                                <div className="w-full xl:w-6/12 mb-5 xl:mb-0">
                                                    <div className="text-xs"> Position </div>
                                                    <div className="text- font-bold"> {item?.attributes?.position} </div>
                                                </div>
                                                <div className="w-full xl:w-6/12 flex xl:justify-between justify-left">
                                                    <div>
                                                        <div className="text-xs"> Job type </div>
                                                        <div className="text- font-bold"> {item?.attributes?.job_type} </div>
                                                    </div>
                                                    <div className='px-5'>
                                                        <div className="text-xs"> Due date </div>
                                                        <div className="text- font-bold"> {formatDate(item?.attributes?.due_date)} </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}
                                    >
                                        <div className="font-xs pb-3">
                                        Requirments
                                        </div>
                                        {item?.attributes?.description}
                                        <div className="pt-10">
                                            <DetailsButton
                                            onClick={() => setPopup(true)}
                                            >Apply for a job</DetailsButton>
                                        </div>
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
                                [...rightArray].map(item => 
                                    <div className='pb-8'>
                                        <SlideBottom>
                                    <Accordion
                                        id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                        className={`${ expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                        headerElement={<>
                                            <div className={`flex flex-wrap text-sm 2xl:text-base ${expanded === item?.id ? 'text-white' : 'text-dark-blue'}  `}>
                                                <div className="w-full xl:w-6/12 mb-5 xl:mb-0">
                                                    <div className="text-xs"> Position </div>
                                                    <div className="text- font-bold"> {item?.attributes?.position} </div>
                                                </div>
                                                <div className="w-full xl:w-6/12 flex xl:justify-between justify-left">
                                                    <div>
                                                        <div className="text-xs"> Job type </div>
                                                        <div className="text- font-bold"> {item?.attributes?.job_type} </div>
                                                    </div>
                                                    <div className='px-5'>
                                                        <div className="text-xs"> Due date </div>
                                                        <div className="text- font-bold"> {formatDate(item?.attributes?.due_date)} </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}
                                    >
                                        <div className="font-xs pb-3">
                                        Requirments
                                        </div>
                                        {item?.attributes?.description}
                                        <div className="pt-10">
                                            <DetailsButton
                                                onClick={() => setPopup(true)}
                                                >Apply for a job</DetailsButton>
                                        </div>
                                    </Accordion>
                                    </SlideBottom>
                                </div>
                                )
                            }
                            </div>
                               
                        </div>

                    </div>
                </div>
            </div>
            {/* _________________________________________ */}
            {/* _________________________________________ */}
            <PopUpcontainer heading="Apply for a job" onClose={() => setPopup(false)} open={popup}  >
                <div className="text-white w-96">
                    <div className="py-3 text-xs"> Full name </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 text-xs"> Email address </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 text-xs"> Phone number </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 text-xs"> Upload CV </div>
                    <div className='w-full h-24 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  flex items-center justify-center' >
                            <div className='text-center '><IconDownload/></div>
                    </div>
                    
                    <div
                        onClick={() => {}}
                        className="mx-auto xl:ml-auto xl:mr-0 mt-10 border border-blue-light rounded-xl py-2 px-5 cursor-pointer text-center  font-bold text-white">
                        Apply
                    </div>
                </div>
            </PopUpcontainer>
        </>
    )
}
