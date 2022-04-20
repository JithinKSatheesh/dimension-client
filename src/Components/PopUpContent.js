import React from 'react';
import { Watch } from 'react-loader-spinner';
import { ApplyButton } from './ApplyButton';



export const PopUpContent = (props) => {

    const { loading, success, action } = props;

    const LoadingWatch = (props) => {
        return (
            <div className='py-5'>
                <div className="flex justify-center py-6">
                    <Watch color={props?.color} />
                </div>
                <div className="text-center text-xs text-bold">
                    Submitting...
                </div>
            </div>
        );
    };

    const SuccessSubmit = (props) => {

        return (
            <div className='text-white text-center'>
                <div className='text-green-400 flex justify-center'>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill='currentColor'><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" /></svg>
                </div>
                <div className='text-xl py-3'>
                    {props?.successText}
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="text-white w-full ">
                {loading ?
                    <LoadingWatch color="#e5eff4" />
                    :
                    <div>
                        {success ?
                            <SuccessSubmit successText="Successfully submitted" />
                            :
                            <div>
                                {/* ------------------------- */}
                                {props.children}
                                {/* ------------------------- */}
                                <ApplyButton onClick={() => action()} />
                            </div>}

                    </div>}

            </div>
        </div>
    );
};
