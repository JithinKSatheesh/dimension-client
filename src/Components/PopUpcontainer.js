import React from 'react';
import Outsideclick from 'Components/Hooks/OutsideClick';

export const PopUpcontainer = (props) => {

    return (
        <>
            {props?.open ?
                <div
                    className="fixed left-0 top-0 w-full h-full bg-black/80 z-50">
                    <div className="flex justify-center h-full items-center">
                        <div className="absolute  bg-dark-blue-grad rounded-xl ">
                            <Outsideclick onOutsideClick={props.onClose}>
                                <div className="font-bold p-5 text-white bg-dark-blue-grad rounded-t-xl">
                                    {props?.heading}
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
