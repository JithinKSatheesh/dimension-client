import React from 'react';
import { DetailsButton } from 'Components/Buttons';
import {SlideBottom} from 'Components/SlideAnimation'

import MarkdownView from 'react-showdown';

// **assets
import NewsPlaceholder from 'Assets/img/news_sample_1.png'


export const NewsCard = (props) => {

    const { item, id } = props;

    const _imageURL =  item?.image?.data ? `${process.env.REACT_APP_API_URL}${item?.image?.data?.attributes?.url}` : NewsPlaceholder

    return (
        <SlideBottom>

        <div className="mb-20">
            <div className="flex flex-wrap bg-blue-light rounded-xl">
                <div className="w-full xl:w-1/3">
                    <div
                        style={{
                            background: `radial-gradient(527.72% 147.43% at 14.08% -13.43%, rgba(0, 97, 145, 0.5) 34.9%, rgba(0, 97, 146, 0) 98.96%), url(${_imageURL})`,
                            backgroundSize: 'cover, cover',
                            backgroundRepeat : 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                        className="w-full h-72 xl:h-full  overflow-hidden rounded-t-xl  xl:rounded-l-xl xl:rounded-tr-none  bg-center">
                        {/* <img src={item?.img} alt="" className='h-full mx-auto xl:ml-0' /> */}
                    </div>
                </div>
                <div className="w-full xl:w-2/3">
                    <div className='p-7 text-dark-blue'>
                        <div className="text-sm pb-5 font-bold">
                            {item?.date}
                        </div>
                        <div className="text-2xl xl:text-3xl pb-5 font-bold">
                            {item?.title}
                        </div>
                        <p className='h-32 overflow-hidden  text-ellipsis text-sm 2xl:text-base'>
                            
                                <MarkdownView
                                    markdown={item?.description}
                                    options={{ tables: false, emoji: true }}
                                />
                        </p>
                        <div className=" text-left xl:text-right text-sm 2xl:text-base">
                            <DetailsButton to={`/news/${id}`}> Read more </DetailsButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </SlideBottom>


    );
};
