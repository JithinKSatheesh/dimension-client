import React from 'react'
import usescrollpos from 'Components/Hooks/useScrollPos'

// **

import { Navbar } from './Navbar'

export default function Index(props) {

    const { variant = '' } = props

    const { isScrollBeyond, isScrollUp } = usescrollpos()

    const _floatNav = isScrollBeyond(5) && isScrollUp()

    return (
        <>
            <Navbar variant={''} float={true} _floatNav={_floatNav} />
            <Navbar variant={variant} float={false} />
        </>
    )
}



