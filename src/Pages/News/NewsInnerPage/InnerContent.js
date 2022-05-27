import React from 'react'
import { Link } from 'react-router-dom';
import MarkdownView from 'react-showdown';
import { formatDate } from 'Utils/time'
import { useTranslation } from 'react-i18next';

// **assets
import NewsPlaceholder from 'Assets/img/bg_about.png'
import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'

export default function Innercontent(props) {

    const { item } = props
    const {t} = useTranslation()

    const _imageURL = item?.cover_image_wide?.data ? `${process.env.REACT_APP_API_URL}${item?.cover_image_wide?.data?.attributes?.url}` : ''

    console.log(_imageURL)

    return (
        <>
            <div id="newstop" className="container mx-auto text-dark-blue ">
                <div className="mt-12">
                    <div className="py-12 text-sm font-bold">
                        <Link to="/news" className='flex items-center'> <IconRightArrow className='rotate-180 mr-3' /> {t("Back to news")} </Link>
                    </div>
                    {_imageURL ?
                    <div className="w-full">
                        <div
                            style={{
                                background: `radial-gradient(527.72% 147.43% at 14.08% -13.43%, rgba(0, 97, 145, 0.5) 34.9%, rgba(0, 97, 146, 0) 98.96%)`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                            className="w-full  overflow-hidden rounded-xl  bg-center">
                            <img src={_imageURL} alt="" className=' w-full xl:ml-0' />
                        </div>
                    </div>
                    : null}
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
