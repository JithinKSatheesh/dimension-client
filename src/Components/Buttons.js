import { Link } from 'react-router-dom'


export const DetailsButton = ({children, ...props}) => {

    return(
    <Link 
        to={props.to} 
        className={"btn px-12 bg-dark-blue-grad py-3 text-center rounded-xl text-white font-semibold"} 
        >
        {children}
    </Link>
    )
}

export const GetButton = ({children, ...props}) => {

    return(
    <Link 
        to={props.to} 
        className={`btn px-12 border-blue py-3 text-center rounded-xl text-dark-blue font-semibold ${props?.className}`} 
        >
        {children}
    </Link>
    )
}
