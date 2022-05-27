import React from 'react';
import { Link } from 'react-router-dom';


export const SearchCard = (props) => {

    const { title, desc, link } = props?.item;

    return (
        <Link to={link}>
            <div className='bg-blue-light rounded-xl text-dark-blue p-6 mb-12'>
                <div className="text-sm py-2">
                    {link}
                </div>
                <div className="text-xl py-2 font-bold">
                    {title}
                </div>
                <div className='py-2'>
                    {desc}
                </div>

            </div>
        </Link>
    );
};
