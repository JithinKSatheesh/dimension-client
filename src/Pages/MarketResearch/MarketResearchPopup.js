import React from 'react';
import { PopUpcontainer } from 'Components/PopUpcontainer';


export const MarketResearchPopup = (props) => {

    const { setPopup, popup } = props;

    return (
        <PopUpcontainer heading="Research request" onClose={() => setPopup(false)} open={popup}>
            <div className="text-white w-96">
                <div className="py-3 text-xs"> Full name </div>
                <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
                <div className="py-3 text-xs"> Email address </div>
                <input className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />

                <div
                    onClick={() => { }}
                    className="mx-auto xl:ml-auto xl:mr-0 mt-10 border border-blue-light rounded-xl py-2 px-5 cursor-pointer text-center  font-bold text-white">
                    Send request
                </div>
            </div>
        </PopUpcontainer>
    );
};
