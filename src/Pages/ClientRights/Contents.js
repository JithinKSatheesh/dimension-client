import React from 'react'
import { useTranslation } from 'react-i18next';

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import { ReactComponent as IconGlobe } from 'Assets/icons/lang.svg';
import { ReactComponent as IconPerson } from 'Assets/icons/person.svg';
import { ReactComponent as IconPrinter } from 'Assets/icons/printer.svg';
import { ReactComponent as MailIcon } from 'Assets/icons/mail.svg'
import { ReactComponent as PhoneIcon } from 'Assets/icons/phone.svg'
import { ReactComponent as ClockIcon } from 'Assets/icons/clock.svg'
import { ReactComponent as IconLocation } from 'Assets/icons/location.svg'
import {ReactComponent as Logo3} from 'Assets/icons/logo_3.svg'


// ** components
import { DownloadDocumentButton } from 'Components/Buttons'
import { UpdateStatus } from 'Components/UpdateStatus';
import { formatDate } from 'Utils/time';
import MarkdownView from 'react-showdown';

export default function Contents(props) {

    const {t} = useTranslation()
    const { getClientRights } = props
   
    // const data = getClientRights ?? {}

    const _date = getClientRights?.updatedAt
    
    const pdf_url = getClientRights?.regilation_documents_pdf?.url ?? ''
    const _regilation_documents_pdf = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''
    // console.log(getClientRights)

    

    return (
        <>
            <div className="client-rights-wrapper-2">
                <div className="container mx-auto ">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-2xl 2xl:text-3xl  pb-24">
                            <SlideLeft>
                                <MarkdownView markdown={getClientRights?.client_rights_heading_2} />
                            {/* Դուք կարող եք */}
                            </SlideLeft>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full  xl:w-7/12 pb-7 ">
                                <div className="flex h-full  flex-col justify-between ">
                                    <div className="text-sm text-dark-blue max-w-2xl xl:max-w-[600px] ">
                                        <SlideBottom>
                                        <MarkdownView markdown={getClientRights?.client_rights_description_2} />
                                        
                                        {/* ներկայացնելու ձեր հետ կնքվող պայմանագրից բխող պահանջները ֆինանսական համակարգի հաշտարարին, որպես «Դայմենշն» ՓԲԸ-ի ֆիզիկական անձ Հաճախորդ: */}
                                        </SlideBottom>
                                    </div>
                                    <div className='hidden xl:block text-sm '>
                                        <SlideTop>
                                            {
                                                _regilation_documents_pdf &&
                                                <DownloadDocumentButton
                                                    onClick={() => window.open(_regilation_documents_pdf, '_blank', 'noopener,noreferrer')}
                                                    className="w-fit pr-14" > {t("Regulation documents")} </DownloadDocumentButton>
                                            }
                                        </SlideTop>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-[400px] 3xl:w-[500px] pb-7">
                                <div className="text-sm text-dark-blue ">
                                    <SlideBottom>
                                    {t("Office of the financical System Mediator")}:
                                    
                                    </SlideBottom>
                                </div>
                                <div className="py-5 text-dark-blue">
                                    <SlideBottom>
                                    <AddressRow
                                        title={`${t("Mediator")}:`}
                                        value={getClientRights?.mediator_name}
                                        icon={<IconPerson />}
                                    />
                                    <AddressRow
                                        title={`${t("Address")}:`}
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_address}}  />}
                                        icon={<IconLocation />}
                                    />
                                    <AddressRow
                                        title={`${t("Phone")}:`}
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_phone}}  />}
                                        icon={<PhoneIcon />}
                                    />
                                    <AddressRow
                                        title={`${t("Fax")}:`}
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_fax}}  />}
                                        icon={<IconPrinter />}
                                    />
                                    <AddressRow
                                        title={`${t("E-mail")}:`}
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_email}}  />}
                                        icon={<MailIcon />}
                                    />
                                    <AddressRow
                                        title={`${t("Web")}:`}
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_website}}  />}
                                        icon={<IconGlobe />}
                                    />
                                    </SlideBottom>
                                </div>
                              
                                <div className='block xl:hidden text-sm'>
                                    <SlideTop>
                                        {_regilation_documents_pdf &&
                                            <DownloadDocumentButton
                                                onClick={() => window.open(_regilation_documents_pdf, '_blank', 'noopener,noreferrer')}
                                                className="w-fit pr-14" >
                                                {t("Regulation documents")}
                                            </DownloadDocumentButton>
                                        }
                                        </SlideTop>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <UpdateStatus   date={formatDate(_date)} />

        </>
    )
}

const AddressRow = (props) => {

    return (
        <div >
            <div className="flex items-center py-3">
                <div className="mr-5">
                    {props?.icon}
                    {/* <IconPerson /> */}
                </div>
                <div className='text-sm xl:text-sm 2xl:text-sm 3xl:text-base'>
                    <span className="mr-3">
                        {props?.title}
                    </span>
                    <span className="font-bold"> {props?.value}</span>
                </div>
            </div>
        </div>

    )
}