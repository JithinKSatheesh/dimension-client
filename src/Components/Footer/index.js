import React from 'react'
import { Link } from 'react-router-dom'

// ** assets
import { ReactComponent as Logo} from 'Assets/icons/logo_white.svg'

import { ReactComponent as FacebookIcon} from 'Assets/icons/facebook.svg'
import { ReactComponent as Instagram} from 'Assets/icons/instagram.svg'
import { ReactComponent as LinkedinIcon} from 'Assets/icons/linkedin.svg'

// import  FacebookIcon from 'Assets/icons/facebook.svg'
// import  Instagram from 'Assets/icons/instagram.svg'
// import  LinkedinIcon from 'Assets/icons/linkedin.svg'

// ** brands
import Brand_1 from 'Assets/brands/abcfin.png'
import Brand_2 from 'Assets/brands/brand2.png'
import Brand_3 from 'Assets/brands/fininfo.png'
import Brand_4 from 'Assets/brands/brand3.png'
import Brand_5 from 'Assets/brands/exit.png'
import { AddressData, AdressIcons, RenderAddressData } from './AddressData'

import { PdfDownloadButton } from 'Components/Buttons'
import { SearchBox } from './SearchBox'


export const socialMedia = [
    {
        id:1,
        icon : FacebookIcon ,
        link : 'https://fb.com',
    },
    {
        id:2,
        icon : Instagram ,
        link : 'https://fb.com',
    },
    {
        id:4,
        icon : LinkedinIcon ,
        link : 'https://fb.com',
    }
]

const _aboutLinks = [
    {
        link : '/about#about',
        label : 'About Dimension'
    },
    {
        link : '/about#corporate-structure',
        label : 'Corporate structure'
    },
    {
        link : '/about#ownership',
        label : 'Significant Shareholders'
    },
    {
        link : '/about#team',
        label : 'Team'
    },
    {
        link : '/about#mission',
        label : 'Mission and vision'
    },
    {
        link : '/about#statuory-documents',
        label : 'Statuory documents'
    },
]

const _brands = [Brand_1, Brand_2, Brand_3, Brand_4]

const _researchCoverageLinks = [
    {
        link : '/market-research',
        label : 'Research coverage'
    },
    {
        link : '/client-rights',
        label : 'Client rights'
    },
    {
        link : '/investor-relation',
        label : 'Reports'
    },
    {
        link : '/regulations',
        label : 'Regultions'
    },
    
    {
        link : '/news',
        label : 'News'
    },
    {
        link : '/faq',
        label : 'FAQ'
    },
    {
        link : '/careers',
        label : 'Careers'
    },
]

const _serviceLinks = [
    {
        link : '/services/capital-market',
        label : 'Capital Markets Advisory '
    },
    {
        link : '/services/investment-security',
        label : 'Investment Securities Services'
    },
    {
        link : '/services/asset-management',
        label : 'Asset Management'
    },
    
]


export default function Index(props) {

    const tarrif_url = ''

    

    return (
        <>
        <div className="bg-dark-blue-grad">
            <div className="container py-16 mx-auto px-4 ">
                <div className="flex flex-wrap items-center justify-center xl:justify-between">
                    <div className='w-full xl:w-fit mb-12 xl:mb-0'>
                        <Logo className='mx-auto' />
                    </div>
                    <SearchBox />    
                </div>
                <div className="mt-28 mb-32">
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-16 text-center xl:text-left lg:text-xs 2xl:text-base">
                        <div className=' text-white '>
                            <div className="font-semibold mb-4"> About us </div>
                            {_aboutLinks.map(item => 
                                <div key={item.label} className='mb-4'>
                                    <Link to={item.link} > {item.label} </Link>
                                </div>
                            )}
                            
                        </div>
                        <div className=' text-white'>
                            <div className="font-semibold mb-4"> Services</div>
                            {_serviceLinks.map(item => 
                                <div key={item.label} className='mb-4'>
                                    <Link to={item.link} > {item.label} </Link>
                                </div>
                            )}
                            
                            <div className='mb-4 mt-4 w-32 mx-auto lg:mx-0'>
                                <PdfDownloadButton 
                                    iconWidth={20} 
                                    iconHeight={20}  
                                    title="Tariffs" 
                                    onClick={() => window.open(tarrif_url, '_blank', 'noopener,noreferrer')}
                                    className="h-10" />
                            </div>

                        </div>
                        <div className=' text-white'>
                            {_researchCoverageLinks.map(item =>
                                <div key={item.label} className='mb-4 font-bold uppercase'>
                                    <Link to={item.link} > {item.label} </Link>
                                </div>
                            )}
                        </div>
                        <div className=' text-white'>
                            <div className="font-semibold mb-4"> Contact us </div>
                                <RenderAddressData item={AddressData} />
                            <div className="mt-16 flex justify-center xl:justify-start">
                                {socialMedia.map(link => 
                                    <a href={link.link} className='mr-4'> 
                                        <div className="bg-dark-blue rounded-full hover:bg-white ">
                                            <link.icon className='text-white-blue-hover' />
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center xl:justify-between">
                    <div className="flex items-center order-2 xl:order-1 mb-10 ">
                        {_brands.map((image, index) => 
                            <div className={`'grow ${index !== (_brands.length - 1) && 'mr-11'}`}>
                                <img src={image} alt="" 
                                    className="w-full hover:brightness-0 hover:invert hover:translate-x-2" />
                            </div>
                        )}
                    </div>
                    <div style={{width : '600px'}} className="text-xs text-white text-center xl:text-right mb-10  order-1  xl:order-2">
                        Dimension is not responsible for the accuracy and reliability of the information and/or advertisements presented on the third party websites linked from this website and assumes no responsibility for the consequences arising from the use of the said 
                    </div>
                </div>
                <div className="pt-24">
                    <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center">
                        <div className="w-full text-sm text-white order-3 xl:order-1 text-center xl:text-left">
                            &#169; 2022 All Rights Reserved.
                        </div>
                        <div className="w-full text-sm text-white order-1  xl:order-2 mb-5 xl:mb-0 text-center ">
                            Dimension CJSC is supervised by the CBA
                        </div>
                        <div className="w-full text-sm text-white  order-2  xl:order-3 mb-5 xl:mb-0 ">
                            <div className='mx-auto xl:ml-auto xl:mr-0 flex justify-center xl:justify-end'>
                                <div className="mr-3">Powered by</div>  
                                <img src={Brand_5} alt="" className="brightness-0 invert" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}


