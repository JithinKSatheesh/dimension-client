import React from 'react'
import Navbar from 'Components/Navbar'
import Hero from './Hero'
import Mission from './Mission'
import Service from './Service'
import Protfolio from './Protfolio'
import Research from './Research'
import News from './News'
import Footer from 'Components/Footer'


export default function Home(props) {
    

    return (
        <div >
           <Navbar  /> 
           <Hero />
           <Mission />
           <Service />
           <Protfolio />
           <Research />
           <News />
           <Footer />

        </div>
    )
}
