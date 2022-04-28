import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'


import Navbar from 'Components/Navbar'
import Hero from './Hero'
import Mission from './Mission'
import Service from './Service'
import Protfolio from './Protfolio'
import Research from './Research'
import News from './News'
import Footer from 'Components/Footer'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'


export default function Home(props) {

    const { ScrollToTop } = useScrollBehaviours()

    const { getConfigs } = useStoreItem()
    const { initAllConfigs } = initStoreItem()

    console.log(getConfigs)

    const homepageData = getConfigs?.configs?.home_page


    useEffect(() => {
        ScrollToTop()
        initAllConfigs()
    }, [])
    

    return (
        <div >
           <Navbar  /> 
           <Hero homepageData={homepageData} />
           <Mission homepageData={homepageData} />
           <Service />
           <News />
           <Protfolio />
           <Research />
           {/* <Footer homepageData={homepageData} /> */}

        </div>
    )
}
