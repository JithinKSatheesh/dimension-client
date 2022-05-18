import React from 'react'
import { useTranslation } from 'react-i18next'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'

import {ReactComponent as Struct} from 'Assets/corporate_struct/struct_1.svg'
import {ReactComponent as Struct2} from 'Assets/corporate_struct/struct_2.svg'

import  Struct1Mob from 'Assets/corporate_struct/struct_1_mob.svg'
import {ReactComponent as Struct2Mob} from 'Assets/corporate_struct/struct_2_mob.svg'

export default function Corporatestructure(props) {

    const {t} = useTranslation()

    return (
        <>
            <div id="corporate-structure" className=" about-wrapper-7 ">
                <div className="container mx-auto ">
                    <div className="py-36">
                        <div className="mb-6 text-white font-bold text-2xl xl:text-2xl 2xl:text-3xl pb-16">
                            <SlideLeft>
                                {t("Corporate structure")}
                            </SlideLeft>
                        </div>
                        {/*  Desktop view */}
                        {/* ------------------------------------------ */}
                        <div  className="hidden xl:block charts p-8 bg-blue-aqua rounded-xl text-sm">
                            <Struct  />
                            {/* --------------------------------------------- */}
                            {/* Second graph */}
                            {/* --------------------------------------------- */}
                            <div className="mt-20"></div>
                            <Struct2  className='mx-auto translate-x-12' />


                        {/* ------------------------------------- */}
                        {/* ------------------------------------- */}

                    </div>
                    {/* ------------------------------------------ */}
                    {/*  Mobile view */}
                    {/* ------------------------------------------ */}
                    <div className="block xl:hidden charts p-8 bg-blue-aqua rounded-xl text-xs">
                        {/* <Struct1Mob /> */}
                        <img src={Struct1Mob} className="max-w-xs" />
                        <div className="mt-20"></div>
                        <Struct2Mob className='w-full' />
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
