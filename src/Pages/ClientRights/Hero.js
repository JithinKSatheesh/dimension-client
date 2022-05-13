import React from 'react'
import { useTranslation } from 'react-i18next'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'
import MarkdownView from 'react-showdown'

// ** assets
// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'

export default function Hero(props) {

    const {t} = useTranslation()
    const { getClientRights } = props
   
 
    return (
        <>
        <div className="investor-relations-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-2xl 2xl:text-3xl font-bold flex items-center">
                        <SlideLeft>
                        {t("Client rights")}
                        </SlideLeft>
                        </div>
                        <div className="flex flex-wrap pt-8 items-end">
                            <div className="w-full xl:w-1/2  mb-16 max-w-lg text-sm xl:text-xs 2xl:text-sm 3xl:text-base xl:leading-6 2xl:leading-6 3xl:leading-6 ">
                                <SlideBottom>
                                    <MarkdownView markdown={getClientRights?.client_rights_description} />
                                    
                                {/* Ի կատարումն «Ֆինանսական համակարգի հաշտարարի մասին» Հայաստանի Հանրապետության օրենքի պահանջների ընկերությունը հաստատել է «Հաճախորդների բողոք-պահանջների քննության կանոնակարգ», որը սահմանում է Հաճախորդների բողոք-պահանջների ներկայացման, քննության և դրանց վերաբերյալ որոշումների կայացման կանոնները, ինչպես նաև բողոք-պահանջները քննող աշխատակցի իրավուքներն ու պարտականությունները:   */}
                                </SlideBottom>
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
