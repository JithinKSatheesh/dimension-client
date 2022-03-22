import React from 'react'

import Navbar from 'Components/Navbar'
import Hero from './Hero'
import Buisnessprinciples from './BuisnessPrinciples'
import Ownership from './Ownership'
import Team from './Team'
import Partners from './Partners'
import Mission from './Mission'
import Corporatestructure from './CorporateStructure'

import Footer from 'Components/Footer'

export default function About(props) {
    

    return (
        <>
            <div>
                {/* <Navbar /> */}
                <Hero />
                <Buisnessprinciples />
                <Ownership />
                <Team />
                <Partners />
                <Mission />
                <Corporatestructure />
                <Footer />
            </div>
        </>
    )
}
