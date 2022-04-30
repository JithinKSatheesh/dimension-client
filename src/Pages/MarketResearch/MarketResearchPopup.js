import React, {useState} from 'react';
import * as yup from 'yup';

import { GetFunctions } from 'API/fetch'

import { PopUpContent } from 'Components/PopUpContent';
import { RenderMultipleTextFields } from 'Components/RenderMultipleTextFields';


export const MarketResearchPopup = (props) => {

    const {  popup } = props;


    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({})


    const [inputVal, setInuptVal] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const Schema = yup.object({
        name: yup.string().required("Name is a required field"),
        email: yup.string().required("Email is a required field").email("Invalid email"),

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
    ]

    const UploadFiles = async () => {

        setLoading(true)
        try {

            const payload = {
                ...inputVal,
                item_name : popup?.item?.title,
                item_description : popup?.item?.description,
            }
            await Schema.validate(inputVal)
            const res = await GetFunctions?.postMailMarketResearch(null, null, payload)
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
            <PopUpContent loading={loading} success={success} action={UploadFiles}>
                {/* {console.log(inputVal)} */}
                <RenderMultipleTextFields
                    inputFields={_inputFields}
                    inputVal={inputVal}
                    handleChange={handleChange}
                    loading={loading}
                    />
                <div className="text-xs text-red-500 pt-2 text-center">
                    {error?.message}
                </div>
            </PopUpContent>
                    </>

    );
};
