import React, {useState} from 'react';

import { GetFunctions } from 'API/fetch'

import { PopUpContent } from 'Components/PopUpContent';
import { RenderMultipleTextFields } from 'Components/RenderMultipleTextFields';


export const MarketResearchPopup = (props) => {

    const {  popup } = props;


    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)


    const [inputVal, setInuptVal] = useState({
        name: '',
        email: '',
        phone: ''
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
            const res = await GetFunctions?.postMailMarketResearch(null, null, payload)
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
            <PopUpContent loading={loading} success={success} action={UploadFiles}>
                {/* {console.log(inputVal)} */}
                <RenderMultipleTextFields
                    inputFields={_inputFields}
                    inputVal={inputVal}
                    handleChange={handleChange}
                    loading={loading}
                    />
            </PopUpContent>
                    </>

    );
};
