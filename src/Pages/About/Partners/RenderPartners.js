import React from 'react';
import { useTranslation } from 'react-i18next';

import { SlideBottom } from 'Components/SlideAnimation';

import { ReactComponent as IconLocation } from 'Assets/icons/location.svg';
import { ReactComponent as Arrow } from 'Assets/icons/right_arrow.svg';
import { Markdown } from 'react-showdown';

export const RenderPartners = (props) => {

    const {t} = useTranslation()
    const { item, onClick } = props;
    const _image = item?.logo?.url ? `${process.env.REACT_APP_API_URL}${item?.logo?.url}` : '';

    // console.log(item)
    return (
        <SlideBottom>
            <div className="p-8 rounded-xl bg-blue-light text-blue  hover-border-outline border-2">
                <ImageSection _image={_image} />
                <AddressSection item={item} onClick={onClick} btnLabel={<> 
                    {t("More")}&nbsp;&nbsp;
                    <Arrow />
                    {/* <svg width="14" height="14" viewBox="0 0 24 24" fill='white'><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" /></svg> */}
                 </>}  />
            </div>
        </SlideBottom>
    );
};


export const RenderPartnerExpanded = (props) => {

    const { item, onClick } = props;
    const _image = item?.logo?.url ? `${process.env.REACT_APP_API_URL}${item?.logo?.url}` : '';

    // console.log(item)
    return (
        <SlideBottom>
            <div className="p-8 rounded-xl bg-blue-light text-blue  hover-border-outline border-2 max-w-xl h-full  w-full">
                <ImageSection _image={_image} />
                <DescriptionSection item={item} />
                <AddressSection item={item} onClick={onClick} btnLabel={<>&nbsp;Close&nbsp;</>}  />
            </div>
        </SlideBottom>
    );
};

const ImageSection = ({ _image }) => {

    return (
        <div className="h-32 border-b-2 border-color-blue flex items-center">
            <img src={_image} alt="" />
        </div>
    )
}

const AddressSection = ({ item, onClick, btnLabel }) => {
    return (
        <div className="flex justify-between items-center mt-10">
            <div className="text-sm xl:text-xs 3xl:text-sm flex items-center">
                <IconLocation className='mr-4' />
                {item?.address}
            </div>
            {/* {item?.website} */}
            {/* <a href={item?.website} target="_blank"> */}
            <div
                onClick={onClick}
                className="text-xs ml-3 rounded-lg bg-dark-blue-grad p-2 text-white cursor-pointer flex">
                {/* &nbsp;&nbsp;About&nbsp;us */}
                {btnLabel}
            </div>
            {/* </a> */}
        </div>
    )
}

const DescriptionSection = ({ item }) => {
    return (
        <div className="text-dark-blue mt-10 text-sm overflow-scroll">
            <Markdown markdown={item?.description} />
            
            {/* </a> */}
        </div>
    )
}