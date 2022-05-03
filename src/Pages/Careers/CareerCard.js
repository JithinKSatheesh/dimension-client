import React from 'react';
import { Accordion } from 'Components/Accordion';
import { DetailsButton } from 'Components/Buttons';
import { SlideBottom } from 'Components/SlideAnimation';
import { formatDate } from 'Utils/time';

export const CareerCard = (props) => {

    const { item, expanded, setExpanded, setPopup } = props;

    return (
        <div
            key={item?.id}
            className='pb-8'>
            <SlideBottom>
                <Accordion
                    id={item?.id} expanded={expanded} setExpanded={setExpanded}
                    className={`${expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                    headerElement={<>
                        <div className={`flex flex-wrap text-sm 2xl:text-base ${expanded === item?.id ? 'text-white' : 'text-dark-blue'}  `}>
                            <div className="w-full xl:w-6/12 mb-5 xl:mb-0">
                                <div className="text-xs xl:text-[10px] 2xl:text-xs"> Position </div>
                                <div className="text- xl:text-xs 2xl:text-sm 3xl:text-base font-bold"> {item?.position} </div>
                            </div>
                            <div className="w-full xl:w-6/12 flex xl:justify-between justify-left">
                                <div>
                                    <div className="text-xs xl:text-[10px] 2xl:text-xs"> Job type </div>
                                    <div className="text- xl:text-xs 2xl:text-sm 3xl:text-base font-bold"> {item?.job_type} </div>
                                </div>
                                <div className='px-5'>
                                    <div className="text-xs xl:text-[10px] 2xl:text-xs"> Due date </div>
                                    <div className="text- xl:text-xs 2xl:text-sm 3xl:text-base font-bold"> {formatDate(item?.due_date, false)} </div>
                                </div>
                            </div>
                        </div>
                    </>}
                >
                    <div className="font-xs pb-3">
                        Requirments
                    </div>
                    {item?.description}
                    <div className="pt-10">
                        <DetailsButton
                            onClick={() => setPopup({ item })}
                        >Apply for a job</DetailsButton>
                    </div>
                </Accordion>
            </SlideBottom>
        </div>
    );
};
