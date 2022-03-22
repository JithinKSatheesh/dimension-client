import React from 'react'
import HeroImg from 'Assets/img/hero.png'

export default function Hero(props) {
    

    return (
        <>
            <div className="w-full px-4 py-12 xl:py-36 hero-wrapper">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        <div>
                            <div className="hero-h1 text-3xl xl:text-5xl text-dark-blue font-semibold">
                            Better way <br /> to invest
                            </div>
                            <div className="py-7 text-dark-blue max-w-xl">
                                Dimension was founded with the understanding that the dynamic 
                                investment markets of Armenia require an objective and professional 
                                approach from highly specialized experts who believe in the integrity 
                                of the financial markets.
                            </div>
                        </div>
                        <div className='max-w-lg 3xl:max-w-2xl relative rounded-xl'>
                            <div className="absolute w-full h-full hero-img-overlay rounded-xl"></div>
                            <img src={HeroImg} alt="" className='w-full rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
