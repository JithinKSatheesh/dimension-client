import React, { useState, useRef } from 'react';
import * as yup from 'yup';

import { IconDownload } from './Content';
import { useDropzone } from 'react-dropzone';

import { ReactComponent as IconPdf } from 'Assets/icons/pdfIcon.svg'

import { GetFunctions } from 'API/fetch'

import { PopUpContent } from 'Components/PopUpContent';
import { RenderMultipleTextFields } from 'Components/RenderMultipleTextFields';

// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
// import CustomInput  from './CustomInput';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



export const ApplyForJob = (props) => {

    const { popup } = props

    const fileMaxLength = 4000000

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({})

    const [phone, setPhone] = useState('374')
    const ref = useRef('');

    const handleChange = (e) => {
        const { name, value } = e.target
        setInuptVal(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [inputVal, setInuptVal] = useState({
        name: '',
        email: '',
        // phone: ''
    });

    const Schema = yup.object({
        phone: yup.string().required("Phone number is required field")
            .matches(/^[0-9]+$/, "Invalid phone number")
            .min(7, 'Invalid phone number')
            .max(15, 'Invalid phone number'),
        email: yup.string().required("Email is a required field").email("Invalid email"),
        name: yup.string().required("Name is a required field"),
        file: yup.mixed().required('File is required'),

    });


    const _inputFields = [
        {
            name: 'name',
            label: "Full Name",
        },
        {
            name: 'email',
            label: "Email Address",
        },
        // {
        //     name: 'phone',
        //     label: "Phone Number",
        // },
    ]

    const fileLengthValidator = (file) => {
        if (file.size > fileMaxLength) {
            return {
                code: "file-too-large",
                message: `File should be less than 4 MB`
            };
        }

        return null
    }

    const { acceptedFiles, getRootProps, getInputProps, fileRejections } = useDropzone({
        multiple: false,
        accept: '.pdf,.png,.jpeg,.jpg',
        validator: fileLengthValidator
    });

    const files = acceptedFiles.map(file => {
        const fileSize = file.size
        const sizeDisplay = fileSize < 10000000 ? `${(fileSize / 1000).toFixed(0)} KB` : `${(fileSize / 1000000).toFixed(1)} MB`

        return (<div key={file.path} className=" text-xs bg-white-400/40 backdrop-blur-xl mx-auto  rounded-xl p-4 pt-1 w-fit">
            <div className="text-right  text-white">x</div>
            <div> <IconPdf className='mr-4' /> </div>
            <div className='pr-2 pt-2 truncate'>
                {file.path}
                {/* <br /> */}
                ( {sizeDisplay} )
            </div>
        </div>
        )
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        return (<div key={file.path} className=" text-xs  rounded-xl mt-2 p-2">
            <div className='text-red-500 text-center'>
                {errors.map(e => (
                    <div key={e.code}>{e.message}</div>
                ))}
            </div>
        </div>
        )
    });



    const UploadFiles = async () => {

        setLoading(true)
        try {

            const { position, job_type } = popup?.item

            const payload = {
                ...inputVal,
                phone,
                position,
                job_type
            }

            
            const formData = new FormData()
            Object.keys(payload).map(key => formData.append(key, payload[key]))
            
            for (const file of acceptedFiles) {
                formData.append('files', file, file.name);
            }
            
            await Schema.validate({...payload, file : acceptedFiles[0]})

            const res = await GetFunctions?.postMailCareer(null, null, formData)
            const data = res?.data?.data
            if (data) {
                setSuccess(true)
            }

        } catch (ex) {
            console.log(ex)
            setError({ message: ex?.errors ?? 'Something went wrong' })
        }
        setLoading(false)
    }






    return (<><PopUpContent loading={loading} success={success} action={UploadFiles}>
        <RenderMultipleTextFields
            inputFields={_inputFields}
            inputVal={inputVal}
            handleChange={handleChange}
            loading={loading}
        />

        <div className="relative ">
            <div className="py-3 text-xs"> Phone </div>
            <PhoneInput
                country={'am'}
                value={phone}
                onChange={e => setPhone(e)}
                placeholder=""
                inputClass={"h-12 bg-red-300 text-black w-full"}
                searchClass={""}
                inputStyle={{ width: '100%', backgroundColor: 'transparent', border: 'none', height: '48px', color: 'white' }}
                // buttonStyle={{backgroundColor : 'transparent', border : 'none', }}
                containerClass={"bg-white/30 backdrop-blur-xl w-full  rounded-xl h-12 absolute z-30"}
                dropdownStyle={{ zIndex: 50, color: 'black', backdropFilter: 'blur(90%)' }}
                buttonClass={"blured-btn"}
                dropdownClass={"blured-bg"}
            />
        </div>


        <div className="py-3 text-xs"> Upload CV </div>
        {/* <FileUploadContainer /> */}
        {/* ============================================== */}
        <div
            {...getRootProps({ className: 'dropzone ' })}
            className='w-full p-3 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  '

        >

            <input
                {...getInputProps()}
            />
            <div className="">
                {files.length > 0 ?
                    files : <>
                        <div className="border-2 rounded-xl border-dashed p-3">
                            <div className='text-center flex justify-center pb-4'><IconDownload /></div>
                            <div className='text-center text-xs'>
                                Upload files
                            </div>
                        </div>
                    </>
                }
            </div>

        </div>
        {/* ============================================== */}
        {fileRejectionItems}
        <div className="text-xs text-red-500 pt-2 text-center">
            {error?.message}
        </div>

    </PopUpContent>
    </>);
};


