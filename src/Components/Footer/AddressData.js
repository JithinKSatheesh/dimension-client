import React from 'react';
import { ReactComponent as MailIcon } from 'Assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from 'Assets/icons/phone.svg';
import { ReactComponent as ClockIcon } from 'Assets/icons/clock.svg';
import { ReactComponent as LocationIcon } from 'Assets/icons/location.svg';


export const AddressData = {
    time: "9:00-18:00",
    phone: "+ 374 10 54 56 70",
    email: "info@dimension.am",
    address: "Baghramyan Street 2, 6th floor, 27/1"
};

export const AdressIcons = {
    time: ClockIcon,
    phone: PhoneIcon,
    email: MailIcon,
    address: LocationIcon
};

export const AddressDataArray = (item) => {
    
    return Object.keys(item).map(key => {
        const IconComp = AdressIcons[key]
        return ({icon : <IconComp />, label : item[key]})
    })
}

export const RenderAddressData = ({ item }) => {

    return (<>
        {Object.keys(item).map(key => {
            const IconComp = AdressIcons[key];
            return (<div className='mb-5 flex flex-wrap xl:flex-nowrap justify-center xl:justify-start'>
                <div className="w-full xl:w-fit mr-0 xl:mr-3">
                    <IconComp className='mb-5 xl:mb-0 xl:mx-0 mx-auto' />
                </div>
                {item?.[key]}
            </div>);
        })}
    </>);
};
