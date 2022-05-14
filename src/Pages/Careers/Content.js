import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PopUpcontainer } from 'Components/PopUpcontainer'

// import { ReactComponent as IconDownload } from 'Assets/icons/download_2.svg';

import { SlideLeft, SlideRight, JustAppear, SlideTop } from 'Components/SlideAnimation'

import { ThreeDots } from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { ApplyForJob } from './ApplyForJob';
import { CareerCard } from './CareerCard';

export const IconDownload = () => <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z" /></svg>

export default function Content(props) {

    const {t} = useTranslation()
    const [expanded, setExpanded] = useState(false)
    const [popup, setPopup] = useState(false)
    // const { getCareers } = useStoreItem()
    // const { initCareers } = initStoreItem()
    
    // const data = getCareers?.careers ?? []
    const { getConfigs } = useStoreItem()
    const data = getConfigs?.configs?.careers ?? []
    const careerPage = getConfigs?.configs?.careersPage ?? {}


    // console.log(getCareers)

    const leftArray = [...data]
    const rightArray = leftArray.splice(0, Math.floor(leftArray.length / 2));


    // useEffect(() => { initCareers() }, [])


    return (
        <>
            <div className=" faq-wrapper-2">
                <div className="container mx-auto ">
                    <div className="py-24">
                        <div className="flex justify-between items-center ">
                            <div className="text-2xl xl:text-3xl font-bold flex items-center my-2 text-dark-blue pb-5">
                                <SlideTop>
                                    {careerPage?.heading}
                                </SlideTop>
                            </div>

                        </div>
                        <div className="pb-16 text-dark-blue text-sm xl:text-xs 2xl:text-sm xl:leading-6 2xl:leading-7">
                            <JustAppear>
                                {careerPage?.description}
                            </JustAppear>
                        </div>
                        {data?.length <= 0 ?
                            <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                            :
                            <>

                                <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8">
                                    {/* -------------------------- */}
                                    {/* --------- Col left ---------- */}
                                    <div>
                                        {
                                            [...leftArray].map(item =>
                                                <CareerCard 
                                                    key={item?.id}
                                                    item={item}
                                                    expanded={expanded}
                                                    setExpanded={setExpanded}
                                                    setPopup={setPopup}
                                                    />
                                            )
                                        }
                                    </div>

                                    {/* -------------------------- */}
                                    {/* --------- Col right ---------- */}
                                    <div>
                                        {
                                            [...rightArray].map(item =>
                                                <CareerCard 
                                                key={item?.id}
                                                item={item}
                                                expanded={expanded}
                                                setExpanded={setExpanded}
                                                setPopup={setPopup}
                                                />
                                            )
                                        }
                                    </div>

                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            {/* _________________________________________ */}
            {/* _________________________________________ */}
            <PopUpcontainer heading={t("Apply for a job")} onClose={() => setPopup(false)} open={popup}  >
                <ApplyForJob popup={popup} />
            </PopUpcontainer>
        </>
    )
}


