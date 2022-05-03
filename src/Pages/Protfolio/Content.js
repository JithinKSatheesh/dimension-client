import React, { useEffect, useState } from 'react'
import { PopUpcontainer } from 'Components/PopUpcontainer'
// import { NewsCard } from './NewsCard'
import { SlideTop } from 'Components/SlideAnimation'

import { ThreeDots } from 'react-loader-spinner'

import { UpdateStatus } from 'Components/UpdateStatus'
import { ProtfolioCard } from 'Pages/Home/Protfolio'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { formatDate } from 'Utils/time'

export default function Content(props) {

    // const [popup, setPopup] = useState(false)

    const { getConfigs } = useStoreItem()
    // const { initProtfolio } = initStoreItem()

    const data = getConfigs?.configs?.protfolios ?? []
    
    const _date = data?.[0]?.updatedAt

    const _filters = ["All","Equity Placement", "Bond Placement", "Market Making", "IPO & Listing Advisory", "M&A Advisory"]

    const [currentFilter, setCurrentFilter] = useState('All')

    // useEffect(() => initProtfolio(), [])

    const filteredDataAsObject = (data = []) => {
        let _a = {}
        data.forEach(item => {
            if (_a[item?.type_of_project]) {
                _a[item?.type_of_project].push(item)
            } else {
                _a[item?.type_of_project] = [item]
            }

        })
        return _a
    }

    const mappeddData = filteredDataAsObject(data)

    const getFilteredMappedData = () => {
        if (currentFilter === 'All') {
            return mappeddData
        } else if (mappeddData[currentFilter]) {
            return { [currentFilter]: mappeddData[currentFilter] }
        } else {
            return {}
        }
    }


    const finalFilteredDataObject = getFilteredMappedData()

    const FilterTabs = (props) => {

        const _activeFilter = Object.keys(mappeddData)

        return (<div className='flex flex-wrap '>
            {["All", ..._activeFilter].map(item => 
                <div 
                    key={item} 
                    onClick={() => setCurrentFilter(item)}
                    className={`${currentFilter === item ? 'border-color-blue' : 'border-white'} border bg-blue-light text-dark-blue p-2 rounded-lg text-xs ml-3 mt-3 cursor-pointer`}> 
                    {item}
                </div>)
            }
        </div>)
    }

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
                                        Portfolio
                                    </SlideTop>
                                </div>
                                <div>
                                    <FilterTabs />
                                </div>
                            </div>
                            <div className="">
                                {data?.length <= 0 ?
                                    <div className='flex justify-center '> <ThreeDots color='#206291' />  </div>
                                    :
                                    <>
                                        {
                                            Object.keys(finalFilteredDataObject).map(key => {

                                                const ProtfolioList = finalFilteredDataObject[key]

                                                return (<div key={key}>
                                                    <div className="text-dark-blue text-xl xl:text-lg 2xl:text-xl font-bold pb-6 pt-16">
                                                            {key}
                                                    </div>
                                                    <div className="h-1 w-full bg-dark-blue mb-16"></div>
                                                    <div className="grid grid-cols-1 xl:grid-cols-4  gap-16 xl:gap-4 2xl:gap-16">
                                                        {[...ProtfolioList].map((item, index) =>
                                                            <ProtfolioCard key={item?.id} item={item} />)
                                                        }
                                                    </div>
                                                </div>)

                                            })
                                        }
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

