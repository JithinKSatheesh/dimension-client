import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'Assets/icons/logo.svg';
import { ReactComponent as LogoWhite } from 'Assets/icons/logo_white.svg';
import { ReactComponent as Lang } from 'Assets/icons/lang.svg';
import { ReactComponent as DownArrow } from 'Assets/icons/downsmall.svg';
import { ReactComponent as Burger } from 'Assets/icons/burger.svg';
import { ServiceDropdown } from './ServiceDropdown';
import { AboutDropdown } from './AboutDropdown';
import { MobileMenu } from './MobileMenu';
import { NavLinks } from "./NavLinks";



export function Navbar(props) {

    const { variant = '', float = false } = props;

    const [isHover, toggleHover] = useState(false);
    const [open, setOpen] = useState(false);
    // const [isHover2, toggleHover2] = useState(false);
    const toggleHoverMenu = (id) => {
        toggleHover(id);
    };

    const toggleHoverOut = () => {
        toggleHover(false);
    };

    // const toggleHoverMenu2 = () => {
    //     toggleHover2(!isHover2);
    // }
    return (
        <>
            <div className={`w-full px-4 pb-5 pt-8 xl:pb-0 xl:pt-0  ${float && 'fixed bg-white z-40 drop-shadow-md'} `}>
                <div className="container mx-auto ">
                    <div className="flex items-center justify-between">
                        {/* desktop logo */}
                        <div className="logo mr-5 hidden xl:block">
                            <Link to="/">
                                {variant === 'white' ? <LogoWhite  className='w-32 2xl:w-fit' /> : <Logo className='w-32 2xl:w-fit' />}
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
                        {/* -------------------------- */}
                        {/* Nav list */}
                        {/* -------------------------- */}
                        <div className="nav-links  hidden xl:flex text-dark-blue">
                            <NavLinks
                                onHoverStart={() => toggleHover('about')}
                                onHoverEnd={toggleHoverOut}
                                variant={variant}
                                isHover={isHover === 'about'}
                                to="/about"> About&nbsp;us&nbsp;&nbsp;<DownArrow />
                                <div className="">
                                    <AboutDropdown isHover={isHover === 'about'} />
                                </div>
                            </NavLinks>
                            <NavLinks
                                onHoverStart={() => toggleHover('services')}
                                onHoverEnd={toggleHoverOut}
                                isHover={isHover === 'services'}
                                variant={variant}
                                to="/services/capital-market">Services&nbsp;&nbsp;<DownArrow />
                                <div className="">
                                    <ServiceDropdown isHover={isHover === 'services'} />
                                </div>
                            </NavLinks>
                            <NavLinks
                                onHoverStart={() => toggleHover('indices')}
                                onHoverEnd={toggleHoverOut}
                                isHover={isHover === 'indices'}
                                variant={variant}
                                to="/indices">
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
                        <div className="lang  hidden xl:flex text-dark-blue">
                            <NavLinks
                                variant={variant} to="/contacts">
                                Contacts
                            </NavLinks>
                            <div className={`lang py-3 self-center cursor-pointer ${variant === 'white' && 'text-white'}`}>
                                <Lang className='h-5 2xl:w-fit' />
                            </div>
                        </div>

                        {/* ------------------------ */}
                        {/* mobile menu burger */}
                        {/* ------------------------ */}
                        <div
                            onClick={() => setOpen(true)}
                            className={`block xl:hidden  ${variant === 'white' && 'text-white'} cursor-pointer `}>
                            <Burger />
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------- */}
            {/* Mobile menu */}
            {/* -------------------------------------- */}
            <MobileMenu open={open} setOpen={setOpen} />

        </>
    );
}
