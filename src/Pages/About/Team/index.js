import React, { useState } from 'react'
import { FilterTab } from './FilterTab'

import { TeamCard } from './TeamCard'

export default function Team(props) {

    const [active, setActive] = useState('board_member')

    const changeActive = (value) => {
        setActive(value ? value : 'board_member')
    }

    const _members = [
        {
            id : 1,
            name : "Davit Hakobyan",
            position : 'Chairman of the Board',
            type : 'board_member',
            img : '/assets/team/Davit_Hakobyan.png'
        },
        {
            id : 2,
            name : "Carel Chris Hofstra",
            position : 'Board member',
            type : 'board_member',
            img : '/assets/team/Carel_Chris_Hofstra.png'
        },
        {
            id : 3,
            name : "Edgar Hambaryan",
            position : 'Board member',
            type : 'board_member',
            img : '/assets/team/Edgar_Hambaryan.png'
        },
        {
            id : 4,
            name : "Carel Chris Hofstra",
            position : 'Board member',
            type : 'board_member',
            img : '/assets/team/Carel_Chris_Hofstra.png'
        },
    ]
    


    return (
        <>
            <div className=" about-wrapper-4">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="flex flex-wrap">
                            <div className=" w-full xl:w-1/3">
                                <div className="text-2xl xl:text-3xl text-center xl:text-left mb-16 xl:mb-0 font-bold text-dark-blue">
                                    Our team
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 pl-0 xl:pl-44">
                                <FilterTab 
                                    active={active} 
                                    changeActive={changeActive} />
                            </div>
                            
                        </div>
                        <div className="mt-24">
                            <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                                {_members.map(person => <TeamCard key={person.id} item={person} />)}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

