import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Hero from './Hero'
import Contents from './Contents'
import Footer from 'Components/Footer'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function Index(props) {

     
    const { getConfigs } = useStoreItem()
    // const { initAllConfigs } = initStoreItem()
    // useEffect(() => initAllConfigs(), [])

    const config = getConfigs?.configs?.client_rights

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])
    
    

    return (
        <>
        <Hero getClientRights={config}  />
        <Contents getClientRights={config} />

        {/* <Footer /> */}
            
        </>
    )
}
