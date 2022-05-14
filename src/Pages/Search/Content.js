import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useSearchParams, Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import { ReactComponent as Search } from 'Assets/icons/search.svg'

import { DetailsButton } from 'Components/Buttons'

import { data } from './searchData'

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

const SearchResult = (props) => {

    const { searchKey } = props

    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['title', 'desc', 'tags']
    }

    const fuse = new Fuse(data, options)

    const result = fuse.search(searchKey)

    //   console.log(result)

    return (
        <div>
            <div className="py-12 text-dark-blue text-sm">
                Search result for : <span className="font-bold">{searchKey}</span>
            </div>
            <div className=''>
                {[...result].map(item => <SearchCard item={item?.item} />)}

            </div>
            {(result?.length <= 0) && <div>
                <div className="text-center text-dark-blue">
                    No result found!
                </div>
            </div>}
        </div>
    )
}


const SearchCard = (props) => {

    const { title, desc, link } = props?.item

    return (
        <Link to={link} >
            <div className='bg-blue-light rounded-xl text-dark-blue p-6 mb-12'>
                <div className="text-sm py-2">
                    {link}
                </div>
                <div className="text-xl py-2 font-bold">
                    {title}
                </div>
                <div className='py-2'>
                    {desc}
                </div>

            </div>
        </Link>
    )
}