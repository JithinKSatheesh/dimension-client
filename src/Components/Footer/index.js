import React from 'react'
import { Link } from 'react-router-dom'

// ** assets
import { ReactComponent as Logo} from 'Assets/icons/logo.svg'
import { ReactComponent as Search} from 'Assets/icons/search.svg'
import { ReactComponent as MailIcon} from 'Assets/icons/mail.svg'
import { ReactComponent as PhoneIcon} from 'Assets/icons/phone.svg'
import { ReactComponent as ClockIcon} from 'Assets/icons/clock.svg'
import { ReactComponent as LocationIcon} from 'Assets/icons/location.svg'
import { ReactComponent as FacebookIcon} from 'Assets/icons/facebook.svg'
import { ReactComponent as TwitterIcon} from 'Assets/icons/twitter.svg'
import { ReactComponent as LinkedinIcon} from 'Assets/icons/linkedin.svg'

// ** brands
import Brand_1 from 'Assets/brands/abcfin.png'
import Brand_2 from 'Assets/brands/brand2.png'
import Brand_3 from 'Assets/brands/fininfo.png'
import Brand_4 from 'Assets/brands/brand3.png'



export default function Index(props) {
    

    return (
        <>
        <div className="bg-blue-light">
            <div className="container py-16 mx-auto px-4 ">
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="input relative">
                        <div className="absolute mt-3 ml-2"><Search /></div>
                        <input style={{width : '335px'}} type="text" name="" id="" className=' h-14 pl-10 rounded-xl' />
                    </div>
                </div>
                <div className="my-28">
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-16 ">
                        <div className=' text-dark-blue'>
                            <div className="font-semibold mb-4"> About us </div>
                            <div className='mb-4'><Link to="/" > About Dimension </Link></div>
                            <div className='mb-4'><Link to="/" > Corporate structure </Link></div>
                            <div className='mb-4'><Link to="/" > Significant Shareholders </Link></div>
                            <div className='mb-4'><Link to="/" > Significant Shareholders </Link></div>
                            <div className='mb-4'><Link to="/" > Teammates </Link></div>
                            <div className='mb-4'><Link to="/" > Mission and vision </Link></div>
                            <div className='mb-4'><Link to="/" > Statuory documents </Link></div>
                        </div>
                        <div className=' text-dark-blue'>
                            <div className="font-semibold mb-4"> Services</div>
                            <div className='mb-4'><Link to="/" >Capital Markets Advisory </Link></div>
                            <div className='mb-4'><Link to="/" >Investment Securities Services </Link></div>
                            <div className='mb-4'><Link to="/" > Asset Management </Link></div>
                        </div>
                        <div className=' text-dark-blue'>
                            <div className="font-semibold mb-4"> Client rights </div>
                            <div className='font-semibold mb-4'><Link to="/" > Investor relations </Link></div>
                            <div className='font-semibold mb-4'><Link to="/" > Regultions </Link></div>
                            <div className='font-semibold mb-4'><Link to="/" > Market research </Link></div>
                            <div className='font-semibold mb-4'><Link to="/" > News </Link></div>
                            <div className='font-semibold mb-4'><Link to="/" > FAQ </Link></div>
                            <div className='font-semibold mb-4'><Link to="/" >  Careers </Link></div>
                          
                        </div>
                        <div className=' text-dark-blue'>
                            <div className="font-semibold mb-4"> Contact us </div>
                            <div className='mb-5 flex'><div className="mr-3"> <ClockIcon/> </div> 9:00-18:00 </div>
                            <div className='mb-5 flex'><div className="mr-3"> <PhoneIcon /> </div> + 374 010 54 56 70 </div>
                            <div className='mb-5 flex'><div className="mr-3"> <MailIcon /> </div> info@dimension.am </div>
                            <div className='mb-5 flex'><div className="mr-3"> <LocationIcon /> </div> Baghramyan Street 2, 6th floor, 27/1 </div>
                            <div className="mt-16 flex">
                                <a href="" className='mr-4'> <FacebookIcon /> </a>
                                <a href="" className='mr-4'> <TwitterIcon /> </a>
                                <a href="" className='mr-4'> <LinkedinIcon /> </a>
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
                    <div style={{width : '600px'}} className="text-sm text-dark-blue text-center xl:text-right mb-10  order-1  xl:order-2">
                        Dimension is not responsible for the accuracy and reliability of the information and/or advertisements presented on the third party websites linked from this website and assumes no responsibility for the consequences arising from the use of the said 
                    </div>
                </div>
                <div className="pt-24">
                    <div className="flex">
                        <div className="text-sm text-dark-blue">
                            &#169; 2022 All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
