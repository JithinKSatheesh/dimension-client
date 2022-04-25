import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AboutMenuList } from './AboutMenuList';

export const RenderMenuLinks = ({ MenuList }) => {

    return (<>
        {MenuList.map(link =>
            <Link key={link.id} to={link.to} className="lg:text-xs 2xl:text-base grow bg-menu-blue-light text-white py-7 text-center">
                {link.label}
            </Link >)}
    </>)
}


export const AboutDropdown = (props) => {

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.5
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            y: 0,
            rotateX: -15,
            transition: {
                duration: 0.5
            },
            transitionEnd: {
                display: "none"
            }
        }
    };

    
    return (
        <div style={{top : '99px'}} className="absolute left-0   w-full normal-case z-30">
            <motion.div
                className=" bg-dark-blue-grad"
                initial="exit"
                animate={props?.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
                <div className="w-full">
                    <div className="container  mx-auto">
                        <div className="flex justify-between">
                            <RenderMenuLinks MenuList={AboutMenuList} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
