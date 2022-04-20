import React, { useState } from 'react';

import { GetFunctions } from 'API/fetch'

import { PopUpContent } from 'Components/PopUpContent';
import { RenderMultipleTextFields } from 'Components/RenderMultipleTextFields';


export const FaqPopUp = (props) => {

    // const { popup } = props;


    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)


    const [inputVal, setInuptVal] = useState({
        name: '',
        email: '',
        title: '',
        details: ''
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
            const res = await GetFunctions?.postMailUserQuestion(null, null, payload)
            const data = res?.data?.data
            if (data) {
                setSuccess(true)
            }

        } catch (ex) {

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
                    What are you interested in?
                </div>
                <textarea
                    name='details'
                    value={inputVal?.details}
                    onChange={handleChange}
                    className='w-full h-20 text-white rounded-xl px-5 py-2 bg-white/30 backdrop-blur-xl  '
                />
            </PopUpContent>
        </>

    );
};
