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


export default function Home(props) {

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])
    

    return (
        <div >
           <Navbar  /> 
           <Hero />
           <Mission />
           <Service />
           <News />
           <Protfolio />
           <Research />
           <Footer />

        </div>
    )
}
