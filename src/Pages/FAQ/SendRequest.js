import React, { useState } from 'react'
import { UpdateStatus } from 'Components/UpdateStatus'
import { PopUpcontainer } from 'Components/PopUpcontainer'

export default function Sendrequest(props) {

    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className=" faq-wrapper-3 bg-dark-blue-grad">
                <div className="container mx-auto px-4">
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
                        <UpdateStatus className="pt-24 text-white" type="dark" date="30.3.2022" />
                    </div>
                </div>
            </div>
            <PopUpcontainer heading="Send request" onClose={() => setPopup(false)} open={popup}  >
                <div className="text-white w-96">
                    <div className="py-3 font-xs"> First name </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 font-xs"> Email address </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 font-xs"> Subject </div>
                    <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div className="py-3 font-xs"> What are you interested in? </div>
                    <textarea className='w-full h-32 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                    <div
                        onClick={() => {}}
                        className="mx-auto xl:ml-auto xl:mr-0 mt-5 border border-blue-light rounded-xl py-2 px-5 cursor-pointer text-center  font-bold text-white">
                        Send request
                    </div>
                </div>
            </PopUpcontainer>


        </>
    )
}


