import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Hero from './Hero'
import Contents from './Contents'
import Otherservices from './OtherServices'
import Footer from 'Components/Footer'

export default function Capitalmarket(props) {
    
    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])
    

    return (
        <>
        <Hero />
        <Contents />
        {/* <Otherservices /> */}
        <Footer />
            
        </>
    )
}
