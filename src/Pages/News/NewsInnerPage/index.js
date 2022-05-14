import React, { useEffect, useState } from 'react'
// ** hooks
import { useParams } from 'react-router-dom'
import {ThreeDots} from 'react-loader-spinner'

import Navbar from 'Components/Navbar'
import Innercontent from './InnerContent'
import News from 'Pages/Home/News'
import Footer from 'Components/Footer'


import {GetFunctions} from 'API/fetch'
import { isEmpty } from 'Utils/string'

import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'
import { UpdateStatus } from 'Components/UpdateStatus'
import { formatDate } from 'Utils/time'

export default function Index(props) {

    const { id } = useParams()
    const [data, setData] = useState({})
    

    const { ScrollToTop } = useScrollBehaviours()

    

    const fetchNews = async() => {
        try {

            const res = await GetFunctions.fetchArticles({ 
                populate : ["image"],
            
            }, id)
            const data = res?.data?.data || {}
            setData(data)

            console.log(data)

        } catch(ex) {
            
        }
    }



    useEffect(() => {
        ScrollToTop()
        fetchNews()
        console.log("called")
    }, [id])
    

    return (
        <>
        <Navbar />
        {isEmpty(data) ?
            <div className='flex justify-center py-16'> <ThreeDots  color='#206291' />  </div>
            :
            <Innercontent item={data?.attributes} />
        }
        <News />
        <UpdateStatus date={formatDate(data?.attributes?.updatedAt)} />
        {/* <Footer /> */}
        
        </>
    )
}
