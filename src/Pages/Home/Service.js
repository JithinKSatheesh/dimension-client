import React from 'react'

// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'
// import { ReactComponent as IconShield  } from 'Assets/icons/service_shield.svg'
// import { ReactComponent as IconManage } from 'Assets/icons/service_manage.svg'

import { ReactComponent as IconHome } from 'Assets/icons/service_home_blue.svg';
import { ReactComponent as IconShield } from 'Assets/icons/service_shield_blue.svg';
import { ReactComponent as IconManage } from 'Assets/icons/service_manage_blue.svg';

import { DetailsButton } from 'Components/Buttons'
import useStoreItem from 'Store/hooks/getStoreItems'
import MarkdownView from 'react-showdown';


export default function Service(props) {

    const { getConfigs } = useStoreItem()

    const ServiceCard = (props) => {

        return (
            <div className='bg-blue-light rounded-xl p-7 pb-12 hover-border-outline border-2'>
                {props?.icon}
                <div className="py-7 font-semibold text-xl 2xl:text-2xl text-dark-blue">
                    {props?.title}
                    
                </div>
                <div className="xl:h-40 pb-10 text-sm 2xl:text-base text-dark-blue">
                    {props?.descritpion}
                </div>
                <DetailsButton to={props?.to}> Details </DetailsButton>

            </div>
        )

    }
    

    return (
        <>
         <div className="hero-wrapper-3">
            <div className="container py-32 mx-auto ">
                <div className="pb-24 text-3xl text-dark-blue font-semibold ">
                Our services
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-flow-col gap-24">
                    <ServiceCard
                        icon={<IconHome  />}
                        title={<>  Capital Markets <br/> Advisory </>}
                        descritpion={<MarkdownView markdown={getConfigs?.configs?.service_page_capital_market?.short_desc} />}
                        to="/services/capital-market"

                    />
                    <ServiceCard
                        icon={<IconShield id="112" />}
                        title={<>  Investment <br/> Securities Services </>}
                        descritpion={<MarkdownView markdown={getConfigs?.configs?.service_page_investment_service?.short_desc} />}
                       
                        to="/services/investment-security"

                    />
                    <ServiceCard
                        icon={<IconManage />}
                        title={<> Asset <br/> Management </>}
                        descritpion={<MarkdownView markdown={getConfigs?.configs?.service_page_asset_management?.short_desc} />}
                        to="/services/asset-management"

                    />
                    
                    
                </div>
            </div>
         </div>
            
        </>
    )
}
