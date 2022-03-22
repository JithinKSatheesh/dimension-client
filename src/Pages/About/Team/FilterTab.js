import React from 'react';

export const FilterTab = (props) => {

    const { active, changeActive } = props;

    const filters = [
        {
            id: 1,
            value: 'board_member',
            label: "Board member"
        },
        {
            id: 2,
            value: 'advisory_group',
            label: "Advisory group"
        },
        {
            id: 3,
            value: 'core_team',
            label: "Core team"
        },
    ];

    return (
        <div className="grid grid-cols-3 ">
            {filters.map((item, index) => <div
                key={item.id}
                className={`
                    py-3 text-center border-blue  
                    cursor-pointer text-lg
                    ${active === item.value && 'bg-dark-blue text-white'} 
                    ${index === 0 && 'rounded-l-xl'}
                    ${index === filters.length - 1 && 'rounded-r-xl'}
                    `}
                onClick={() => changeActive(item.value)}
            >
                {item.label}
            </div>
            )}
        </div>
    );
};
