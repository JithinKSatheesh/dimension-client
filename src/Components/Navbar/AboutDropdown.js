import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

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
            y: -10,
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
        <div style={{top : '104px'}} className="absolute left-0   w-full normal-case z-30">
            <motion.div
                className=" bg-dark-blue-grad"
                initial="exit"
                animate={props?.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
                <div className="w-full">
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-6">
                            <Link to="/about#about" className="bg-menu-blue-light text-white py-7 text-center">
                                About Dimension
                            </Link >
                            <Link to="/about#corporate-structure" className="bg-menu-blue-light text-white py-7 text-center">
                                Corporate structure
                            </Link >
                            <Link to="/about#ownership" className="bg-menu-blue-light text-white py-7 text-center">
                            Significant Shareholders
                            </Link >
                            <Link to="/about#team" className="bg-menu-blue-light text-white py-7 text-center">
                            Teammates
                            </Link >
                            <Link to="/about#mission" className="bg-menu-blue-light text-white py-7 text-center">
                            Mission and vision
                            </Link >
                            <Link to="/about#statuory-documents" className="bg-menu-blue-light text-white py-7 text-center">
                            Statuory documents
                            </Link >


                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
