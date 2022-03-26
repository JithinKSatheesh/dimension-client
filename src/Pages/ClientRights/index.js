import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Hero from './Hero'
import Contents from './Contents'
import Footer from 'Components/Footer'

export default function Index(props) {

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])
    
    

    return (
        <>
        <Hero />
        <Contents />

        <Footer />
            
        </>
    )
}
