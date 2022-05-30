import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation, Trans } from 'react-i18next';

// import { MenuContent } from './ServiceDropdown'
// import { RenderMenuLinks } from './AboutDropdown';
import { ServiceRenderMenuList } from './ServiceDropdown';
import { AboutMenuList } from "./AboutMenuList";
import useServiceMenuList from './ServiceMenuList';

import { AddressData, AddressDataArray } from 'Components/Footer/AddressData'
import {socialMedia} from 'Components/Footer'

import { ReactComponent as LogoWhite } from 'Assets/icons/logo_white.svg';
import { ReactComponent as DownArrow } from 'Assets/icons/downsmall.svg';
import Changelanguage from 'Components/Hooks/changeLanguage';
// import { ReactComponent as IconHome } from 'Assets/icons/service_home_blue.svg';
// import { ReactComponent as IconShield } from 'Assets/icons/service_shield_blue.svg';
// import { ReactComponent as IconManage } from 'Assets/icons/service_manage_blue.svg';



export const MobileMenu = (props) => {

    const {t} = useTranslation()
    const { open, setOpen } = props

    const IconClose = () => <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>;


    const {ServiceMenuList} = useServiceMenuList()

    const {initLanguage} = Changelanguage()

    useEffect(() => {
        initLanguage()
    }, [])

    return (

        <div className={`${open ? 'translate-x-0' : 'translate-x-full'} transition-transform fixed z-50  top-0 right-0 h-full w-full bg-dark-blue-grad overflow-y-scroll`}>
            <div className="container mx-auto mobile-menu-wrapper  p-7">

                <div className='flex justify-between items-center text-white'>
                    <Link to="/">
                        <LogoWhite height={"60px"} width="120px" />
                    </Link>
                    <div onClick={() => setOpen(false)} className="cursor-pointer">
                        <IconClose />
                    </div>
                </div>
                <div className="Menu text-white pt-16 ">
                    <Accordion id={1}
                        header={<>
                            <div className="flex items-center font-bold cursor-pointer">
                                <div className='py-5'>
                                <Trans i18nKey={"About us"}>About&nbsp;us&nbsp;</Trans>
                                  
                                </div>&nbsp;
                                <DownArrow />
                            </div>
                        </>}
                        body={<>
                            <div className=''>
                                {
                                    AboutMenuList.map(link =>
                                        <div key={link.id} className='py-5'>
                                            <Link to={link.to} className="">
                                                {t(link.label)}
                                            </Link >
                                        </div>
                                    )
                                }
                            </div>
                        </>} />
                    <Accordion id={2}
                        header={<>
                            <div className="flex items-center font-bold cursor-pointer">
                                <div className='py-5 '>
                                <Trans i18nKey={"Services"}>Services&nbsp;</Trans>&nbsp;
                                </div>
                                <DownArrow />
                            </div>
                        </>}
                        body={<>
                            {
                                ServiceMenuList.map(item =>
                                    <ServiceRenderMenuList key={item.title} item={item} className="" />
                                )
                            }
                        </>} />
                    <div className='py-5 font-bold'> <Link to="/indices"> {t("Indices")} </Link> </div>
                    <div className='py-5 font-bold'> <Link to="/protfolio"> {t("Portfolio")} </Link> </div>
                    <div className='py-5 font-bold'> <Link to="/news"> {t("News")} </Link> </div>
                    {/* <div className='py-5 font-bold'> <Link to="/contacts"> contacts </Link> </div> */}

                </div>
                <div className="py-12">
                    {
                        AddressDataArray(AddressData).map(item => 
                        <div className='flex py-3' key={item.label}>
                            <div className='text-blue-400'> {item.icon} </div>
                            <div className='text-xs font-bold ml-5 text-white w-44'> {item.label} </div>
                        </div>)
                    }
                </div>
                <div className="py-8 flex text-blue-400">
                    {socialMedia.map(link =>
                        <a href={link.link} target="_blank" className='mr-4'>
                            <div className="bg-dark-blue rounded-full hover:bg-white ">
                                <link.icon className='text-white-blue-hover' width={30} height={30} />
                            </div>
                        </a>
                    )}
                </div>
            </div>

        </div>


    );
};


export const Accordion = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div>
            <AnimatePresence>
                <motion.div
                    key={props?.id}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div >
                        {props?.header}
                    </motion.div>
                </motion.div>

                {isOpen && (
                    <motion.div
                        key={props?.id}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{ opacity: 0 }}
                    >
                        {props?.body}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
