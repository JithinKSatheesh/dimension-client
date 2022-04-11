import React, {useEffect} from 'react'

import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer'
import Content from './Content'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

export default function Index(props) {

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])


    return (
        <>
            <Navbar />
            <Content />
            <Footer />

        </>
    )
}

