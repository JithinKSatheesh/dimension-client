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

    const {t} = useTranslation()
    const { item, onClick } = props;
    const _image = item?.logo?.url ? `${process.env.REACT_APP_API_URL}${item?.logo?.url}` : '';

    // console.log(item)
    return (
        <SlideBottom>
            <div className="p-8 rounded-xl bg-blue-light text-blue  hover-border-outline border-2 max-w-xl h-full  w-full">
                <ImageSection _image={_image} />
                <DescriptionSection item={item} />
                <AddressSection item={item} onClick={onClick} showLink={true} btnLabel={<>&nbsp;{t("Close")}&nbsp;</>}  />
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

const AddressSection = ({ item, onClick, btnLabel, showLink = false }) => {
    return (
        <div className="flex justify-between items-center mt-10">
            <div className="text-sm xl:text-xs 3xl:text-sm ">
                {(item?.website && showLink) ? 
                <div className='flex items-center mb-2'>
                    {/* <IconLocation  /> */}
                    <svg  fill='currentColor' className='mr-4' width="18" height="18" viewBox="0 0 24 24"><path d="M17.033 6.966c.584.583.584 1.529 0 2.112l-7.955 7.956c-.583.583-1.529.583-2.112 0-.583-.583-.583-1.529 0-2.112l7.956-7.956c.582-.583 1.528-.583 2.111 0zm-9.138 13.386c-1.171 1.171-3.076 1.171-4.248 0-1.171-1.171-1.171-3.077 0-4.248l5.639-5.632c-1.892-.459-3.971.05-5.449 1.528l-2.147 2.147c-2.254 2.254-2.254 5.909 0 8.163 2.254 2.254 5.909 2.254 8.163 0l2.147-2.148c1.477-1.477 1.986-3.556 1.527-5.448l-5.632 5.638zm6.251-18.662l-2.146 2.148c-1.478 1.478-1.99 3.553-1.53 5.445l5.634-5.635c1.172-1.171 3.077-1.171 4.248 0 1.172 1.171 1.172 3.077 0 4.248l-5.635 5.635c1.893.459 3.968-.053 5.445-1.53l2.146-2.147c2.254-2.254 2.254-5.908 0-8.163-2.253-2.254-5.908-2.254-8.162-.001z"/></svg>
                   <a target="_blank" href={item?.website}>
                    {item?.website}
                   </a>
                </div>
                : null}
                <div className='flex items-center'>
                    <IconLocation className='mr-4' />
                    {item?.address}
                </div>
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