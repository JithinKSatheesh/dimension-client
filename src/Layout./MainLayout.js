import React, { useEffect } from 'react'
import Footer from 'Components/Footer/index'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function Mainlayout(props) {
    

    const { getConfigs } = useStoreItem()
    const { initAllConfigs } = initStoreItem()

    const footerData = getConfigs?.configs?.footer

    useEffect(() => {
        initAllConfigs()
    }, [])


    return (
        <>
           {props.children}
           <Footer footerData={footerData}  /> 
        </>
    )
}
