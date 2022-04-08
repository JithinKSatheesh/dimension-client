import React, {useState} from 'react';
import ChartsWrapper from './ChartsWrapper';

export const ChartLayout = (props) => {

    const {
        index_current_date, 
        index_current_value, 
        since_inception_total_return, 
        labels,
        values, 
        
    } = props;

    const [showfullData, setShowfullData] = useState(true)

    const getArrayWithLimit = (arry, limit = 12) => {
        const _arry = [...arry]
        const newArray =  _arry.slice(Math.max(_arry.length - limit, 0))
        return newArray
       
    }
    

    const graphData = {
        labels :showfullData ? labels : getArrayWithLimit(labels, 3),
        datasets: [
          {
            label: "",
            data: showfullData ? values : getArrayWithLimit(values, 3),
            fill: 'start',
            backgroundColor: "#003c5a25",
            borderColor: "#003C5A"
          }
        ],
        options: {
            plugins:{
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
                className={`py-2 text-xs px-4 rounded-xl ${props?.active ? 'bg-dark-blue text-white ' : 'text-dark-blue'} `}>
                {props?.label}
            </div>
        )

    }

    return (
        <div className="flex flex-wrap">
            <div className="w-full xl:w-1/4 order-2 xl:order-1">
                <div className='mb-16'>
                    <div className="text-sm py-5">
                        {index_current_date}
                    </div>
                    <div className="text-4xl text-blue font-bold">
                        {index_current_value}
                    </div>
                </div>
                <div>
                    <div className="text-sm py-5">
                        Since Inception Total Return
                    </div>
                    <div className="text-4xl text-blue font-bold">
                        {since_inception_total_return}
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-3/4 order-1 xl:order-2">
                <div className='border-color-blue border-2 rounded-2xl w-fit flex cursor-pointer'>
                    <SmallButton 
                        onClick={()=> setShowfullData(false)}
                        label="1 Year" active={!showfullData}  />
                    <SmallButton 
                        onClick={()=> setShowfullData(true)}
                        label="All" active={showfullData} />
                </div>
                <div className="">
                    <ChartsWrapper data={graphData} />
                </div>
                <div className="py-7 text-xs text-dark-blue">
                    The index launch date is May 31, 2021.  Prior to this, data are hypothetical and based on the index methodology applied retroactively. When back-testing data, Dimension uses actual historical constituent-level data (e.g., historical price, market capitalization, and corporate action data) in its calculations. Dimension maintains the index and calculates the index levels and performance shown but does not manage all constituent assets.  Past performance of any index is not an indication or guarantee of future results.
                </div>
            </div>
        </div>
    );
};
