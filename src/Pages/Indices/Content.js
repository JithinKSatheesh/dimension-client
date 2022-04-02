import React from 'react'
import ChartsWrapper  from './ChartsWrapper'

export default function Container(props) {
    

    return (
        <>
        <div className="container mx-auto py-16">
            <div className="pb-16">
                <div className="flex justify-between text-dark-blue">
                    <div className="text-base px-12 py-5 border-b-2 border-dark-blue">Dimension Armenia AMD Bond Index</div>
                    <div className="text-base px-12 py-5">Dimension Armenia USD Corporate Bond Index</div>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/4">

                </div>
                <div className="w-3/4">
                    <div className="">
                        <ChartsWrapper /> 
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
