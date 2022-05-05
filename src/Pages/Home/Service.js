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
import { truncate } from 'Utils/string';


export default function Service(props) {

    const { getConfigs } = useStoreItem()

    const homePage = getConfigs?.configs?.home_page

    const ServiceCard = (props) => {

        return (
            <div className='bg-blue-light rounded-xl p-7 pb-12 hover-border-outline border-2 h-full flex flex-col justify-between'>
                {props?.icon}
                <div className="py-7 font-semibold text-xl xl:text-lg  2xl:text-xl 3xl:text-2xl text-dark-blue">
                    {props?.title}
                    
                </div>
                <div className=" pb-10 text-sm xl:text-xs 2xl:text-sm 3xl:text-base xl:leading-5 2xl:leading-5 text-dark-blue">
                    { props?.descritpion}
                </div>
                <DetailsButton to={props?.to}> Details </DetailsButton>

            </div>
        )

    }
    

    return (
        <>
         <div className="hero-wrapper-3">
            <div className="container py-32 xl:py-24 mx-auto ">
                <div className="pb-24 xl:pb-16  text-3xl  xl:text-xl 2xl:text-2xl  3xl:text-3xl text-dark-blue font-semibold ">
                {/* Our services */}
                {homePage?.service_title}
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-flow-col gap-24">
                    <ServiceCard
                        icon={<IconHome  />}
                        title={<MarkdownView markdown={homePage?.service_1_heading} />}
                        descritpion={<MarkdownView markdown={homePage?.service_1_description} />}
                        to="/services/capital-market"

                    />
                    <ServiceCard
                        icon={<IconShield id="112" />}
                        title={<MarkdownView markdown={homePage?.service_2_heading} />}
                        descritpion={<MarkdownView markdown={homePage?.service_2_description} />}
                       
                        to="/services/investment-security"

                    />
                    <ServiceCard
                        icon={<IconManage />}
                        title={<MarkdownView markdown={homePage?.service_3_heading} />}
                        descritpion={<MarkdownView markdown={homePage?.service_3_description} />}
                        to="/services/asset-management"

                    />
                    
                    
                </div>
            </div>
         </div>
            
        </>
    )
}
