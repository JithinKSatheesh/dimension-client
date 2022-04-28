import React, {useEffect} from 'react'
import Navbar from 'Components/Navbar'
import Hero from './Hero'
import Container from './Content'
import Footer from 'Components/Footer'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

export default function Index(props) {
    
const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])

    return (
        <>
            <Hero />
            <Container />
            {/* <Footer /> */}
        </>
    )
}
