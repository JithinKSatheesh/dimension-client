import { UpdateStatus } from 'Components/UpdateStatus'
import React, { useState } from 'react'

import Amdindex from './AmdIndex'
import Usdindex from './UsdIndex'

import useStoreItem from 'Store/hooks/getStoreItems'
import { formatDate } from 'Utils/time'

export default function Container(props) {

    const [tab, setTab] = useState(1)

    const { getConfigs} = useStoreItem()

    const _date_amd = getConfigs?.configs?.indices?.amd?.indices_amd_table?.updatedAt
    const _date_usd = getConfigs?.configs?.indices?.usd?.indices_usd_table?.updatedAt

    const TabBlock = (props) => {

        const tabList = [
            {
                id: 1,
                label: 'Dimension Armenia',
                desc: "AMD Bond Index"
            },
            {
                id: 2,
                label: 'Dimension Armenia',
                desc: "USD Corporate Bond Index"
            },
        ]

        const TabButton = (props) => {

            return (
                <div
                    className={`
                        text-base px-5 w-fit lg:w-72 cursor-pointer py-3 
                        ${tab === props?.id ? 'bg-dark-blue-grad text-white ' : ''} 
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
            <div className="w-fit mx-auto    text-dark-blue rounded-2xl border-2 border-dark-blue overflow-hidden">
                <div className="flex overflow-hidden">
                    {tabList.map((item, index) => <TabButton
                        id={item?.id}
                        label={item?.label}
                        desc={item?.desc}
                        last={tabList.length - 1 === index}
                    />)}
                </div>
            </div>
        )
    }


    return (
        <>
            <div className='news-wrapper-1'>

                <div className="container mx-auto py-16  ">
                    <div className="pb-16">
                        <TabBlock />
                    </div>
                    <div className='px-4 xl:px-16 bg-white shadow rounded-xl'>

                        {tab === 1 ? <Amdindex /> : <Usdindex />}

                    </div>
                </div>
            </div>
            <UpdateStatus date={formatDate(tab === 1 ? _date_amd : _date_usd)} />
        </>
    )
}
