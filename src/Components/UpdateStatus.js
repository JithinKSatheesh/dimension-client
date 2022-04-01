import React from 'react';
import { ReactComponent as Logo2 } from 'Assets/icons/logo_2.svg';
import { ReactComponent as Logo3 } from 'Assets/icons/logo_3.svg';


export const UpdateStatus = (props) => {

    return (
        <div className={props?.className}>
            <div className="flex justify-center xl:justify-end items-center">
                <div className="text-sm  mr-4">
                    updated: {props?.date}
                </div>
                {props?.type === "dark" ? <Logo2 /> : <Logo3 />}
            </div>
        </div>

    );
};
