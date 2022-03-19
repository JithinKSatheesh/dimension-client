import React from 'react'
import HeroImg from 'Assets/img/hero.png'

export default function Hero(props) {
    

    return (
        <>
            <div className="w-full pt-36">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between">
                        <div></div>
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
