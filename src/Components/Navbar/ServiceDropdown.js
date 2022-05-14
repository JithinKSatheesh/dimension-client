import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ReactComponent as IconRightArrow } from 'Assets/icons/ArrowRight.svg';
import useServiceMenuList from './ServiceMenuList';
import MarkdownView from 'react-showdown';


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
    
    const { ServiceMenuList } = useServiceMenuList()


    return (
        <div style={{top : '95px'}}  className="absolute left-0 w-full normal-case z-30">
            <motion.div
                className=" bg-dark-blue-grad"
                initial="exit"
                animate={props?.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
            {props?.isHover && 
                <div className="w-full bg-dark-blue-grad">
                    <div className="container  mx-auto">
                        <div className="grid grid-cols-1 xl:grid-cols-3">
                            {
                                ServiceMenuList.map(item => 
                                    <ServiceRenderMenuList 
                                        key={item.title} 
                                        innerClassName="px-14 xl:px-8 2xl:px-14"
                                        item={item} />
                                    )
                            }

                        </div>
                    </div>
                </div>
                }
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
                <div className="text-lg lg:text-base 3xl:text-xl font-semibold text-white mb-3">
                    {props.title}
                </div>
                <div className=" text-xs xl:text-[11px] 2xl:text-xs text-white mb-7">
                    {props.desc}
                </div>
                <div className="flex text-xs xl:text-[11px] 2xl:text-xs items-center  text-white mb-5">
                    {/* <Link to="/"> Read more </Link>
                    <div className="ml-4">
                        <IconRightArrow height={"12px"} />
                    </div> */}
                    <ul className='list-disc'>
                        {props?.list?.map(item => <li className='pb-3 ml-4'>
                            
                            <MarkdownView markdown={(`${item}`)?.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g," ")} /> 
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