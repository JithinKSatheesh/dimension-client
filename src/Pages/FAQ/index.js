import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'
import Changelanguage from 'Components/Hooks/changeLanguage'

import Hero from './Hero'
import Questions from './Questions'
import Sendrequest from './SendRequest'
import Footer from 'Components/Footer'


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
        <Questions />
        <Sendrequest />
        {/* <Footer /> */}
        </>
    )
}
