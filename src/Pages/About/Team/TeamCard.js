import React, { useState } from 'react';
import { ReactComponent as IconFB } from 'Assets/icons/facebook_small.svg';
import { ReactComponent as IconTwitter } from 'Assets/icons/twitter_small.svg';
import { ReactComponent as IconLinkedin } from 'Assets/icons/linkedin_small.svg';
import {useTranslation} from 'react-i18next'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import { PopUpcontainer2 } from 'Components/PopUpcontainer'
import { Markdown } from 'react-showdown';


export const TeamCard = (props) => {

    const { item } = props;
    const {t} = useTranslation();

    const [popup, setPopup] = useState(false)

    // console.log(item)
    const _imageURL = item?.image?.url ? `${process.env.REACT_APP_API_URL}${item?.image?.url}` : '/assets/photos/profile.png'

    const ImageCard = ({ img_url, className }) => (
        <div className={`h-72 2xl:h-[360px]  bg-blue-light rounded-t-xl relative overflow-hidden ${className}`}>
            <img src={img_url} alt="" className='mx-auto   w-full absolute bottom-0' />
        </div>)

    const SocialLinks = () => (
        <div className="flex">
            <a href={item?.linkedin_link} target="_blank" className='mr-3'> <IconLinkedin /> </a>
            {/* <a href={item?.twitter_link} target="_blank" className='mr-3'> <IconTwitter /> </a>
        <a href={item?.fb_link} target="_blank" > <IconFB /> </a> */}
        </div>

    )

    return (<>
        <SlideBottom>
            <div className="flex flex-col justify-between max-w-xs  mx-auto cursor-pointer bg-dark-blue-grad  rounded-xl rounded-t-2xl w-full h-full " onClick={() => setPopup(true)}>
                <ImageCard img_url={_imageURL} />
                {/* <div className="h-72  bg-blue-light rounded-t-xl relative overflow-none">
                <img src={_imageURL} alt="" className='mx-auto   w-full absolute bottom-0' />
            </div> */}
                <div className="p-7 flex flex-col justify-between xl:h-full bg-dark-blue-grad rounded-b-xl text-white bg-red-500 xl:max-h-64">
                    <div className="text-xl xl:text-lg 2xl:text-xl font-bold pb-3">
                        {item?.full_name}
                    </div>
                    <div className="text-sm xl:text-xs 2xl:text-sm pb-10">
                        {item?.position}
                    </div>
                    <div className="flex justify-between">
                        <SocialLinks />
                    </div>
                </div>

            </div>
        </SlideBottom>
        {/* ================================= */}
        {/* Pop up */}
        {/* ================================= */}
        <PopUpcontainer2 heading="Send request" onClose={() => setPopup(false)} open={popup}  >
            <div className="flex flex-wrap">
                <div className="w-full lg:w-80 px-3 text-white">
                    <div>
                        <div className="text-xl font-bold pb-2">
                            {item?.full_name}
                        </div>
                        <div className="text-sm  pb-4">
                            {item?.position}
                        </div>
                    </div>
                    <div className="w-72 overflow-none">
                        <img src={_imageURL} alt="" className='w-full bg-blue-light rounded-xl relative overflow-none ' />
                    </div>
                    {/* {console.log(item)} */}
                    {
                        item?.type_of_qualification  &&
                        <>
                            <div className="py-4">
                                <div className="w-72 rounded-xl bg-blue-light text-dark-blue p-3">
                                    <div className=" text-sm font-bold pb-2">
                                        {t("Type of Qualification")}
                                    </div>
                                    <div className="text-xs pb-2">
                                        <Markdown markdown={item?.type_of_qualification} />

                                    </div>
                                    <div className=" text-sm font-bold ">
                                        {t("Qualification details")}
                                    </div>
                                    <div className="text-xs pb-2">
                                        <Markdown markdown={item?.qualification_details} />
                                    </div>
                                </div>
                            </div>

                        </>
                    }

                    <div className="py-4">
                        <SocialLinks />
                    </div>
                </div>
                <div className="w-full lg:w-80 text-white text-xs leading-5 pl-3">
                    <div>
                        <Markdown markdown={item?.description} />

                    </div>
                </div>
            </div>
        </PopUpcontainer2>
    </>
    );
};
