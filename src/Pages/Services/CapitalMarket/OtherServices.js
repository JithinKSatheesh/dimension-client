import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'
import { ReactComponent as IconShield } from 'Assets/icons/service_shield.svg'
import { ReactComponent as IconManage } from 'Assets/icons/service_manage.svg'
import {ReactComponent as Logo3} from 'Assets/icons/logo_3.svg'

export default function Otherservices(props) {


    return (
        <>
            <div className=" service-wrapper-3">
                <div className="container mx-auto px-4">
                    <div className="pb-36">
                        <div className="mb-6 text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                            Other services
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                                <Link to="/services/investment-security">
                                    <ServiceDetailsButton
                                        icon={<IconShield className='mr-4' />}
                                        title={"Investment Securities Services"}
                                        onClick={() => { }}
                                    />
                                </Link>
                                <Link to="/services/asset-management">
                                    <ServiceDetailsButton
                                        icon={<IconManage className='mr-4' />}
                                        title={"Asset Management"}
                                        onClick={() => {}}
                                    />
                                </Link>
                                {/* <Link to="/services/capital-market">
                                    <ServiceDetailsButton
                                        icon={<IconHome className='mr-4' />}
                                        title={"Capital Markets Advisory"}
                                        onClick={() => {}}
                                    />
                                </Link> */}
                        </div>
                        <div className="pt-24">
                            <div className="flex justify-end items-center">
                                <div className="text-sm text-dark-blue mr-4">
                                    updated: 15.02.2022
                                </div>
                                <Logo3  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export const ServiceDetailsButton = (props) => {

    return (
        <div className="rounded-xl bg-blue-light flex justify-between items-center p-7 cursor-pointer">
            <div className='flex items-center'>
                <div>
                    {props?.icon}
                </div>
                <div className="font-bold w-48">
                    {props?.title}
                </div>
            </div>
            <div>
                <div 
                    onClick={props?.onClick}
                    className="bg-dark-blue-grad px-12 py-3 text-white font-bold rounded-xl cursor-pointer">
                    Details
                </div>
            </div>
        </div>
    )

}