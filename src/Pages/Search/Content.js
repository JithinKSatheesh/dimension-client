import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useSearchParams } from 'react-router-dom'
import { ReactComponent as Search } from 'Assets/icons/search.svg'

import { DetailsButton } from 'Components/Buttons'

import { SearchResult } from './SearchResult'

export default function Content(props) {

    const [val, setVal] = useState('')
    const {t} = useTranslation()

    const [searchKey, setSearchKey] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    console.log()

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearchKey(val)
        }
    }

    useEffect(() => {
        const _temp = searchParams.get("q")
        setVal(_temp)
        setSearchKey(_temp)
    }, [])

    return (
        <>
            <div className="container mx-auto ">
                <div className="py-16">
                    <div className="flex items-center ">
                        <div className="grow">
                            <SearchBox
                                onKeyPress={onKeyPress}
                                val={val}
                                setVal={setVal} />
                        </div>
                        <div>
                            <DetailsButton
                                onClick={() => setSearchKey(val)} className="py-4 ml-3" >
                                {t("Search")}
                            </DetailsButton>
                        </div>
                    </div>
                    <SearchResult searchKey={searchKey} />
                </div>

            </div>
        </>
    )
}


export const SearchBox = (props) => {


    const { val, setVal, onKeyPress } = props

    const handleChange = (e) => {

        setVal(e.target.value)

    }
    return (
        <div className="input relative ">
            <div className="absolute mt-3 ml-2"><Search /></div>
            <input
                type="text" name="" id="" className='h-14 w-full pl-12 bg-blue-light rounded-xl'
                value={val}
                onKeyPress={onKeyPress}
                onChange={handleChange}
            />
        </div>
    )
}

