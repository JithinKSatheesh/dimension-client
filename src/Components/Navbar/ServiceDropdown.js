import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ReactComponent as IconRightArrow } from 'Assets/icons/ArrowRight.svg';
import { ReactComponent as IconHome } from 'Assets/icons/service_home_blue.svg';
import { ReactComponent as IconShield } from 'Assets/icons/service_shield_blue.svg';
import { ReactComponent as IconManage } from 'Assets/icons/service_manage_blue.svg';

export const ServiceDropdown = (props) => {

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
                    <div className=" text-xs text-white mb-7">
                        {props.desc}
                    </div>
                    <div className="flex text-xs items-center font-bold text-white mb-7">
                        <Link to="/"> Read more </Link>
                        <div className="ml-4">
                            <IconRightArrow height={"12px"} />
                        </div>
                    </div>

                </div>

            </div>
        );
    };


    return (
        <div style={{top : '104px'}}  className="absolute left-0 w-full normal-case z-30">
            <motion.div
                className=" bg-dark-blue-grad"
                initial="exit"
                animate={props?.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
                <div className="w-full">
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-1 xl:grid-cols-3">
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


                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
