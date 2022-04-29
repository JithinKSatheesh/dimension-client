import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Hero from './Hero'
import Content from './Content'
import Footer from 'Components/Footer'

import useStoreItem from 'Store/hooks/getStoreItems'

export default function Index(props) {
    
    const { ScrollToTop } = useScrollBehaviours()

    const {  getConfigs} = useStoreItem()
    const config = getConfigs?.configs?.regulations

    useEffect(() => {
        ScrollToTop()
    }, [])
    

    return (
        <>
        <Hero config={config} />
        <Content config={config} />
        {/* <Footer /> */}
            
        </>
    )
}
