import React from 'react';
import { ReactComponent as IconFB } from 'Assets/icons/facebook_small.svg';
import { ReactComponent as IconTwitter } from 'Assets/icons/twitter_small.svg';
import { ReactComponent as IconLinkedin } from 'Assets/icons/linkedin_small.svg';

export const TeamCard = (props) => {

    const { item } = props;

    return (
        <div className="max-w-xs mx-auto cursor-pointer w-full">
            <div className="h-72  bg-blue-light rounded-t-xl relative overflow-none">
                <img src={item?.img} alt="" className='mx-auto   w-full absolute bottom-0' />
            </div>
            <div className="p-7 bg-dark-blue-grad rounded-b-xl text-white">
                <div className="text-xl font-bold pb-3">
                    {item?.name}
                </div>
                <div className="text-sm pb-10">
                    {item?.position}
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <a href="/" className='mr-3'> <IconLinkedin /> </a>
                        <a href="/" className='mr-3'> <IconTwitter /> </a>
                        <a href="/"> <IconFB /> </a>
                    </div>

                </div>
            </div>


        </div>
    );
};
