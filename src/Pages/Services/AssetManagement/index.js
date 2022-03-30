import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Hero from './Hero'
import Contents from './Contents'
// import Otherservices from './OtherServices'
import Footer from 'Components/Footer'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'


export default function Capitalmarket(props) {
    
    const { getServices } = useStoreItem()
    const { initServices } = initStoreItem()

    useEffect(() => initServices(), [])

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])

    

    return (
        <>
        <Hero getServices={getServices} />
        <Contents getServices={getServices} />
        {/* <Otherservices /> */}
        <Footer />
            
        </>
    )
}
