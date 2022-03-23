import { Link } from 'react-router-dom'
import { ReactComponent as IconDownload } from 'Assets/icons/download_2.svg';


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



export const DownloadDocumentButton = (props) => {

    return (
        <div
            onClick={props.onClick}
            className={`max-w-lg rounded-xl bg-blue-light p-4 ${props.className}`}>
            <div className='flex text-dark-blue cursor-pointer'>
                <IconDownload className='mr-3' />
                {props.children}
            </div>
        </div>
    );
};
