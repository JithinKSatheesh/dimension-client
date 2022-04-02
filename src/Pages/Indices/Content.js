import React from 'react'
import ChartsWrapper  from './ChartsWrapper'

export default function Container(props) {
    

    return (
        <>
        <div className="container mx-auto py-16">
            <div className="pb-16">
                <div className="flex justify-between text-dark-blue">
                    <div className="text-base px-12 cursor-pointer py-5 border-b-2 border-dark-blue">Dimension Armenia AMD Bond Index</div>
                    <div className="text-base px-12 cursor-pointer py-5">Dimension Armenia USD Corporate Bond Index</div>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/4">
                        <div className='mb-16'>
                            <div className="text-sm py-5">
                                 April 2022
                            </div>
                            <div className="text-5xl text-blue font-bold">
                                 10.2
                            </div>
                        </div>
                        <div>
                            <div className="text-sm py-5">
                                April 2022
                            </div>
                            <div className="text-5xl text-blue font-bold">
                                10.2
                            </div>
                        </div>
                </div>
                <div className="w-3/4">
                    <div className="">
                        <ChartsWrapper /> 
                    </div>
                    <div className="py-7 text-xs text-dark-blue">
                    The index launch date is May 31, 2021.  Prior to this, data are hypothetical and based on the index methodology applied retroactively. When back-testing data, Dimension uses actual historical constituent-level data (e.g., historical price, market capitalization, and corporate action data) in its calculations. Dimension maintains the index and calculates the index levels and performance shown but does not manage all constituent assets.  Past performance of any index is not an indication or guarantee of future results. 
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
