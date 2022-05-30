import React, {useEffect} from 'react'
import Navbar from 'Components/Navbar'
import Hero from './Hero'
import Container from './Content'
import Footer from 'Components/Footer'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'
import Changelanguage from 'Components/Hooks/changeLanguage'

export default function Index(props) {
    
    const { ScrollToTop } = useScrollBehaviours()
    const {initLanguage} = Changelanguage()

    useEffect(() => {
        ScrollToTop()
        initLanguage()
    }, [])

    return (
        <>
            <Hero />
            <Container />
            {/* <Footer /> */}
        </>
    )
}
