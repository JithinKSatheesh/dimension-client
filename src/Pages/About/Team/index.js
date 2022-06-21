import React, { useState, useEffect } from 'react'
import { FilterTab } from './FilterTab'

import { TeamCard } from './TeamCard'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop} from 'Components/SlideAnimation'

import {ThreeDots} from 'react-loader-spinner'

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'

export default function Team(props) {

    const {teamData, aboutPageData} = props
    // const { teamData } = useStoreItem()
    // const { initTeam } = initStoreItem()

    // const _data = getTeam?.team ?? []
    
    const _data = teamData ?? []

    // console.log(teamData)

    // useEffect(() => initTeam() ,[])

    const [active, setActive] = useState('board_member')

    const data = [..._data].filter(val => val?.filter_key === active)


    const changeActive = (value) => {
        setActive(value ? value : 'board_member')
    }

    const filters = [
        {
            id: 1,
            value: 'board_member',
            label: "Board of directors"
        },
        {
            id: 2,
            value: 'advisory_group',
            label: "Global Advisory Group"
        },
        {
            id: 3,
            value: 'core_team',
            label: "Core team"
        },
    ];


    return (
        <>
            <div id="team" className=" about-wrapper-4">
                <div className="container mx-auto ">
                    <div className="py-36">
                        <div className="flex flex-wrap items-center">
                            <div className=" w-full xl:w-1/3">
                                <div className="text-2xl xl:text-2xl 2l:text-3xl text-center xl:text-left mb-16 xl:mb-0 font-bold text-dark-blue">
                                    <SlideLeft>
                                    {aboutPageData?.team_title}
                                    </SlideLeft>
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 pl-0 xl:pl-44">
                                <SlideRight>

                                <FilterTab 
                                    filters={filters}
                                    active={active} 
                                    changeActive={changeActive} />
                                </SlideRight>
                            </div>
                            
                        </div>
                        <div className="mt-24">
                            {data?.length <= 0 ?
                                <div className=' flex justify-center'> <ThreeDots color='#206291' />  </div>
                                :
                                <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                                    {[...data].map(person => <TeamCard key={person.id} item={person} />)}
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

