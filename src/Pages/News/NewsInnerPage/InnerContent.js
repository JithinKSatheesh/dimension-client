import React from 'react'
import { Link } from 'react-router-dom';
import MarkdownView from 'react-showdown';
import { formatDate } from 'Utils/time'

// **assets
import NewsPlaceholder from 'Assets/img/news_sample_1.png'
import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'

export default function Innercontent(props) {

    const { item } = props

    const _imageURL = item?.image?.data ? `${process.env.REACT_APP_API_URL}${item?.image?.data?.attributes?.url}` : NewsPlaceholder

    console.log(_imageURL)

    return (
        <>
            <div id="newstop" className="container mx-auto text-dark-blue px-4">
                <div className="mt-12">
                    <div className="py-12 text-sm font-bold">
                        <Link to="/news" className='flex items-center'> <IconRightArrow className='rotate-180 mr-3' /> Back to News</Link>
                    </div>
                    <div className="w-full">
                        <div
                            style={{
                                background: `radial-gradient(527.72% 147.43% at 14.08% -13.43%, rgba(0, 97, 145, 0.5) 34.9%, rgba(0, 97, 146, 0) 98.96%), url(${_imageURL})`,
                                backgroundSize: 'cover, cover',
                                backgroundRepeat: 'no-repeat, no-repeat',
                                backgroundPosition: 'center, center'
                            }}
                            className="w-full h-72   overflow-hidden rounded-xl  bg-center">
                            {/* <img src={item?.img} alt="" className='h-full mx-auto xl:ml-0' /> */}
                        </div>
                    </div>
                    <div>
                        <div className="py-8">
                            <div className="flex justify-between text-sm">
                                <div className=''>
                                    {formatDate(item?.updatedAt)}
                                </div>
                            </div>
                        </div>
                        <div className='pb-8 text-xl font-bold'>
                            {item?.title}
                        </div>
                        <div className="pb-8 text-sm">
                            <MarkdownView
                                markdown={item?.content}
                                options={{ tables: false, emoji: true }}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
