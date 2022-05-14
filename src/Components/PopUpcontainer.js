import React from 'react';
import Outsideclick from 'Components/Hooks/OutsideClick';
import { useTranslation } from 'react-i18next'

const IconClose = () => <svg fill='currentColor' width="16" height="16" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>;

export const PopUpcontainer = (props) => {
    
    const {t} = useTranslation()

    return (
        <>
            {props?.open ?
                <div
                    className="fixed left-0 top-0 w-full h-full bg-black/80 z-50">
                    <div className="flex justify-center h-full items-center">
                        <div className="absolute  bg-dark-blue-grad rounded-xl w-full md:w-96 ">
                            <Outsideclick onOutsideClick={props.onClose}>
                                <div className="font-bold p-5 text-white bg-dark-blue-grad rounded-t-xl">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {t(props?.heading)}
                                        </div>
                                        <div className='cursor-pointer' onClick={props.onClose}>
                                            <IconClose />
                                        </div>
                                    </div>
                                </div>
                                <div className="popup-wrapper-1 h-full w-full rounded-b-xl  p-5">
                                    {props?.children}
                                </div>
                            </Outsideclick>
                        </div>
                    </div>

                </div>
                :
                null}

        </>
    );
};

export const PopUpcontainer2 = (props) => {

    return (
        <>
            {props?.open ?
                <div
                    className="fixed left-0 top-0 w-full h-full bg-black/80 z-50 overflow-scroll">
                    <div className="flex justify-center h-screen  mt-32">
                        <div  className=" popup-wrapper-2  bg-dark-blue-grad rounded-xl w-fit h-fit ">
                            <Outsideclick onOutsideClick={props.onClose}>
                                <div className="font-bold p-5 text-white rounded-t-xl">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            
                                        </div>
                                        <div className='cursor-pointer' onClick={props.onClose}>
                                            <IconClose />
                                        </div>
                                    </div>
                                </div>
                                <div className=" h-full w-full rounded-b-xl  p-5 ">
                                    {props?.children}
                                </div>
                            </Outsideclick>
                        </div>
                    </div>

                </div>
                :
                null}

        </>
    );
};

export const PopUpcontainerBareBone = (props) => {

    return (
        <>
            {props?.open ?
                <div
                    className="fixed left-0 top-0 w-full h-full bg-black/80 z-50 overflow-scroll ">
                    <div className="flex justify-center h-screen py-14">
                        <div style={{height : '550px'}} className="mb-24  rounded-xl w-fit  pb-16">
                            <Outsideclick onOutsideClick={props.onClose}>
                                <div>
                                    {props?.children}
                                </div>
                            </Outsideclick>
                        </div>
                    </div>

                </div>
                :
                null}

        </>
    );
};
