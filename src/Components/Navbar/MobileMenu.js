import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

import {MenuContent} from './ServiceDropdown'

import { ReactComponent as LogoWhite } from 'Assets/icons/logo_white.svg';
import { ReactComponent as DownArrow } from 'Assets/icons/downsmall.svg';
import { ReactComponent as IconHome } from 'Assets/icons/service_home_blue.svg';
import { ReactComponent as IconShield } from 'Assets/icons/service_shield_blue.svg';
import { ReactComponent as IconManage } from 'Assets/icons/service_manage_blue.svg';



export const MobileMenu = (props) => {

    const {open, setOpen} = props

    const IconClose = () => <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>;



    return (
        
            <div className={`${open ? 'translate-x-0' : 'translate-x-full'} transition-transform fixed z-50  top-0 right-0 h-full w-full bg-dark-blue-grad p-7 overflow-y-scroll`}>
                <div className="container mx-auto">

                <div className='flex justify-between items-center text-white'>
                    <Link to="/">
                        <LogoWhite height={"60px"} width="120px" />
                    </Link>
                    <div onClick={() => setOpen(false)} className="cursor-pointer">
                        <IconClose  />
                    </div>
                </div>
                <div className="Menu text-white pt-16 ">
                    <Accordion id={1}
                        header={<>
                            <div className="flex items-center font-bold cursor-pointer">
                                <div className='py-5'>
                                    About&nbsp;us&nbsp;&nbsp;
                                </div>
                                <DownArrow />
                            </div>
                        </>}
                        body={<>
                            <div className=''>
                            <div className='py-5'><Link to="/about#about" className="">
                                About Dimension
                            </Link ></div>
                            <div className='py-5'><Link to="/about#corporate-structure" className="">
                                Corporate structure
                            </Link ></div>
                            <div className='py-5'><Link to="/about#ownership" className="">
                            Significant Shareholders
                            </Link ></div>
                            <div className='py-5'><Link to="/about#team" className="">
                            Teammates
                            </Link ></div>
                            <div className='py-5'><Link to="/about#mission" className="">
                            Mission and vision
                            </Link ></div>
                            <div className='py-5'><Link to="/about#statuory-documents" className="">
                            Statuory documents
                            </Link ></div>
                                
                            </div>
                        </>} />
                    <Accordion id={2}
                        header={<>
                            <div className="flex items-center font-bold cursor-pointer">
                                <div className='py-5 '>
                                    Services&nbsp;&nbsp;
                                </div>
                                <DownArrow />
                            </div>
                        </>}
                        body={<>
                            <div className="bg-menu-blue-light pt-7">
                                <Link to={'/services/capital-market'}>
                                    <MenuContent
                                        icon={<IconHome />}
                                        title={<>Capital Markets <br /> Advisory</>}
                                        desc="Capital Markets Advisory is a key business area of Dimension and an integral part of its ability to achieve the Mission and Vision of the company." />
                                </Link>
                            </div>
                            <div className="bg-menu-blue-light pt-7">
                                <Link to={'/services/investment-security'}>
                                    <MenuContent
                                        icon={<IconShield />}
                                        title="Investment Securities Services"
                                        desc="We have years of experience in executing large and complex corporate securities transactions in the Armenian capital market and beyond. By upholding our ." />
                                </Link>
                            </div>
                            <div className="bg-menu-blue-light pt-7">
                            <Link to={'/services/asset-management'}>
                                <MenuContent
                                    icon={<IconManage />}
                                    title={<>Asset <br /> Management</>}
                                    desc="In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds." />
                                    </Link>
                            </div>
                        </>} />
                    <div className='py-5 font-bold'> <Link to="/indices"> Indices </Link> </div>
                    <div className='py-5 font-bold'> <Link to="/protfolio"> Portfolio </Link> </div>
                    <div className='py-5 font-bold'> <Link to="/news"> news </Link> </div>
                    <div className='py-5 font-bold'> <Link to="/contacts"> contacts </Link> </div>

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
  