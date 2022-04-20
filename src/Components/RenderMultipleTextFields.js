import React from 'react';
import { RenderTextFields } from './RenderTextFields';

export const RenderMultipleTextFields = (props) => {

    const { inputFields, handleChange, inputVal, loading } = props;

    return (
        <>
            {inputFields.map(field => {
                return (
                    <RenderTextFields
                        key={field?.name}
                        value={inputVal?.[field?.name]}
                        handleChange={handleChange}
                        name={field?.name}
                        label={field?.label}
                        loading={loading} />
                );
            })}
        </>
    );
};
