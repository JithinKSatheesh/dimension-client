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

     
    const { getClientRights } = useStoreItem()
    const { initClientRights } = initStoreItem()

    useEffect(() => initClientRights(), [])

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])
    
    

    return (
        <>
        <Hero />
        <Contents getClientRights={getClientRights} />

        <Footer />
            
        </>
    )
}
