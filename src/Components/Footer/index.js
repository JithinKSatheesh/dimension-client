import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ** assets
import { ReactComponent as Logo} from 'Assets/icons/logo_white.svg'
import { ReactComponent as Search} from 'Assets/icons/search.svg'
import { ReactComponent as MailIcon} from 'Assets/icons/mail.svg'
import { ReactComponent as PhoneIcon} from 'Assets/icons/phone.svg'
import { ReactComponent as LocationIcon} from 'Assets/icons/location.svg'
import { ReactComponent as FacebookIcon} from 'Assets/icons/facebook.svg'
import { ReactComponent as Instagram} from 'Assets/icons/instagram.svg'
import { ReactComponent as LinkedinIcon} from 'Assets/icons/linkedin.svg'

// ** brands
import Brand_1 from 'Assets/brands/abcfin.png'
import Brand_2 from 'Assets/brands/brand2.png'
import Brand_3 from 'Assets/brands/fininfo.png'
import Brand_4 from 'Assets/brands/brand3.png'
import Brand_5 from 'Assets/brands/exit.png'
import { AddressData, AdressIcons, RenderAddressData } from './AddressData'

import { PdfDownloadButton } from 'Components/Buttons'


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

export default function Index(props) {

    const navigate = useNavigate()

    const SearchBox = (props) => {

        const [val, setVal] = useState('')

        const handleChange=(e) => {

           setVal(e.target.value)

        }

        const onKeyPress = (e) => {
            if(e.key === 'Enter'){
                navigate(`/search?q=${val}`)
            }
        }

        return (
            <div className="input relative ">
                <div className="absolute mt-3 ml-2"><Search /></div>
                <input 
                    style={{ width: '335px' }} type="text" name="" id="" className='h-14 pl-10 rounded-xl'
                    value={val}
                    onChange={handleChange}
                    onKeyDown={onKeyPress}
                    
                    />
            </div>
        )
    }
    

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
                            <div className='mb-4'><Link to="/about#about" > About Dimension </Link></div>
                            <div className='mb-4'><Link to="/about#corporate-structure" > Corporate structure </Link></div>
                            <div className='mb-4'><Link to="/about#ownership" > Significant Shareholders </Link></div>
                            <div className='mb-4'><Link to="/about#team" > Team </Link></div>
                            <div className='mb-4'><Link to="/about#mission" > Mission and vision </Link></div>
                            <div className='mb-4'><Link to="/about#statuory-documents" > Statuory documents </Link></div>
                        </div>
                        <div className=' text-white'>
                            <div className="font-semibold mb-4"> Services</div>
                            <div className='mb-4'><Link to="/services/capital-market" >Capital Markets Advisory </Link></div>
                            <div className='mb-4'><Link to="/services/investment-security" >Investment Securities Services </Link></div>
                            <div className='mb-4'><Link to="/services/asset-management" > Asset Management </Link></div>
                            <div className='mb-4 w-32'><PdfDownloadButton title="Tariffs" className="h-12" /></div>

                        </div>
                        <div className=' text-white'>
                            
                            <div className='font-semibold mb-4'><Link to="/client-rights" > Client rights </Link></div>
                            <div className='font-semibold mb-4'><Link to="/investor-relation" > Investor relations </Link></div>
                            <div className='font-semibold mb-4'><Link to="/regulations" > Regultions </Link></div>
                            <div className='font-semibold mb-4'><Link to="/market-research" > Market research </Link></div>
                            <div className='font-semibold mb-4'><Link to="/news" > News </Link></div>
                            <div className='font-semibold mb-4'><Link to="/faq" > FAQ </Link></div>
                            <div className='font-semibold mb-4'><Link to="/careers" >  Careers </Link></div>
                          
                        </div>
                        <div className=' text-white'>
                            <div className="font-semibold mb-4"> Contact us </div>
                                <RenderAddressData item={AddressData} />
                            <div className="mt-16 flex justify-center xl:justify-start">
                                {socialMedia.map(link => <a href={link.link} className='mr-4'> <link.icon /> </a>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center xl:justify-between">
                    <div className="flex items-center order-2 xl:order-1 mb-10 ">
                        <div className='grow mr-11'><img src={Brand_1} alt="" className=' w-full' /></div>
                        <div className='grow mr-11'><img src={Brand_2} alt="" className=' w-full' /></div>
                        <div className='grow mr-11'><img src={Brand_3} alt="" className=' w-full' /></div>
                        <div className='grow '><img src={Brand_4} alt="" className=' w-full' /></div>
                    </div>
                    <div style={{width : '600px'}} className="text-xs text-white text-center xl:text-right mb-10  order-1  xl:order-2">
                        Dimension is not responsible for the accuracy and reliability of the information and/or advertisements presented on the third party websites linked from this website and assumes no responsibility for the consequences arising from the use of the said 
                    </div>
                </div>
                <div className="pt-24">
                    <div className="flex flex-wrap justify-center xl:justify-between items-center">
                        <div className="w-full xl:w-1/2 text-sm text-white order-2 xl:order-1 text-center xl:text-left">
                            &#169; 2022 All Rights Reserved.
                        </div>
                        <div className="text-sm text-white flex order-1  xl:order-2 mb-5 xl:mb-0">
                           <div className="mr-3">Powered by</div>  
                           <img src={Brand_5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
