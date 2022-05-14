import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { ReactComponent as IconHome } from 'Assets/icons/service_home_blue.svg';
import { ReactComponent as IconShield } from 'Assets/icons/service_shield_blue.svg';
import { ReactComponent as IconManage } from 'Assets/icons/service_manage_blue.svg';

import { truncate } from 'Utils/string';
import useStoreItem from 'Store/hooks/getStoreItems'

export default function useServiceMenuList(props) {


    const {t} = useTranslation()
    const { getConfigs } = useStoreItem()
    const servicePageCapitalMarket = getConfigs?.configs?.service_page_capital_market
    const servicePageInvestment = getConfigs?.configs?.service_page_investment_service
    const servicePageAsset = getConfigs?.configs?.service_page_asset_management

    const ServiceMenuList = [
        {
            to: '/services/capital-market',
            icon: <IconHome height={50} width={50} />,
            title: <> <Trans i18nKey={"Capital Markets Advisory"}> Capital Markets <br /> Advisory </Trans></>,
            desc:  <>{truncate(servicePageCapitalMarket?.short_desc)}</>,
            list: [
                servicePageCapitalMarket?.service_heading_1,
                servicePageCapitalMarket?.service_heading_2,
                servicePageCapitalMarket?.service_heading_3,
                servicePageCapitalMarket?.service_heading_4
            ]
        },
        {
            to: '/services/investment-security',
            icon: <IconShield height={50} width={50} />,
            title: <> <Trans i18nKey={"Investment Securities Services"}> Investment Securities Services</Trans></>,
            desc:  <>{truncate(servicePageInvestment?.short_desc)}</>,
            list: [
                servicePageInvestment?.service_heading_1,
                servicePageInvestment?.service_heading_2,
                servicePageInvestment?.service_heading_3,
                servicePageInvestment?.service_heading_4
            ]
        },
        {
            to: '/services/asset-management',
            icon: <IconManage height={50} width={50} />,
            title: <> <Trans i18nKey={"Asset Management"}>  <>Asset <br /> Management</> </Trans></>,
            desc:  <>{truncate(servicePageAsset?.short_desc)}</>,
            list: [
                servicePageAsset?.service_heading_1,
                servicePageAsset?.service_heading_2,
            ]
        },
    ];


    return { ServiceMenuList }
}

