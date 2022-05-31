import React from 'react';
import { useTranslation } from 'react-i18next';


export const ServiceDetailsButton = (props) => {

    const {t} = useTranslation()

    return (
        <div className="rounded-xl bg-blue-light flex flex-wrap justify-between items-center p-7 cursor-pointer hover-border-outline border-2 xl:max-h-32">
            <div className='flex items-center  flex-wrap xl:text-xs 2xl:text-sm'>
                <div className='w-full xl:w-fit mb-8 xl:mb-0' >
                    {props?.icon}
                </div>
                <div className="font-bold xl:w-[120px] 2xl:w-[170px] text-dark-blue ">
                    {props?.title}
                </div>
            </div>
            <div className='mt-8 xl:mt-0'>
                <div
                    onClick={props?.onClick}
                    className="bg-dark-blue-grad px-12  xl:px-8 2xl:px-12 py-3 text-white text-sm xl:text-xs 2xl:text-sm font-bold rounded-xl cursor-pointer">
                    {t("Details")}
                </div>
            </div>
        </div>
    );

};
