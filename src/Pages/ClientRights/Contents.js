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

export default function Contents(props) {

    const { getClientRights } = props
   
    const data = getClientRights?.clientRights ?? {}

    const _date = getClientRights?.clientRights?.attributes?.updatedAt
    
    const pdf_url = data?.attributes?.regilation_documents_pdf?.data?.attributes?.url ?? ''
    const _regilation_documents_pdf = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : ''
    // console.log(_regilation_documents_pdf)

    

    return (
        <>
            <div className="client-rights-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                            <SlideLeft>
                            Դուք կարող եք
                            </SlideLeft>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full  xl:w-2/3 pb-7 ">
                                <div className="flex h-full  flex-col justify-between ">
                                    <div className="text-sm text-dark-blue max-w-2xl ">
                                        <SlideBottom>

                                        ներկայացնելու ձեր հետ կնքվող պայմանագրից բխող պահանջները ֆինանսական համակարգի հաշտարարին, որպես «Դայմենշն» ՓԲԸ-ի ֆիզիկական անձ Հաճախորդ:
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
                                        value="Փիրուզ Սարգսյան"
                                        icon={<IconPerson />}
                                    />
                                    <AddressRow
                                        title="Հասցե:"
                                        value={<>ք. Երևան, Մովսես Խորենացու փողոց 15, <br /> «Էլիտ Պլազա» բիզնես կենտրոն, 7-րդ հարկ</>}
                                        icon={<IconLocation />}
                                    />
                                    <AddressRow
                                        title="Հեռախոս:"
                                        value={<>+374 10 58 23 22, +374 10 58 23 21</>}
                                        icon={<PhoneIcon />}
                                    />
                                    <AddressRow
                                        title="Ֆաքս:"
                                        value={<>+374 10 58 24 21</>}
                                        icon={<IconPrinter />}
                                    />
                                    <AddressRow
                                        title="Էլ.Փոստ:"
                                        value={<> info@fsm.am</>}
                                        icon={<MailIcon />}
                                    />
                                    <AddressRow
                                        title="Կայք: "
                                        value={<> www.fsm.am </>}
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
                        <UpdateStatus className="pt-32 "   date={formatDate(_date)} />
                    </div>
                </div>
            </div>

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