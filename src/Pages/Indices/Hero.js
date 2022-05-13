import React from 'react'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'

import { useTranslation } from 'react-i18next';

// ** assets
// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'

export default function Hero(props) {
    
    const {t} = useTranslation()

    return (
        <>
        <div className="investor-relations-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-12  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-2xl 3xl:text-2xl font-bold flex items-center">
                        {t("Indices")}
                        </div>
                    </div>
                </div>
            </section>
        </div>
            
        </>
    )
}
