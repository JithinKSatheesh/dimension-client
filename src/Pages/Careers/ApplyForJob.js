import React, { useState } from 'react';
import { IconDownload } from './Content';
import { useDropzone } from 'react-dropzone';

import { ReactComponent as IconPdf } from 'Assets/icons/pdfIcon.svg'

import { GetFunctions } from 'API/fetch'

import { PopUpContent } from 'Components/PopUpContent';
import { RenderMultipleTextFields } from 'Components/RenderMultipleTextFields';

export const ApplyForJob = (props) => {

    const {popup} = props

    const fileMaxLength = 4000000

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

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
        phone: ''
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
        {
            name: 'phone',
            label: "Phone Number",
        },
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

        return (<div key={file.path} className="flex text-xs bg-blue-400/40 backdrop-blur-xl  rounded-xl mt-2 p-2">
            <div> <IconPdf className='mr-4' /> </div>
            <div className='pr-2 truncate'>
                {file.path}
                <br />
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

            const {position, job_type} = popup?.item?.attributes

            const payload = {
                ...inputVal,
                position,
                job_type
            }

            const formData = new FormData()
            Object.keys(payload).map(key => formData.append(key, payload[key]))

            for (const file of acceptedFiles) {
                formData.append('files', file, file.name);
            }

            const res = await GetFunctions?.postMailCareer(null, null, formData)
            const data = res?.data?.data
            if (data) {
                setSuccess(true)
            }

        } catch (ex) {
            console.log(ex)
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

        <div className="py-3 text-xs"> Upload CV </div>
        {/* <FileUploadContainer /> */}
        {/* ============================================== */}
        <div
            {...getRootProps({ className: 'dropzone' })}
            className='w-full h-24 text-white rounded-xl px-5 bg-white/30 backdrop-blur-xl  '

        >
            <input
                {...getInputProps()}
            />
            <div className="p-4">

                <div className='text-center flex justify-center pb-4'><IconDownload /></div>
                <div className='text-center text-xs'>
                    Drag 'n' drop some files here, or click to select files
                </div>
            </div>
        </div>
        {/* ============================================== */}
        {files}
        {fileRejectionItems}

    </PopUpContent>
    </>);
};


