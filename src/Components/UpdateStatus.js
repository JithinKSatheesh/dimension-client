import React from 'react';
import { ReactComponent as Logo2 } from 'Assets/icons/logo_2.svg';
import { ReactComponent as Logo3 } from 'Assets/icons/logo_3.svg';

import { useTranslation } from 'react-i18next';

export const UpdateStatus = (props) => {

    const {t} = useTranslation()

    return (
        <div className={props?.className}>
            <div className="text-center text-blue py-4 text-xs bg-blue-light">
                    {t("This page was last updated")} : {props?.date}
                {/* {props?.type === "dark" ? <Logo2 /> : <Logo3 />} */}
            </div>
        </div>

    );
};
