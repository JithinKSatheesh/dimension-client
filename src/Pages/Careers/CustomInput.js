import React, { forwardRef } from "react";

const CustomInput = (props, ref) => {

    const { value, onChange } = props;
    console.log(props)
    return (
        <input
            // {...props}
            onChange={onChange}
            value={value}
            inputRef={ref}
            country="US"
            className="w-full h-12 text-white rounded-xl px-5 bg-transparent " />
    );
};

export default forwardRef(CustomInput);
