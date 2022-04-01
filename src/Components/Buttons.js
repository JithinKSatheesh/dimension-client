import { Link } from 'react-router-dom'
import { ReactComponent as IconDownload } from 'Assets/icons/download_2.svg';
import { ReactComponent as IconPdf } from 'Assets/icons/pdfIcon.svg'


export const DetailsButton = ({children, ...props}) => {

    return(
    <Link 
        to={props.to ? props.to : '/'} 
        className={`btn px-12 bg-dark-blue-grad py-3 text-center rounded-xl text-white font-semibold ${props?.className}`} 
        >
        {children}
    </Link>
    )
}

export const GetButton = ({children, ...props}) => {

    return(<>
    {
        props.to ?
    <Link 
        to={props.to ? props.to : '/'} 
        className={`btn  border-blue py-3 text-center rounded-xl text-dark-blue font-semibold ${props?.className}`} 
        >
        {children}
    </Link>
    :
    <span 
        onClick={props?.onClick}
        className={`btn  border-blue py-3 text-center rounded-xl text-dark-blue font-semibold ${props?.className}`} 
        >
        {children}
    </span>
    
    }
    </>
    )
}



export const DownloadDocumentButton = (props) => {

    return (
        <div
            onClick={props.onClick}
            className={`max-w-lg rounded-xl bg-blue-light p-4 ${props.className} cursor-pointer`}>
            <div className='flex text-dark-blue cursor-pointer items-center'>
                <div className='bg-dark-blue-grad mr-3 rounded'>
                    <IconDownload className='' />
                </div>
                {props.children}
            </div>
        </div>
    );
};

export const PdfDownloadButton = (props) => {

    return (
        <div 
            onClick={props?.onClick}
            className="rounded-xl rounded-r-2xl bg-dark-blue-grad flex items-center cursor-pointer">
            <div className='m-5 text-white'> <IconPdf /> </div>
            <div className='flex-grow h-full rounded-xl   bg-blue-light text-sm 2xl:text-base  font-bold text-dark-blue flex items-center justify-end'>
                <div className=" px-5 text-right">
                {props?.title}
                </div>
            </div>
            
        </div>
    )
}