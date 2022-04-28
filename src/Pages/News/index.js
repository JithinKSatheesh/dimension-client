import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Navbar from 'Components/Navbar'
import Content from './Content'
import Footer from 'Components/Footer'

export default function Index(props) {

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])
    
    
    

    return (
        <>
        <Navbar />
        <Content />
        {/* <Footer /> */}
            
        </>
    )
}
