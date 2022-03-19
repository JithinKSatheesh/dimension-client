import React from 'react'
import { ReactComponent as Logo} from 'Assets/icons/logo.svg'
import { ReactComponent as Lang} from 'Assets/icons/lang.svg'
import { ReactComponent as DownArrow} from 'Assets/icons/downsmall.svg'
import { Link } from 'react-router-dom'

export default function Index(props) {

    const NavLinks = ({children, ...props}) => {
        return(<Link to={props.to} className="nav-item mr-16 uppercase text-base  text-dark-blue cursor-pointer self-center py-3">
            <div className="flex items-center">
                {children}
            </div>
        </Link>)
    }
    

    return (
        <>
            <div className="w-full">
                <div className="container mx-auto my-5">
                    <div className="flex items-center justify-between">
                        <div className="logo mr-5">
                            <Logo  />
                        </div>
                        <div className="nav-links  hidden xl:flex">
                            <NavLinks to="/" > About&nbsp;us&nbsp;&nbsp;<DownArrow/> </NavLinks>
                            <NavLinks to="/">Services&nbsp;&nbsp;<DownArrow/></NavLinks>
                            <NavLinks to="/">Indices</NavLinks>
                            <NavLinks to="/">Portfolio</NavLinks>
                            <NavLinks to="/">news</NavLinks>
                        </div>
                        <div className="lang  hidden xl:flex">
                            <NavLinks to="/" > Contacts</NavLinks>
                            <div className="lang py-3 self-center"><Lang /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
