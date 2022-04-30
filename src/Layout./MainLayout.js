import React, { useEffect } from 'react'
import Footer from 'Components/Footer/index'
import { ThreeCircles } from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { isEmpty } from 'Utils/string'

export default function Mainlayout(props) {


    const { getConfigs } = useStoreItem()
    const { initAllConfigs } = initStoreItem()

    const footerData = getConfigs?.configs?.footer

    useEffect(() => {
        initAllConfigs()
    }, [])


    return (
        <>
            {isEmpty(getConfigs?.configs) ? <Loader /> : <>
                {props.children}
                <Footer footerData={footerData} />
            </>}
        </>
    )
}


const Loader = () => {

    return (
        <div className="fixed z-50 h-screen w-full bg-dark-blue-grad flex items-center justify-center">
            <ThreeCircles color='white' />
        </div>

    )
}