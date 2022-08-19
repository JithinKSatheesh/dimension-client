import React from 'react';
import { useTranslation } from 'react-i18next'

import { DetailsButton } from 'Components/Buttons';
import {SlideBottom} from 'Components/SlideAnimation'

import MarkdownView from 'react-showdown';

// **assets
import NewsPlaceholder from 'Assets/img/news_sample_1.png'
import { truncate } from 'Utils/string';


export const NewsCard = (props) => {

    const { item, id } = props;
    const {t} = useTranslation()

    const _imageURL =  item?.image?.data ? `${process.env.REACT_APP_API_URL}${item?.image?.data?.attributes?.url}` : NewsPlaceholder

    return (
        <SlideBottom>

        <div className="mb-20">
            <div className="flex flex-wrap md:flex-nowrap justify-center  bg-blue-light rounded-xl min-h-[300px]">
                <div  className="w-full md:w-[450px]  ">
                    <div className="lg:hidden rounded-2xl overflow-hidden text-center p-8 sm:p-4">
                        <img src={_imageURL} alt="" className='w-full md:w-[450px]  rounded-xl' />
                    </div>
                    <div
                        style={{
                            background: `radial-gradient(527.72% 147.43% at 14.08% -13.43%, rgba(0, 97, 145, 0.5) 34.9%, rgba(0, 97, 146, 0) 98.96%), url(${_imageURL})`,
                            backgroundSize: 'cover, cover',
                            backgroundRepeat : 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                        className="hidden lg:block w-full md:h-full md:w-[450px]    overflow-hidden rounded-t-xl  xl:rounded-l-xl xl:rounded-tr-none  bg-center">
                        
                    </div>
                </div>
                <div className="">
                    <div className='p-7 text-dark-blue'>
                        <div className="text-sm pb-5 font-bold">
                            {item?.date}
                        </div>
                        <div className="text-xl xl:text-xl 2xl:text-xl pb-5 font-bold">
                            {item?.title}
                        </div>
                        <p className='h-40  overflow-hidden  text-ellipsis text-sm 2xl:text-sm 3xl:text-base'>
                                {truncate(item?.description, 150)}
                                {/* <MarkdownView
                                    markdown={item?.description}
                                    options={{ tables: false, emoji: true }}
                                /> */}
                        </p>
                        <div className=" text-left sm:text-right text-xs 2xl:text-xs 3xl:text-base">
                            <DetailsButton to={`/news/${id}`}> {t("Read more")} </DetailsButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </SlideBottom>


    );
};
