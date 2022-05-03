import React, { useEffect, useState } from 'react'
import { PopUpcontainer } from 'Components/PopUpcontainer'
// import { NewsCard } from './NewsCard'
import { SlideTop } from 'Components/SlideAnimation'

import { ThreeDots } from 'react-loader-spinner'

import { UpdateStatus } from 'Components/UpdateStatus'
import { ProtfolioCard } from 'Pages/Home/Protfolio'

import { PdfDownloadButton } from 'Components/Buttons'
import { Markdown } from 'react-showdown'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { formatDate } from 'Utils/time'

export default function Content(props) {

    // const [popup, setPopup] = useState(false)

    const { getConfigs } = useStoreItem()
    // const { initProtfolio } = initStoreItem()

    const data = getConfigs?.configs?.tariffs ?? []

    const _date = data?.[0]?.updatedAt



    return (
        <>
            <div className="w-full  news-wrapper-1">
                <section>
                    {/* {console.log(getFilteredMappedData())} */}
                    <div className="py-28  px-4 text-dark-blue">
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="text-2xl xl:text-2xl 2xl:text-3xl font-bold flex items-center my-2">
                                    <SlideTop>
                                        Tarrifs
                                    </SlideTop>
                                </div>
                            </div>
                            <div className="py-16">
                                {data?.length <= 0 ?
                                    <div className='flex justify-center '> <ThreeDots color='#206291' />  </div>
                                    :
                                    <>
                                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
                                            {data.map(item => {
                                                const pdfUrl = item?.pdf?.url
                                                const _url = pdfUrl ? `${process.env.REACT_APP_API_URL}${pdfUrl}` : ''
                                                return (<PdfDownloadButton
                                                    key={item?.id}
                                                    onClick={() => window.open(_url, '_blank', 'noopener,noreferrer')}
                                                    title={<Markdown markdown={item?.label} />}
                                                    className="xl:text-xs 2xl:text-sm h-16"
                                                />)
                                            }
                                            )}
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <UpdateStatus date={formatDate(_date)} />
        </>
    )
}

