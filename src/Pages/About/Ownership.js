import React from 'react'

import { ReactComponent as IconDownload } from 'Assets/icons/download.svg'

export default function Ownership(props) {
    

    return (
        <>
             <div id="ownership" className=" about-wrapper-3">
                <div className="container mx-auto px-4">
                <div className="py-36">
                    <div className="mb-6 text-white font-bold text-2xl xl:text-3xl pb-24">
                    Ownership   
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-1/3">
                            <div className="max-w-lg text-white leading-8 mb-28">
                                Ընկերությունը առաջնորդվելով ՀՀ կենտրոնական բանկի ԿԱՆՈՆԱԿԱՐԳ 8/03 «Ֆինանսական կազմակերպությունների և ֆինանսական խմբերի կողմից տեղեկությունների հրապարակումը» 15-րդ հոդվածի պահանջները, սույն բաժնում առկա է «Դայմենշն» ՓԲԸ-ի քաղաքականությունը արտահայտող հայտարարություն այն մասին, որ չի հրապարակում ֆինանսական կազմակերպության վերաբերյալ նշված տեղեկատվությունը և չհրապարակման պատճառները։
                            </div>
                            <div className="hidden xl:flex items-center justify-center max-w-lg border-2 border-white p-6  text-white rounded-xl text-sm cursor-pointer bg-black/20">
                                <div className='mr-7'><IconDownload /></div>
                                 Հայտարարություն ՀՀ կենտրոնական բանկի կանոնակարգ 8/03 15-րդ հոդվածի պահանջների մասին
                            </div>
                        </div>
                        <div className="w-full xl:w-2/3 pl-0 xl:pl-44">
                            <div className="rounded-xl w-full">
                                <div className="flex justify-between text-sm xl:text-base bg-dark-blue-grad p-7 text-white rounded-t-xl font-bold">
                                    <div>Shareholders</div>
                                    <div className='text-right w-32 xl:w-fit'>Participation in share Capital</div>
                                </div>
                                <div className="bg-blue-light text-dark-blue text-xl rounded-b-xl">
                                    <div className="p-7 flex border-b">
                                        <div className="w-1/2  font-bold"> Davit Hakobyan  </div>
                                        <div className="w-1/2 text-right"> 71.998787% </div>
                                    </div>
                                    <div className="p-7 flex border-b">
                                        <div className="w-1/2  font-bold"> Davit Hakobyan  </div>
                                        <div className="w-1/2 text-right"> 19.987874% </div>
                                    </div>
                                    <div className="p-7 flex ">
                                        <div className="w-1/2  font-bold"> Armen Grigoryan  </div>
                                        <div className="w-1/2 text-right"> 8.013339% </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mx-auto xl:hidden items-center justify-center max-w-lg border-2 border-white p-6  mt-16 text-white rounded-xl text-sm cursor-pointer bg-black/20">
                                <div className='mr-7'><IconDownload /></div>
                                 Հայտարարություն ՀՀ կենտրոնական բանկի կանոնակարգ 8/03 15-րդ հոդվածի պահանջների մասին
                            </div>
                        </div>
                    </div>
                </div>
                </div>
             </div>
        </>
    )
}
