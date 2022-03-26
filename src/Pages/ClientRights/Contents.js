import React from 'react'

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

export default function Contents(props) {


    return (
        <>
            <div className="client-rights-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                            Դուք կարող եք
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full  xl:w-2/3 pb-7 ">
                                <div className="flex h-full  flex-col justify-between ">
                                    <div className="text-sm text-dark-blue max-w-2xl ">
                                        ներկայացնելու ձեր հետ կնքվող պայմանագրից բխող պահանջները ֆինանսական համակարգի հաշտարարին, որպես «Դայմենշն» ՓԲԸ-ի ֆիզիկական անձ Հաճախորդ:
                                    </div>
                                    <div className='hidden xl:block'>
                                        <DownloadDocumentButton className="w-fit pr-14" > Regilation documents </DownloadDocumentButton>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 pb-7">
                                <div className="text-sm text-dark-blue ">
                                    Ֆինանսական համակարգի հաշտարարի գրասենյակ:
                                </div>
                                <div className="py-5 text-dark-blue">

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
                                </div>
                              
                                <div className='block xl:hidden'>
                                    <DownloadDocumentButton className="w-fit pr-14" > 
                                        Regilation documents 
                                    </DownloadDocumentButton>
                                </div>
                            </div>
                           
                        </div>
                        <UpdateStatus className="pt-32 "   date="15.02.2022" />
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
                <div className=''>
                    <span className="mr-3">
                        {props?.title}
                    </span>
                    <span className="font-bold"> {props?.value}</span>
                </div>
            </div>
        </div>

    )
}