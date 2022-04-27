import React from 'react';

export const FilterTab = (props) => {

    const { active, changeActive , filters} = props;

    

    return (
        <div className="grid grid-cols-3 gap-0 border-color-blue-grad border-2 rounded-2xl">
            {filters.map((item, index) => <div
                key={item.id}
                className={`
                    py-3 text-center   
                    cursor-pointer text-base 2xl:text-lg
                    ${active === item.value ? 'bg-dark-blue-grad border-color-blue-grad  text-white' : 'text-dark-blue'} 
                    ${index === 0 && 'rounded-l-xl  border-color-blue-grad  border-r-2'}
                    ${index === filters.length - 1 && 'rounded-r-xl border-color-blue-grad  border-l-2'}
                    `}
                onClick={() => changeActive(item.value)}
            >
               <div className='w-16 xl:w-fit mx-auto  text-center'>{item.label}</div> 
            </div>
            )}
        </div>
    );
};
