import React, { useState } from 'react'

import Amdindex from './AmdIndex'
import Usdindex from './UsdIndex'

export default function Container(props) {

    const [tab, setTab] = useState(1)

    const TabBlock = (props) => {

        const tabList = [
            {
                id : 1,
                label : 'Dimension Armenia AMD Bond Index'
            },
            {
                id : 2,
                label : 'Dimension Armenia USD Corporate Bond Index'
            },
        ]

        const TabButton = (props) => {

            return (
                <div 
                    className={`text-base px-12 cursor-pointer py-5 border-dark-blue ${tab === props?.id ? 'border-b-2' : ''} `}
                    onClick={() => setTab(props?.id)}
                    >
                    {props?.label} 
                </div>
            )
        }

        return (
            <div className="flex justify-between text-dark-blue">
                {tabList.map(item => <TabButton id={item?.id} label={item?.label} /> )}
            </div>
        )
    }


    return (
        <>
            <div className="container mx-auto py-16">
                <div className="pb-16">
                    <TabBlock />
                </div>
                <div className='px-3'>

                {tab === 1 ? <Amdindex /> : <Usdindex />}
                
                </div>
            </div>
        </>
    )
}
