import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Navbar from 'Components/Navbar'
import Hero from './Hero'
import Buisnessprinciples from './BuisnessPrinciples'
import Ownership from './Ownership'
import Team from './Team'
import Partners from './Partners'
import Mission from './Mission'
import Corporatestructure from './CorporateStructure'
import Statuorydocuments from './StatuoryDocuments'

import Footer from 'Components/Footer'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function About(props) {

    const { getAboutPage } = useStoreItem()
    const { initAboutpage } = initStoreItem()

    
    const { ScrollToTop } = useScrollBehaviours()
    const location = useLocation()
    
    useEffect(() => initAboutpage(), [])

    useEffect(() => {
        if (location.hash.slice(1)) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        
            ScrollToTop()
        }
    }, [location])
    

    // console.log(getAboutPage)


    return (
        <>
            <div>
                {/* <Navbar /> */}
                <Hero />
                <Buisnessprinciples />
                <Ownership getAboutPage={getAboutPage} />
                <Team />
                <Partners />
                <Mission />
                <Corporatestructure />
                <Statuorydocuments getAboutPage={getAboutPage} />
                <Footer />
            </div>
        </>
    )
}
