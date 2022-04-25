import React from 'react';
import { ReactComponent as IconHome } from 'Assets/icons/service_home_blue.svg';
import { ReactComponent as IconShield } from 'Assets/icons/service_shield_blue.svg';
import { ReactComponent as IconManage } from 'Assets/icons/service_manage_blue.svg';


export const ServiceMenuList = [
    {
        to: '/services/capital-market',
        icon: <IconHome height={50} width={50} />,
        title: <>Capital Markets <br /> Advisory</>,
        desc: 'Capital Markets Advisory is a key business area of Dimension and an integral part of its ability to achieve the Mission and Vision of the company.',
        list: [
            "Mergers & Acquisitions (M&A) Advisory",
            "Balance Sheet Advisory & Capital Restructuring",
            "Private Placements",
            "Research & Analyses"
        ]
    },
    {
        to: '/services/investment-security',
        icon: <IconShield height={50} width={50} />,
        title: <>Investment Securities Services</>,
        desc: "We have years of experience in executing large and complex corporate securities transactions in the Armenian capital market and beyond. By upholding our .",
        list: [
            "Securities Underwriting",
            "Exchange Listing",
            "Market Making",
            "Corporate Registry & Securities Custody"
        ]
    },
    {
        to: '/services/asset-management',
        icon: <IconManage height={50} width={50} />,
        title: <>Asset <br /> Management</>,
        desc: "In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds.",
        list: [
            "Funds Management",
            "Portfolio Management & Private Wealth Solutions",
        ]
    },
];
