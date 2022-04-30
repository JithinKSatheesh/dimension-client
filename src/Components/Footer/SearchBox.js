import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Search } from 'Assets/icons/search.svg';

export const SearchBox = (props) => {

    const navigate = useNavigate();

    const [val, setVal] = useState('');

    const handleChange = (e) => {

        setVal(e.target.value);

    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?q=${val}`);
        }
    };

    return (
        <div className={`input relative ${props?.className}`}>
            <div className="absolute mt-2 ml-2"><Search /></div>
            <input
                style={{ width: '100%' }} type="text" name="" id="" className='h-12 pl-10 rounded-xl'
                value={val}
                onChange={handleChange}
                onKeyDown={onKeyPress} />
        </div>
    );
};
