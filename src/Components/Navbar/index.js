import React from 'react'
import usescrollpos from 'Components/Hooks/useScrollPos'

// **

import { Navbar } from './Navbar'

export default function Index(props) {

    const {variant = ''} = props

    const { isScrollBeyond} = usescrollpos()

    const _floatNav = isScrollBeyond(5)

    return (
        <>
        {_floatNav && <Navbar variant={''} float={true} />}
        <Navbar variant={variant} float={false} />
        </>
    )
}



