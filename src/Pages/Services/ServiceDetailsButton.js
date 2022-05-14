import React from 'react';



export const ServiceDetailsButton = (props) => {

    return (
        <div className="rounded-xl bg-blue-light flex flex-wrap justify-between items-center p-7 cursor-pointer hover-border-outline border-2 xl:max-h-32">
            <div className='flex items-center  flex-wrap xl:text-xs 2xl:text-sm'>
                <div className='w-full xl:w-fit mb-8 xl:mb-0' >
                    {props?.icon}
                </div>
                <div className="font-bold w-[170px]  ">
                    {props?.title}
                </div>
            </div>
            <div className='mt-8 xl:mt-0'>
                <div
                    onClick={props?.onClick}
                    className="bg-dark-blue-grad px-12 py-3 text-white xl:text-xs 2xl:text-sm font-bold rounded-xl cursor-pointer">
                    Details
                </div>
            </div>
        </div>
    );

};
