import React, { useState, useEffect } from 'react'

export default function Usescrollpos(props) {

    const [offset, setOffset] = useState(0);
    

    const isScrollBeyond = (max = 200) => {
        return (offset > max)
    }

  
    useEffect(() => {

        const handleScroll = () => {
            const _offset = window.scrollY;
            setOffset(_offset)
        }


        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [offset])

    return { isScrollBeyond }
}
