import React from 'react';
import { ReactComponent as Logo2 } from 'Assets/icons/logo_2.svg';
import { ReactComponent as Logo3 } from 'Assets/icons/logo_3.svg';


export const UpdateStatus = (props) => {

    return (
        <div className={props?.className}>
            <div className="text-center text-blue py-4 text-xs bg-blue-light">
                    This page was last updated : {props?.date}
                {/* {props?.type === "dark" ? <Logo2 /> : <Logo3 />} */}
            </div>
        </div>

    );
};
