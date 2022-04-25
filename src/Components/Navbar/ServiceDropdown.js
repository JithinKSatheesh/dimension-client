import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ReactComponent as IconRightArrow } from 'Assets/icons/ArrowRight.svg';
import { ServiceMenuList } from './ServiceMenuList';


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
        <div style={{top : '99px'}}  className="absolute left-0 w-full normal-case z-30">
            <motion.div
                className=" bg-dark-blue-grad"
                initial="exit"
                animate={props?.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
                <div className="w-full">
                    <div className="container  mx-auto">
                        <div className="grid grid-cols-1 xl:grid-cols-3">
                            {
                                ServiceMenuList.map(item => 
                                    <ServiceRenderMenuList 
                                        key={item.title} 
                                        innerClassName="px-14"
                                        item={item} />
                                    )
                            }
                            {/* <div className="bg-menu-blue-light pt-7">
                                <Link to={'/services/capital-market'}>
                                    <MenuContent
                                        className=" px-14"
                                        icon={<IconHome />}
                                        title={<>Capital Markets <br /> Advisory</>}
                                        desc="Capital Markets Advisory is a key business area of Dimension and an integral part of its ability to achieve the Mission and Vision of the company." />
                                </Link>
                            </div>
                            <div className="bg-menu-blue-light pt-7">
                            <Link to={'/services/investment-security'}>
                                <MenuContent
                                    className=" px-14"
                                    icon={<IconShield />}
                                    title="Investment Securities Services"
                                    desc="We have years of experience in executing large and complex corporate securities transactions in the Armenian capital market and beyond. By upholding our ." />
                            </Link>
                            </div>
                            <div className="bg-menu-blue-light pt-7">
                            <Link to={'/services/asset-management'}>
                                <MenuContent
                                    className=" px-14"
                                    icon={<IconManage />}
                                    title={<>Asset <br /> Management</>}
                                    desc="In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds." />
                                    </Link>
                            </div> */}


                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const MenuContent = (props) => {
    return (
        <div className={`flex py-5 ${props?.className}`}>
            <div className="icon mr-4">
                {props.icon}
            </div>
            <div>
                <div className="text-lg lg:text-base 2xl:text-xl font-semibold text-white mb-3">
                    {props.title}
                </div>
                <div className=" text-xs text-white mb-7">
                    {props.desc}
                </div>
                <div className="flex text-xs items-center  text-white mb-5">
                    {/* <Link to="/"> Read more </Link>
                    <div className="ml-4">
                        <IconRightArrow height={"12px"} />
                    </div> */}
                    <ul className='list-disc'>
                        {props?.list?.map(item => <li className='pb-3 ml-4'>
                            {item}
                        </li>)}
                    </ul>
                </div>

            </div>

        </div>
    );
};


export const ServiceRenderMenuList = (props) => {

    const {innerClassName} = props
    const {to, icon, title, desc, list} = props.item

    return (
        <div className="bg-menu-blue-light pt-7">
            <Link to={to}>
                <MenuContent
                    className={innerClassName}
                    icon={icon}
                    title={title}
                    desc={desc}
                    list={list}
                    />
            </Link>
        </div>
    )
}