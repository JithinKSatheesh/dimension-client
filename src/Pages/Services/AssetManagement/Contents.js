import React, { useState } from 'react'


// ** assets
import { Accordion } from 'Components/Accordion';
import Otherservices from './OtherServices';
import MarkdownView from 'react-showdown';

export default function Contents(props) {

    const {getServices, servicePageData} = props
    const [expanded, setExpanded] = useState(false)

    {console.log(servicePageData)}


    return (
        <>
            <div className="service-wrapper-2 ">
                <div className="container mx-auto  ">
                    <div className="py-36">
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16">
                            {/* -------------------------- */}
                            {/* --------- Col 1---------- */}
                            <div>

                                <div className='mb-12'>
                                    <Accordion
                                        id={1} expanded={expanded} setExpanded={setExpanded}
                                        className="accrodion-wrapper-1"
                                        title={<MarkdownView markdown={servicePageData?.service_heading_1} />}
                                    >
                                        <MarkdownView markdown={servicePageData?.service_description_1} />
                                       

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
                                        title={<MarkdownView markdown={servicePageData?.service_heading_2} />}
                                        
                                    >
                                        <MarkdownView markdown={servicePageData?.service_description_2} />
                                     
                                    </Accordion>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Otherservices servicePageData={servicePageData} />
            </div>
        </>
    )
}
