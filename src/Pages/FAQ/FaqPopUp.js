import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { GetFunctions } from 'API/fetch'

import { PopUpContent } from 'Components/PopUpContent';
import { RenderMultipleTextFields } from 'Components/RenderMultipleTextFields';


export const FaqPopUp = (props) => {

    // const { popup } = props;

    const {t} = useTranslation()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const [error, setError] = useState({})
    

    const [inputVal, setInuptVal] = useState({
        name: '',
        email: '',
        title: '',
        details: ''
    });

    const Schema = yup.object({
        details: yup.string().required("Details is a required field"),
        title: yup.string().required("Title is a required field"),
        email: yup.string().required("Email is a required field").email("Invalid email"),
        name: yup.string().required("Name is a required field"),

    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setInuptVal(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const _inputFields = [
        {
            name: 'name',
            label: "Full Name",
        },
        {
            name: 'email',
            label: "Email Address",
        },
        {
            name: 'title',
            label: "Subject",
        },
    ]

    const sendRequest = async () => {

        setLoading(true)
        try {

            const payload = {
                ...inputVal,
            }
            await Schema.validate(inputVal)
            const res = await GetFunctions?.postMailUserQuestion(null, null, payload)
            const data = res?.data?.data
            if (data) {
                setSuccess(true)
            }

        } catch (ex) {
            setError({ message: ex?.errors ?? 'Something went wrong' })
        }
        setLoading(false)
    }

    return (
        <>
            <PopUpContent 
                loading={loading} 
                success={success} 
                // buttonLabel={"Send"}
                action={sendRequest} >
                {/* {console.log(inputVal)} */}
                <RenderMultipleTextFields
                    inputFields={_inputFields}
                    inputVal={inputVal}
                    handleChange={handleChange}
                    loading={loading}
                />
                <div className="py-3 text-xs">
                    {t("What are you interested in?")}
                </div>
                <textarea
                    name='details'
                    value={inputVal?.details}
                    onChange={handleChange}
                    className='w-full h-20 text-white rounded-xl px-5 py-2 bg-white/30 backdrop-blur-xl  '
                />
                 <div className="text-xs text-red-500 pt-2 text-center">
                    {error?.message}
                </div>
            </PopUpContent>
        </>

    );
};
