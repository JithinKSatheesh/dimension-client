import React from 'react';
import { ReactComponent as IconFB } from 'Assets/icons/facebook_small.svg';
import { ReactComponent as IconTwitter } from 'Assets/icons/twitter_small.svg';
import { ReactComponent as IconLinkedin } from 'Assets/icons/linkedin_small.svg';

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop} from 'Components/SlideAnimation'


export const TeamCard = (props) => {

    const { item } = props;

    // console.log(item)
    const _imageURL =  item?.image?.data ? `${process.env.REACT_APP_API_URL}${item?.image?.data?.attributes?.url}` : '/assets/photos/profile.png'

    return (
        <div className="max-w-xs mx-auto cursor-pointer w-full">
            <SlideBottom>
            <div className="h-72  bg-blue-light rounded-t-xl relative overflow-none">
                <img src={_imageURL} alt="" className='mx-auto   w-full absolute bottom-0' />
            </div>
            <div className="p-7 bg-dark-blue-grad rounded-b-xl text-white">
                <div className="text-xl font-bold pb-3">
                    {item?.full_name}
                </div>
                <div className="text-sm pb-10">
                    {item?.position}
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <a href={item?.fb_link} className='mr-3'> <IconLinkedin /> </a>
                        <a href={item?.twitter_link} className='mr-3'> <IconTwitter /> </a>
                        <a href={item?.linkedin_link}> <IconFB /> </a>
                    </div>

                </div>
            </div>

            </SlideBottom>
        </div>
    );
};
