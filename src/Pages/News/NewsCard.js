import React from 'react';
import { DetailsButton } from 'Components/Buttons';


export const NewsCard = (props) => {

    const { item } = props;

    return (
        <div className="mb-20">
            <div className="flex flex-wrap bg-blue-light rounded-xl">
                <div className="w-full xl:w-1/3">
                    <div
                        style={{
                            background: `radial-gradient(527.72% 147.43% at 14.08% -13.43%, rgba(0, 97, 145, 0.5) 34.9%, rgba(0, 97, 146, 0) 98.96%), url(${item?.img})`,
                            backgroundSize: 'cover',
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
                            {item?.date}
                        </div>
                        <p className='h-32 overflow-hidden  text-ellipsis'>
                            {item?.content}
                        </p>
                        <div className="pt-7 text-left xl:text-right">
                            <DetailsButton to={`/news/${item?.id}`}> Read more </DetailsButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
