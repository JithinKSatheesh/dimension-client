import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as IconDown } from 'Assets/icons/circle_down.svg';


export const Accordion = (props) => {

    const { id, expanded, setExpanded, className } = props;

    const isOpen = id === expanded;

    return (
        <motion.div
            key={id}
            >
            <div
                className={` ${className} p-8  rounded-xl text-white flex justify-between items-start xl:items-center cursor-pointer`}
                onClick={() => setExpanded(isOpen ? false : id)}
            >
                {props?.headerElement ? 
                    <div className="flex-grow">
                        {props?.headerElement}
                    </div>
                    :
                    <div className=" font-bold">
                        {props?.title}
                    </div>
                }
                <IconDown className={`${isOpen && 'rotate-180'}`} />
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key={id}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <AccordionContent>
                            {props.children}
                        </AccordionContent>
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


export const AccordionContent = (props) => {

    return (
        <motion.div 
            variants={{ collapsed: { opacity : 0 }, open: { opacity : 1 } }}
            transition={{ duration: 0.8 }}
            className='p-8 bg-blue-light mt-3 rounded-xl text-sm text-dark-blue'>
            {props.children}
        </motion.div>
    )
}
