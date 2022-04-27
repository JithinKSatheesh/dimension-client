import React, { useState } from 'react'

import Amdindex from './AmdIndex'
import Usdindex from './UsdIndex'

export default function Container(props) {

    const [tab, setTab] = useState(1)

    const TabBlock = (props) => {

        const tabList = [
            {
                id : 1,
                label : 'Dimension Armenia',
                desc : "AMD Bond Index"
            },
            {
                id : 2,
                label : 'Dimension Armenia',
                desc : "USD Corporate Bond Index"
            },
        ]

        const TabButton = (props) => {

            return (
                <div 
                    className={`
                        text-base px-5 w-fit lg:w-72 cursor-pointer py-3 border-dark-blue  
                        ${tab === props?.id ? 'bg-dark-blue-grad text-white ' : ''} 
                        ${props?.last ? 'rounded-r-2xl' : 'rounded-l-2xl'}
                        text-center
                        `}
                    onClick={() => setTab(props?.id)}
                    >
                        <div className="text-sm">
                            {props?.label} 
                        </div>
                        <div className="font-bold">
                            {props?.desc}
                        </div>
                </div>
            )
        }

        return (
            <div className="w-fit mx-auto    text-dark-blue rounded-3xl border-2 border-dark-blue">
                <div className="flex ">
                {tabList.map((item, index) => <TabButton 
                    id={item?.id} 
                    label={item?.label} 
                    desc={item?.desc} 
                    last={tabList.length - 1 === index}
                    /> )}
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="container mx-auto py-16 xl:px-16 ">
                <div className="pb-16">
                    <TabBlock />
                </div>
                <div className='px-4 xl:px-16 shadow rounded-xl'>

                {tab === 1 ? <Amdindex /> : <Usdindex />}
                
                </div>
            </div>
        </>
    )
}
