import React from 'react';

export const ApplyButton = (props) => {

    const {label = "Submit"} = props
    return (
        <div
            onClick={props?.onClick}
            className="mx-auto xl:ml-auto xl:mr-0 mt-5 border border-blue-light rounded-xl py-2 px-5 cursor-pointer text-center  font-bold text-white">
            {label}
        </div>
    );
};
