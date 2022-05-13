import React, { useState } from 'react';
import ChartsWrapper from './ChartsWrapper';

import { useTranslation } from 'react-i18next';

export const ChartLayout = (props) => {

    const {
        index_current_date,
        index_current_value,
        since_inception_total_return,
        labels,
        values,
        disclaimer

    } = props;

    const {t} = useTranslation()

    const [showfullData, setShowfullData] = useState(true)

    const getArrayWithLimit = (arry, limit = 12) => {
        const _arry = [...arry]
        const newArray = _arry.slice(Math.max(_arry.length - limit, 0))
        return newArray

    }


    const graphData = {
        labels: showfullData ? labels : getArrayWithLimit(labels, 12),
        datasets: [
            {
                label: "",
                data: showfullData ? values : getArrayWithLimit(values, 12),
                fill: 'start',
                backgroundColor: "#e5eff4",
                borderColor: "#003C5A"
            }
        ],
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };


    const SmallButton = (props) => {

        return (
            <div
                onClick={props?.onClick}
                className={`py-2 text-xs px-4 rounded-xl text-dark-blue  font-bold ml-3 border-2 border-color-blue-light   ${props?.active ? 'bg-blue-aqua-light' : 'text-white'} `}>
                {props?.label}
            </div>
        )

    }

    return (
        <div className="flex flex-wrap">
            <div className="w-full flex flex-wrap justify-between">
                <div className="flex">
                    <div className='mb-16 mr-32'>
                        <div className="text-sm py-5">
                            {index_current_date}
                        </div>
                        <div className="text-4xl text-blue font-bold">
                            {index_current_value}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm py-5">
                            {t("Since Inception Total Return")}
                        </div>
                        <div className="text-4xl text-blue font-bold">
                            {since_inception_total_return}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex cursor-pointer mt-5'>
                        <SmallButton
                            onClick={() => setShowfullData(true)}
                            label={t("All")} 
                            active={showfullData} />
                        <SmallButton
                            onClick={() => setShowfullData(false)}
                            label={t("1 Year")}
                            active={!showfullData} />
                    </div>

                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className="w-full  ">
                    <ChartsWrapper data={graphData} />
                </div>
                <div className="py-7 text-xs text-blue leading-4">
                    {disclaimer}
                    {/* The index launch date is May 31, 2021.  Prior to this, data are hypothetical and based on the index methodology applied retroactively. When back-testing data, Dimension uses actual historical constituent-level data (e.g., historical price, market capitalization, and corporate action data) in its calculations. Dimension maintains the index and calculates the index levels and performance shown but does not manage all constituent assets.  Past performance of any index is not an indication or guarantee of future results. */}
                </div>
            </div>
        </div>
    );
};
