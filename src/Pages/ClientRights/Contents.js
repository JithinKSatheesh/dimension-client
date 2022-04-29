import React from 'react'

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

    const { getClientRights } = props
   
    // const data = getClientRights ?? {}

    const _date = getClientRights?.updatedAt
    
    const pdf_url = getClientRights?.regilation_documents_pdf?.url ?? ''
    const _regilation_documents_pdf = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''
    // console.log(getClientRights)

    

    return (
        <>
            <div className="client-rights-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                            <SlideLeft>
                                <MarkdownView markdown={getClientRights?.client_rights_heading_2} />
                            {/* Դուք կարող եք */}
                            </SlideLeft>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full  xl:w-2/3 pb-7 ">
                                <div className="flex h-full  flex-col justify-between ">
                                    <div className="text-sm text-dark-blue max-w-2xl ">
                                        <SlideBottom>
                                        <MarkdownView markdown={getClientRights?.client_rights_description_2} />
                                        
                                        {/* ներկայացնելու ձեր հետ կնքվող պայմանագրից բխող պահանջները ֆինանսական համակարգի հաշտարարին, որպես «Դայմենշն» ՓԲԸ-ի ֆիզիկական անձ Հաճախորդ: */}
                                        </SlideBottom>
                                    </div>
                                    <div className='hidden xl:block'>
                                        <SlideTop>

                                        <DownloadDocumentButton 
                                            onClick={() => window.open(_regilation_documents_pdf, '_blank', 'noopener,noreferrer')}
                                            className="w-fit pr-14" > Regilation documents </DownloadDocumentButton>
                                            </SlideTop>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 pb-7">
                                <div className="text-sm text-dark-blue ">
                                    <SlideBottom>

                                    Ֆինանսական համակարգի հաշտարարի գրասենյակ:
                                    </SlideBottom>
                                </div>
                                <div className="py-5 text-dark-blue">
                                    <SlideBottom>
                                    <AddressRow
                                        title="Հաշտարար:"
                                        value={getClientRights?.mediator_name}
                                        icon={<IconPerson />}
                                    />
                                    <AddressRow
                                        title="Հասցե:"
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_address}}  />}
                                        icon={<IconLocation />}
                                    />
                                    <AddressRow
                                        title="Հեռախոս:"
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_phone}}  />}
                                        icon={<PhoneIcon />}
                                    />
                                    <AddressRow
                                        title="Ֆաքս:"
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_fax}}  />}
                                        icon={<IconPrinter />}
                                    />
                                    <AddressRow
                                        title="Էլ.Փոստ:"
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_email}}  />}
                                        icon={<MailIcon />}
                                    />
                                    <AddressRow
                                        title="Կայք: "
                                        value={<span dangerouslySetInnerHTML={{__html : getClientRights?.mediator_website}}  />}
                                        icon={<IconGlobe />}
                                    />
                                    </SlideBottom>
                                </div>
                              
                                <div className='block xl:hidden'>
                                    <SlideTop>

                                    <DownloadDocumentButton 
                                        onClick={() => window.open(_regilation_documents_pdf, '_blank', 'noopener,noreferrer')}
                                        className="w-fit pr-14" > 
                                        Regilation documents 
                                    </DownloadDocumentButton>
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
                <div className='text-sm 2xl:text-base'>
                    <span className="mr-3">
                        {props?.title}
                    </span>
                    <span className="font-bold"> {props?.value}</span>
                </div>
            </div>
        </div>

    )
}