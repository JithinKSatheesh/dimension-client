import React from 'react';

export const RenderTextFields = (props) => {

    const { handleChange, name, label, value, loading, type } = props;

    return (
        <>
            <div className="py-3 text-xs"> {label} </div>
            <input
                onChange={handleChange}
                value={value}
                name={name}
                disabled={loading}
                type={type}
                className='w-full h-12 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  ' />
        </>
    );
};
