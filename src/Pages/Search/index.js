import React, {useEffect} from 'react'

import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer'
import Content from './Content'

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
            <Navbar />
            <Content />
            {/* <Footer /> */}

        </>
    )
}

