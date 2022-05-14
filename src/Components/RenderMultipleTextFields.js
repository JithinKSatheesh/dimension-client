import React from 'react';
import { useTranslation } from 'react-i18next'
import { RenderTextFields } from './RenderTextFields';

export const RenderMultipleTextFields = (props) => {
    
    const {t} = useTranslation()
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
                        label={t(field?.label)}
                        loading={loading} />
                );
            })}
        </>
    );
};
