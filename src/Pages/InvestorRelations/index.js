import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Hero from './Hero'
import Annualreport from './AnnualReport'
import Financialstatement from './FinancialStatement'
import Footer from 'Components/Footer'

export default function Capitalmarket(props) {
    
    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])

    return (
        <>
        <Hero />
        <Annualreport />
        <Financialstatement />
        <Footer />
            
        </>
    )
}
