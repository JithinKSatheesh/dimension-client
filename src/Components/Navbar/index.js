import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import { ReactComponent as Logo} from 'Assets/icons/logo.svg'
import { ReactComponent as LogoWhite} from 'Assets/icons/logo_white.svg'
import { ReactComponent as Lang} from 'Assets/icons/lang.svg'
import { ReactComponent as DownArrow} from 'Assets/icons/downsmall.svg'
import { ReactComponent as Burger} from 'Assets/icons/burger.svg'

// **

import { ServiceDropdown } from './ServiceDropdown';
import { AboutDropdown } from './AboutDropdown';

const NavLinks = ({ children, ...props }) => {
    return (
        <Link
            to={props.to}
            onMouseEnter={props.onHoverStart}
            onMouseLeave={props.onHoverEnd} 
            className={`
                nav-item  
                uppercase 
                text-base  
                cursor-pointer self-center py-10 px-8 
                ${props.isHover ? 'text-white  bg-dark-blue-grad' : ''} 
                ${props.variant === 'white' ? 'text-white' : ''}
                `}>
            <span
                
                >
                <div className="flex items-center">
                    {children}
                </div>
            </span>
        </Link>
    )
}

export default function Index(props) {

    const {variant = ''} = props

    const [isHover, toggleHover] = useState(false);
    const [isHover2, toggleHover2] = useState(false);

    const toggleHoverMenu = () => {
        toggleHover(!isHover);
    }

    const toggleHoverMenu2 = () => {
        toggleHover2(!isHover2);
    }

    
    

    return (
        <>
            <div className="w-full px-4 pt-8 xl:pt-0">
                <div className="container mx-auto ">
                    <div className="flex items-center justify-between">
                        <div className="logo mr-5 hidden xl:block">
                            {variant === 'white' ? <LogoWhite /> : <Logo  />}
                        </div>
                        {/* Mobile logo */}
                        <div className="logo block xl:hidden">
                            {variant === 'white' ? 
                                <LogoWhite height={"40px"} width="101px" /> 
                                : 
                                <Logo height={"40px"} width="101px" />}
                        </div>
                        <div className="nav-links  hidden xl:flex">
                            <NavLinks 
                                onHoverStart={toggleHoverMenu2} 
                                onHoverEnd={toggleHoverMenu2}
                                variant={variant}
                                isHover={isHover2}
                                to="/about" > About&nbsp;us&nbsp;&nbsp;<DownArrow/> 
                                <div className="relative">
                                    <AboutDropdown isHover={isHover2} />
                                </div>    
                            </NavLinks>
                            <NavLinks
                                onHoverStart={toggleHoverMenu} 
                                onHoverEnd={toggleHoverMenu}
                                isHover={isHover}
                                variant={variant}
                                to="/">Services&nbsp;&nbsp;<DownArrow/>
                                <div className="relative">
                                    <ServiceDropdown isHover={isHover} />
                                </div>    
                            </NavLinks>
                            <NavLinks 
                                variant={variant}
                                to="/">
                                    Indices
                            </NavLinks>

                            <NavLinks 
                                variant={variant}
                                to="/">
                                Portfolio
                            </NavLinks>
                            <NavLinks 
                                variant={variant}
                                to="/">
                                    news
                            </NavLinks>
                        </div>
                        <div className="lang  hidden xl:flex">
                            <NavLinks  variant={variant} to="/" > Contacts</NavLinks>
                            <div className={`lang py-3 self-center ${variant === 'white' && 'text-white'}`}><Lang /></div>
                        </div>
                        <div className="block xl:hidden">
                            <Burger />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

