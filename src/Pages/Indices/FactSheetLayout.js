import React from 'react';
import { getMonth } from 'Utils/time';
import { PdfDownloadButton } from 'Components/Buttons';

export const FactSheetLayout = (props) => {

    const { data } = props;

    const archives = [...data].slice(1)

    return (
        <div className=''>
            <div className=" text-dark-blue font-bold text-2xl py-8">
                Factsheets
            </div>
            <div className="py-2">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                    <FactsheetButton item={data?.[0]} />
                </div>
            </div>
            <div className=" text-dark-blue font-bold text-xs pt-8 pb-2">
                Archives
            </div>
            <div className="py-2">
                <GridButtonLayout data={archives} />
            </div>
        </div>
    );
};
const GridButtonLayout = ({ data }) => {

    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
            {data?.map(item => {


                return (<FactsheetButton item={item} key={item?.id} />);

            }
            )}
        </div>

    );
};


const FactsheetButton = ({ item }) => {

    const pdf_url = item?.attributes?.pdf?.data?.attributes?.url;
    const url_ = pdf_url ? `${process.env.REACT_APP_API_URL}${pdf_url}` : '';

    return (<PdfDownloadButton
        key={item?.id}
        onClick={() => window.open(url_, '_blank', 'noopener,noreferrer')}
        title={`Factsheet (${getMonth(item?.attributes?.year)} ${(new Date(item?.attributes?.year).getFullYear())})`} />

    );


};
