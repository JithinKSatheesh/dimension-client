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
    // const [isHover2, toggleHover2] = useState(false);

    const toggleHoverMenu = (id) => {
        toggleHover(id);
    }

    const toggleHoverOut = () => {
        toggleHover(false);
    }

    // const toggleHoverMenu2 = () => {
    //     toggleHover2(!isHover2);
    // }

    
    

    return (
        <>
            <div className="w-full px-4 pt-8 xl:pt-0">
                <div className="container mx-auto ">
                    <div className="flex items-center justify-between">
                        {/* desktop logo */}
                        <div className="logo mr-5 hidden xl:block">
                            <Link to="/">
                            {variant === 'white' ? <LogoWhite /> : <Logo  />}
                            </Link>
                        </div>
                        {/* Mobile logo */}
                        <div className="logo block xl:hidden">
                            <Link to="/">
                            {variant === 'white' ? 
                                <LogoWhite height={"40px"} width="101px" /> 
                                : 
                                <Logo height={"40px"} width="101px" />}
                            </Link>
                        </div>
                        <div className="nav-links  hidden xl:flex">
                            <NavLinks 
                                onHoverStart={() => toggleHover('about')} 
                                onHoverEnd={toggleHoverOut}
                                variant={variant}
                                isHover={isHover === 'about'}
                                to="/about" > About&nbsp;us&nbsp;&nbsp;<DownArrow/> 
                                <div className="">
                                    <AboutDropdown isHover={isHover === 'about'} />
                                </div>    
                            </NavLinks>
                            <NavLinks
                                onHoverStart={() => toggleHover('services')} 
                                onHoverEnd={toggleHoverOut}
                                isHover={isHover === 'services'}
                                variant={variant}
                                to="/services/capital-market">Services&nbsp;&nbsp;<DownArrow/>
                                <div className="">
                                    <ServiceDropdown isHover={isHover === 'services'} />
                                </div>    
                            </NavLinks>
                            <NavLinks 
                                onHoverStart={() => toggleHover('indices')} 
                                onHoverEnd={toggleHoverOut}
                                isHover={isHover === 'indices'}
                                variant={variant}
                                to="/">
                                    Indices
                            </NavLinks>

                            <NavLinks 
                                onHoverStart={() => toggleHover('protfolio')} 
                                onHoverEnd={toggleHoverOut}
                                isHover={isHover === 'protfolio'}
                                variant={variant}
                                to="/protfolio">
                                Portfolio
                            </NavLinks>
                            <NavLinks 
                                onHoverStart={() => toggleHover('news')} 
                                onHoverEnd={toggleHoverOut}
                                isHover={isHover === 'news'}
                                variant={variant}
                                to="/news">
                                    news
                            </NavLinks>
                        </div>
                        <div className="lang  hidden xl:flex">
                            <NavLinks  
                                variant={variant} to="/" > 
                                Contacts
                            </NavLinks>
                            <div className={`lang py-3 self-center cursor-pointer ${variant === 'white' && 'text-white'}`}>
                                <Lang />
                            </div>
                        </div>
                        <div className={`block xl:hidden  ${variant === 'white' && 'text-white'}`}>
                            <Burger  />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

