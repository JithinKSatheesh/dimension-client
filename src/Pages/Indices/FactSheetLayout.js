import React, { useState } from 'react';
import { getMonth } from 'Utils/time';
import { PdfDownloadButton } from 'Components/Buttons';

export const FactSheetLayout = (props) => {

    const { data } = props;

    // const _dataSorted = [...data].sort()

    const archives = [...data].slice(1)
    const [show, setShow] = useState(false)

    return (
        <div className=''>
            <div className="py-2">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <FactsheetButton item={data?.[0]} />
                </div>
            </div>
            <div 
                onClick={() => setShow(!show)}
                className=" text-dark-blue font-bold text-xs pt-8 pb-2 flex items-center cursor-pointer">
                <div className='mr-3'>
                    Archives
                </div>
                <div className="flex-grow h-1 w-full bg-dark-blue"></div>
                <div className="ml-3">
                <svg  
                    width="16" height="16" fill='#113c5a' className={`${show? '-rotate-90' : 'rotate-90'} cursor-pointer`} viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"/></svg>
                </div>
            </div>
            <div className="py-4">
                {show && 
                <GridButtonLayout data={archives} />
                }
            </div>
        </div>
    );
};
const GridButtonLayout = ({ data }) => {

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {data?.map(item => {


                return (<FactsheetButton item={item} key={item?.id} />);

            }
            )}
        </div>

    );
};


const FactsheetButton = ({ item }) => {

    const pdf_url = item?.pdf?.url;
    const url_ = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : '';

    return (<PdfDownloadButton
        key={item?.id}
        onClick={() => window.open(url_, '_blank', 'noopener,noreferrer')}
        className="text-xs xl:text-xs 2xl:text-xs h-16"
        title={`Factsheet (${getMonth(item?.year)} ${(new Date(item?.year).getFullYear())})`} />

    );


};
