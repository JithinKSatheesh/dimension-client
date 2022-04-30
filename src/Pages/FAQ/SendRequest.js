import React, { useState } from 'react'
import { UpdateStatus } from 'Components/UpdateStatus'
import { PopUpcontainer } from 'Components/PopUpcontainer'
import { FaqPopUp} from './FaqPopUp'

import useStoreItem from 'Store/hooks/getStoreItems'
import { formatDate } from 'Utils/time'

export default function Sendrequest(props) {

    const [popup, setPopup] = useState(false)
    const { getConfigs } = useStoreItem()

    return (
        <>
            <div className=" faq-wrapper-3 bg-dark-blue-grad">
                <div className="container mx-auto ">
                    <div className="py-36">

                        <div className="flex flex-wrap justify-end  p-5 border-blue-light border-b border-t items-center ">
                            <div className="w-full xl:w-1/2 py-5 xl:py-0">
                                <div className="font-bold text-3xl text-white text-center xl:text-left">
                                    Have another questions?
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2 py-5 xl:py-0">
                                <div 
                                    onClick={() => setPopup(true)} 
                                    className="mx-auto xl:ml-auto xl:mr-0 border border-blue-light rounded-xl py-2 px-5 cursor-pointer text-center xl:w-fit max-w-sm font-bold text-white">
                                    Send request
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateStatus  date={ formatDate(getConfigs?.configs?.faq?.[0]?.updatedAt)} />
            <PopUpcontainer heading="Send request" onClose={() => setPopup(false)} open={popup}  >
        
                <FaqPopUp popup={popup}  />
        
            </PopUpcontainer>


        </>
    )
}


