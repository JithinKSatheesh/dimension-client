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

    const { getAboutPage, getConfigs } = useStoreItem()
    // const { initAboutpage, initAboutPageOwnership, initAboutPagePartners, initAllConfigs } = initStoreItem()

    
    const { ScrollToTop } = useScrollBehaviours()
    const location = useLocation()
    
    useEffect(() => {

        // initAboutpage()
        // initAboutPageOwnership()
        // initAboutPagePartners()
        // ------------
        // initAllConfigs()

    }, [])

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

    const aboutPageData = getConfigs?.configs?.about_page
    const teamData = getConfigs?.configs?.team
    const partnersData = getConfigs?.configs?.partners
    const ownershipData = getConfigs?.configs?.ownership
    
    // console.log(partnersData)



    return (
        <>
            <div>
                {/* <Navbar /> */}
                <Hero aboutPageData={aboutPageData} />
                <Buisnessprinciples aboutPageData={aboutPageData} />
                <Ownership ownershipData={ownershipData} aboutPageData={aboutPageData}  />
                <Team teamData={teamData} />
                <Partners getAboutPage={getAboutPage} partnersData={partnersData} />
                <Mission getHomePageData={getConfigs?.configs?.home_page} />
                <Corporatestructure />
                <Statuorydocuments getAboutPage={getAboutPage} aboutPageData={aboutPageData}  />
                {/* <Footer /> */}
            </div>
        </>
    )
}
