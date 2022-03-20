import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


import { ReactComponent as Logo} from 'Assets/icons/logo.svg'
import { ReactComponent as Lang} from 'Assets/icons/lang.svg'
import { ReactComponent as DownArrow} from 'Assets/icons/downsmall.svg'
import {ReactComponent as IconRightArrow} from 'Assets/icons/ArrowRight.svg'

// **

import { ReactComponent as IconHome  } from 'Assets/icons/service_home_blue.svg'
import { ReactComponent as IconShield  } from 'Assets/icons/service_shield_blue.svg'
import { ReactComponent as IconManage } from 'Assets/icons/service_manage_blue.svg' 

const NavLinks = ({ children, ...props }) => {
    return (
        <Link
            to={props.to}
            className="nav-item mr-16 uppercase text-base  text-dark-blue cursor-pointer self-center py-3">
            <span
                onMouseEnter={props.onHoverStart}
                onMouseLeave={props.onHoverEnd} >
                <div className="flex items-center">
                    {children}
                </div>
            </span>
        </Link>
    )
}

export default function Index(props) {

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
            <div className="w-full px-4">
                <div className="container mx-auto my-5">
                    <div className="flex items-center justify-between">
                        <div className="logo mr-5">
                            <Logo  />
                        </div>
                        <div className="nav-links  hidden xl:flex">
                            <NavLinks 
                                onHoverStart={toggleHoverMenu2} 
                                onHoverEnd={toggleHoverMenu2}
                                to="/" > About&nbsp;us&nbsp;&nbsp;<DownArrow/> 
                                <div className="relative">
                                    <AboutDropdown isHover={isHover2} />
                                </div>    
                            </NavLinks>
                            <NavLinks
                                onHoverStart={toggleHoverMenu} 
                                onHoverEnd={toggleHoverMenu}
                                to="/">Services&nbsp;&nbsp;<DownArrow/>
                                <div className="relative">
                                    <ServiceDropdown isHover={isHover} />
                                </div>    
                            </NavLinks>
                            <NavLinks to="/">Indices</NavLinks>
                            <NavLinks to="/">Portfolio</NavLinks>
                            <NavLinks to="/">news</NavLinks>
                        </div>
                        <div className="lang  hidden xl:flex">
                            <NavLinks to="/" > Contacts</NavLinks>
                            <div className="lang py-3 self-center"><Lang /></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

const ServiceDropdown = (props) => {

    const subMenuAnimate = {
        enter: {
          opacity: 1,
          y : 0,
          rotateX: 0,
          transition: {
            duration: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          y : -10,
          rotateX: -15,
          transition: {
            duration: 0.5,
            // delay: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        }
    }

    const MenuContent = (props) => {
        return (
            <div className="flex py-5 px-14">
                <div className="icon mr-4">
                    {props.icon}
                </div>
                <div>
                    <div className="text-xl font-semibold text-white mb-3">
                        {props.title}
                    </div>
                    <div className="text-xl  text-xs text-white mb-7">
                        {props.desc}
                    </div>
                    <div className="flex text-xs items-center font-bold text-white mb-7">
                            <Link to="/" > Read more </Link>
                            <div className="ml-4">
                                <IconRightArrow height={"12px"}  />
                            </div>
                    </div>

                </div>

            </div>
        )
    }
    

    return (
        <div className="fixed left-0 top-24  w-full normal-case z-30">
            <motion.div
                className=" bg-dark-blue-grad"
                initial="exit"
                animate={props?.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
                <div className="w-full">
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-1 xl:grid-cols-3">
                            <div  className="bg-menu-blue-light pt-7">
                                <MenuContent 
                                    icon={<IconHome />}
                                    title={<>Capital Markets <br/> Advisory</>}
                                    desc="Capital Markets Advisory is a key business area of Dimension and an integral part of its ability to achieve the Mission and Vision of the company."
                                    />
                            </div>
                            <div className="bg-menu-blue-light pt-7">
                                <MenuContent 
                                    icon={<IconShield />}
                                    title="Investment Securities Services"
                                    desc="We have years of experience in executing large and complex corporate securities transactions in the Armenian capital market and beyond. By upholding our ."
                                    />
                            </div>
                            <div className="bg-menu-blue-light pt-7">
                                <MenuContent 
                                    icon={<IconManage />}
                                    title={<>Asset <br /> Management</>}
                                    desc="In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds."
                                    />
                            </div>
                            
                        
                        </div> 
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const AboutDropdown = (props) => {

    const subMenuAnimate = {
        enter: {
          opacity: 1,
          y : 0,
          rotateX: 0,
          transition: {
            duration: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          y : -10,
          rotateX: -15,
          transition: {
            duration: 0.5,
            // delay: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        }
    }

    return (
        <div className="fixed left-0 top-24  w-full normal-case z-30">
            <motion.div
                className=" bg-dark-blue-grad"
                initial="exit"
                animate={props?.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
                <div className="w-full">
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-1 xl:grid-cols-3">
                            <div  className="bg-menu-blue-light text-white">
                                hello
                            </div>
                            <div className="bg-menu-blue-light text-white">
                            hello
                            </div>
                            <div className="bg-menu-blue-light text-white">
                            hello
                            </div>
                            
                        
                        </div> 
                    </div>
                </div>
            </motion.div>
        </div>
    )
}