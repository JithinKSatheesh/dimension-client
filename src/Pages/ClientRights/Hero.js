import React from 'react'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'

// ** assets
// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'

export default function Hero(props) {
    

    return (
        <>
        <div className="investor-relations-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-3xl font-bold flex items-center">
                        Client rights
                        </div>
                        <div className="flex flex-wrap pt-8 items-end">
                            <div className="w-full xl:w-1/2 text-sm mb-16 max-w-lg">
                                Ի կատարումն «Ֆինանսական համակարգի հաշտարարի մասին» Հայաստանի Հանրապետության օրենքի պահանջների ընկերությունը հաստատել է «Հաճախորդների բողոք-պահանջների քննության կանոնակարգ», որը սահմանում է Հաճախորդների բողոք-պահանջների ներկայացման, քննության և դրանց վերաբերյալ որոշումների կայացման կանոնները, ինչպես նաև բողոք-պահանջները քննող աշխատակցի իրավուքներն ու պարտականությունները:  
                            </div>
                            <div className="w-full h-full xl:w-1/2 mb-16 flex  justify-end">
                               
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
            
        </>
    )
}
