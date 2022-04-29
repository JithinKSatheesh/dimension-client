import React, { useEffect, useState } from 'react'

import { SlideTop } from 'Components/SlideAnimation'
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import { NewsCard } from './NewsCard'

import { UpdateStatus } from 'Components/UpdateStatus'

import { ThreeDots } from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

import { formatDate } from 'Utils/time'

import { GetFunctions } from "API/fetch"

export default function Content(props) {

    // const { getArticles } = useStoreItem()

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [filter, setFilter] = useState("Recent")
    const [loading, setLoading] = useState(false)

    const { ScrollToTop } = useScrollBehaviours()
    

    const _date =data?.[0]?.attributes?.updatedAt

    // const { initArticles } = initStoreItem()
    // const data = getArticles?.articles ?? []
    // useEffect(() => initArticles(), [])

    const fetchNewsData = async () => {
        try {
            setLoading(true)
            const res = await GetFunctions.fetchArticles({ 
                sort :  filter === 'Recent' ?  ["publishedAt"] :  ["publishedAt:desc"] ,
                populate : ["image"], pagination : 
                { pageSize : 4, pageCount, page } })
            const _data = res?.data?.data
            setData(_data)
            const  _pageCount  = res?.data?.meta?.pagination?.pageCount
            // setPage(_page)
            setPageCount(_pageCount)
            
        } catch (ex) {
            console.log(ex)
        }
        setLoading(false)
    }

    const Pagnation = (props) => {

        const {pageCount, callback} = props

        console.log(pageCount)

        return (<>
            <div className='flex  justify-center'>
                { Array(pageCount).fill(0).map((item, index) => 
                    <div 
                        onClick={() =>callback(index + 1)}
                        className={` p-3 cursor-pointer $ ${page === index + 1 && 'text-dark-blur font-bold'}`}>
                        {index + 1}
                    </div> )}
            </div>
        </>)
    }

    const RenderFilter = () => {
        const _filters = ["Recent", "Popular"]

        return (
            <>
            {_filters.map(item =>  
                <div 
                    key={item}
                    onClick={() => {
                        setPage(1)
                        setFilter(item)
                    }}
                    className={`${filter === item ? ' bg-blue-light' : ''} border  border-color-blue-light text-xs py-2 px-5 mr-3 rounded-xl cursor-pointer`}>
                    {item}
                </div>)}
            </>
        )
    }


    useEffect(() =>{ 
        fetchNewsData()
        ScrollToTop()

    }, [page, filter])

    return (
        <>
            <div className="w-full  news-wrapper-1">
                <section>
                    <div className="py-28  px-4 text-dark-blue">
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="text-2xl xl:text-3xl font-bold flex items-center my-2">
                                    <SlideTop>
                                        News
                                    </SlideTop>
                                </div>
                                <div className='flex '>
                                   <RenderFilter />

                                </div>
                            </div>
                            {(data?.length <= 0 || loading) ?
                                <div className='flex justify-center py-16'> <ThreeDots color='#206291' />  </div>
                                :
                                <>
                                    <div className="py-16">
                                        <div>

                                        {data.map((item, index) => <NewsCard key={item?.id} item={item?.attributes} id={item?.id} index={index} />)}
                                        </div>
                                        <div className="py-5">
                                            {console.log(pageCount)}
                                            <Pagnation pageCount={pageCount} callback={setPage} />
                                        </div>
                                    </div>
                                </>}
                        </div>
                    </div>
                </section>
            </div>
            <UpdateStatus date={formatDate(_date)} />
        </>
    )
}

