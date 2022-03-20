import React from 'react'

import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'
import { ReactComponent as IconShield  } from 'Assets/icons/service_shield.svg'
import { ReactComponent as IconManage } from 'Assets/icons/service_manage.svg'

import { DetailsButton } from 'Components/Buttons'

export default function Service(props) {
    

    return (
        <>
         <div className="hero-wrapper-3">
            <div className="container py-32 mx-auto px-4 ">
                <div className="pb-24 text-3xl text-dark-blue font-semibold ">
                Our services
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-flow-col gap-24">
                    <div className='bg-blue-light rounded-xl p-7'>
                        <IconHome />
                        <div className="py-7 font-semibold text-2xl text-dark-blue">
                            Capital Markets Advisory
                        </div>
                        <div className="pb-10 text-dark-blue">
                            Capital Markets Advisory is a key business area of Dimension and an integral part of its ability to achieve the Mission and Vision of the company.
                        </div>
                        <DetailsButton to="/"> Details </DetailsButton>
                       
                    </div>
                    <div className='bg-blue-light rounded-xl p-7'>
                        <IconShield />
                        <div className="py-7 font-semibold text-2xl text-dark-blue">
                            Investment Securities Services
                        </div>
                        <div className="pb-10 text-dark-blue">
                            We have years of experience in executing large and complex corporate securities transactions in the Armenian capital market and beyond. By upholding our 
                        </div>
                        <DetailsButton to="/"> Details </DetailsButton>
                    </div>
                    <div className='bg-blue-light rounded-xl p-7'>
                        <IconManage />
                        <div className="py-7 font-semibold text-2xl text-dark-blue">
                            Asset Management
                        </div>
                        <div className="pb-10 text-dark-blue">
                            In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds. 
                        </div>
                        <DetailsButton to="/"> Details </DetailsButton>
                    </div>
                </div>
            </div>
         </div>
            
        </>
    )
}
