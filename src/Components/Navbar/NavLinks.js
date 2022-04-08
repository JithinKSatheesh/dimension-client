import React from 'react';
import { Link } from 'react-router-dom';


export const NavLinks = ({ children, ...props }) => {
    return (
        <Link
            to={props.to}
            onMouseEnter={props.onHoverStart}
            onMouseLeave={props.onHoverEnd}
            className={`
                nav-item  
                uppercase 
                text-sm  2xl:text-base
                cursor-pointer self-center py-10 px-8 
                ${props.isHover ? ' bg-menu-blue-light' : ''} 
                ${props.variant === 'white' ? 'text-white' : ''}
                `}>
            <span

            >
                <div className="flex items-center">
                    {children}
                </div>
            </span>
        </Link>
    );
};
