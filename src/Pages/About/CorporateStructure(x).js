import React from 'react'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


export default function Corporatestructure(props) {


    return (
        <>
            <div id="corporate-structure" className=" about-wrapper-7 ">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 text-white font-bold text-2xl xl:text-3xl pb-16">
                            <SlideLeft>
                                Corporate structure
                            </SlideLeft>
                        </div>
                        {/*  Desktop view */}
                        {/* ------------------------------------------ */}
                        <div style={{ height: '1000px' }} className="hidden xl:block charts p-8 bg-blue-aqua rounded-xl text-sm">
                            <div className="mt-16"></div>
                            <div className="">
                                {/* Block 1 */}
                                <div className="relative w-full  h-24">
                                    <JustAppear>
                                        <div className="absolute  w-1 h-full bg-blue-lazur  left-1/2"></div>
                                    </JustAppear>
                                    <SlideLeft>
                                        <div style={{ left: 'calc(50% - 100px)', top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                            Բաժնետերերի ժողով
                                        </div>
                                    </SlideLeft>
                                </div>
                                {/* Block 2 container */}
                                <div className="relative w-full h-24">
                                    {/* Lines */}
                                    <JustAppear>
                                        <div className="absolute  w-56 h-1 bg-blue-lazur top-1/4  left-1/2"></div>
                                        <div className="absolute h-full  w-1  bg-blue-lazur left-1/2 "></div>
                                    </JustAppear>

                                    {/* block 2 */}
                                    <JustAppear>
                                        <div style={{ left: 'calc(50% - 100px)', top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                            Տնօրենների խորհուրդ
                                        </div>
                                    </JustAppear>
                                    {/* block 3 */}
                                    <SlideTop>
                                        <div style={{ left: 'calc(50% + 200px)', top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                            Տնօրենների խորհուրդ
                                        </div>
                                    </SlideTop>
                                </div>
                                {/* Block 3 container */}
                                <div className="relative w-full h-24">
                                    {/* Lines */}
                                    <JustAppear>
                                        <div className="absolute  w-56 h-1 bg-blue-lazur top-1/4  left-1/2"></div>
                                        <div className="absolute h-full  w-1  bg-blue-lazur left-1/2 "></div>
                                    </JustAppear>

                                    {/* block 2 */}
                                    <JustAppear>
                                        <div style={{ left: 'calc(50% - 100px)', top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                            Տնօրենների խորհուրդ
                                        </div>
                                    </JustAppear>
                                    {/* block 3 */}
                                    <SlideTop>
                                        <div style={{ left: 'calc(50% + 200px)', top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                            Տնօրենների խորհուրդ
                                        </div>
                                    </SlideTop>
                                </div>
                                <div className='relative h-12'>
                                    {/* Lines horizontal */}
                                    <JustAppear>
                                        <div style={{ left: 'calc(50% - 500px)', top: '0', width: '1000px' }} className="absolute  h-1 bg-blue-lazur top-1/4  "></div>
                                    </JustAppear>
                                </div>

                                {/* Block 4 container */}
                                <div className="relative w-full h-24">

                                    {/* block 1 */}
                                    <JustAppear>
                                        <div className='absolute' style={{ top: '0px', left: 'calc(50% - 550px)' }} >
                                            <div className="relative">
                                                <div style={{ top: '-50px', left: '50px' }} className="absolute h-32  w-1  bg-blue-lazur  "></div>
                                                <div style={{ top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white  absolute">
                                                    Տնօրենների խորհուրդ
                                                </div>
                                            </div>
                                        </div>
                                    </JustAppear>
                                    {/* block 2 */}
                                    <JustAppear>
                                        <div className='absolute' style={{ top: '0px', left: 'calc(50% - 350px)' }} >
                                            <div className="relative">
                                                <div style={{ top: '-50px', left: '50px' }} className="absolute h-32  w-1  bg-blue-lazur  "></div>
                                                <div style={{ top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white  absolute">
                                                    Տնօրենների խորհուրդ
                                                </div>
                                            </div>
                                        </div>
                                    </JustAppear>
                                    <JustAppear>
                                        <div className='absolute' style={{ top: '0px', left: 'calc(50% - 150px)' }} >
                                            <div className="relative">
                                                <div style={{ top: '-50px', left: '50px' }} className="absolute h-32  w-1  bg-blue-lazur  "></div>
                                                <div style={{ top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white  absolute">
                                                    Տնօրենների խորհուրդ
                                                </div>
                                            </div>
                                        </div>
                                    </JustAppear>
                                    <JustAppear>
                                        <div className='absolute' style={{ top: '0px', left: 'calc(50% + 50px)' }} >
                                            <div className="relative">
                                                <div style={{ top: '-50px', left: '50px' }} className="absolute h-32  w-1  bg-blue-lazur  "></div>
                                                <div style={{ top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white  absolute">
                                                    Տնօրենների խորհուրդ
                                                </div>
                                            </div>
                                        </div>
                                    </JustAppear>
                                    <JustAppear>
                                        <div className='absolute' style={{ top: '0px', left: 'calc(50% + 250px)' }} >
                                            <div className="relative">
                                                <div style={{ top: '-50px', left: '50px' }} className="absolute h-32  w-1  bg-blue-lazur  "></div>
                                                <div style={{ top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white  absolute">
                                                    Տնօրենների խորհուրդ
                                                </div>
                                            </div>
                                        </div>
                                    </JustAppear>
                                    <JustAppear>
                                        <div className='absolute' style={{ top: '0px', left: 'calc(50% + 450px)' }} >
                                            <div className="relative">
                                                <div style={{ top: '-50px', left: '50px' }} className="absolute h-32  w-1  bg-blue-lazur  "></div>
                                                <div style={{ top: '0' }} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white  absolute">
                                                    Տնօրենների խորհուրդ
                                                </div>
                                            </div>
                                        </div>
                                    </JustAppear>




                                </div>
                            </div>
                            {/* --------------------------------------------- */}
                            {/* Second graph */}
                            {/* --------------------------------------------- */}
                            <div className="mt-16"></div>
                            <div>
                                {/* Block 1 */}
                                <div className="relative w-full  h-24">
                                    <JustAppear>
                                        <div className="absolute  w-1 h-full bg-dark-blue-2  left-1/2"></div>
                                    </JustAppear>
                                    <SlideLeft>
                                        <div style={{ left: 'calc(50% - 80px)', top: '0' }}
                                            className="p-5 bg-dark-blue w-fit  border-dark-blue border-2 rounded-xl text-white text-center absolute ">
                                            Dimension CJSC
                                            <div className="text-xs">28.09.2018</div>
                                        </div>
                                    </SlideLeft>
                                </div>
                                {/* Block 2 container */}
                                <div className="relative w-full h-24">
                                    {/* Lines */}
                                    <JustAppear>
                                        <div className="absolute h-full  w-1  bg-dark-blue-2 left-1/2 "></div>
                                    </JustAppear>

                                    {/* block 2 */}
                                    <JustAppear>
                                        <div style={{ left: 'calc(50% - 140px)', top: '0' }}
                                            className="p-5 bg-dark-blue w-fit  border-dark-blue border-2 text-center rounded-xl text-white absolute ">
                                            Դայմենշն Ֆանդզ Մենեջմենթ ՍՊԸ 
                                            
                                        </div>
                                    </JustAppear>
                                    {/* block 3 */}

                                </div>
                                <div className='relative h-12'>
                                    {/* Lines horizontal */}
                                    <JustAppear>
                                        <div style={{ left: 'calc(50% - 250px)', top: '0', width: '500px' }}
                                            className="absolute  h-1 bg-dark-blue-2  top-1/4  "></div>
                                    </JustAppear>
                                </div>
                            </div>
                            {/* Block 4 container */}
                            <div className="relative w-full h-24">

                                
                                {/* block 2 */}
                                <JustAppear>
                                    <div className='absolute' style={{ top: '0px', left: 'calc(50% - 350px)' }} >
                                        <div className="relative">
                                            <div style={{ top: '-50px', left: '100px' }} className="absolute h-20  w-1 bg-dark-blue-2  "></div>
                                            <div style={{ top: '0', left: '-0px' }} 
                                                className="p-5 bg-dark-blue w-72 text-center  border-dark-blue border-2 rounded-xl text-white absolute ">
                                                Դայմենշն Ֆիքսդ Ինքամ Ֆոնդ
                                            </div>
                                        </div>
                                    </div>
                                </JustAppear>
                                
                                <JustAppear>
                                    <div className='absolute' style={{ top: '0px', left: 'calc(50% + 250px)' }} >
                                        <div className="relative">
                                            <div style={{ top: '-50px', left: '0px' }} className="absolute h-20  w-1 bg-dark-blue-2  "></div>
                                            <div style={{ top: '0', left: '-150px' }} 
                                                className="p-5 bg-dark-blue w-72 text-center  border-dark-blue border-2 rounded-xl text-white absolute ">
                                                Տնօրենների խորհուրդ
                                            </div>
                                        </div>
                                    </div>
                                </JustAppear>
                               




                            </div>
                        


                        {/* ------------------------------------- */}
                        {/* ------------------------------------- */}

                    </div>
                    {/* ------------------------------------------ */}
                    {/*  Mobile view */}
                    {/* ------------------------------------------ */}
                    <div style={{ height: '1300px' }} className="block xl:hidden charts p-8 bg-blue-aqua rounded-xl text-xs">
                        <div className="mt-16"></div>
                        <div className="flex flex-wrap">
                            {/* Block 1 */}
                            <div className="relative w-full h-24">
                                <div style={{ height: '150px', left: '30px' }} className="absolute  w-1 bg-blue-lazur "></div>
                                <div style={{ left: 0, top: '-30px', width: '130px' }} className="p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                    Բաժնետերերի ժողով
                                </div>
                            </div>
                            {/* Block 2 container */}
                            <div className="relative w-full h-24">
                                {/* Lines */}
                                <div style={{ height: '150px', left: '30px' }} className="absolute  w-1 bg-blue-lazur "></div>
                                <div style={{ left: '0', top: '0', width: '150px' }} className="absolute h-1 bg-blue-lazur "></div>

                                {/* block 2 */}
                                <div style={{ left: 0, top: '-30px', width: '230px' }} className="flex absolute  w-full ">
                                    <div className="w-1/2 p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                        Տնօրենների խորհուրդ
                                    </div>
                                    {/* block 3 */}
                                    <div style={{ left: '150px' }} className=" w-1/2 p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                        Տնօրենների խորհուրդ
                                    </div>
                                </div>
                            </div>
                            {/* Block 4 container */}
                            <div className="relative w-full h-24">
                                {/* Lines */}
                                <div style={{ left: '0', top: '0', width: '150px' }} className="absolute   h-1 bg-blue-lazur 2"></div>
                                <div style={{ height: '100px', left: '30px' }} className="absolute  w-1  bg-blue-lazur "></div>

                                <div style={{ left: 0, top: '-30px' }} className="flex absolute">
                                    {/* block 4 */}
                                    <div style={{ width: '90px' }} className="p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                        Գլխավոր տնօրեն
                                    </div>
                                    {/* block 5 */}
                                    <div style={{ left: '120px', width: '150px' }} className="p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute  text-center">
                                        Գլխավոր տնօրենի տեղակալ
                                    </div>
                                </div>

                            </div>
                            {/* Block 5 container */}
                            <div style={{ height: '280px' }} className="relative w-1/4  ">

                                {/* Lines horizontal */}
                                <div style={{ left: '30px', top: '20px' }} className="absolute  w-full h-1 bg-blue-lazur"></div>
                                <div style={{ left: '30px', top: '115px' }} className="absolute  w-full h-1 bg-blue-lazur"></div>
                                <div style={{ left: '30px', top: '200px' }} className="absolute  w-full h-1 bg-blue-lazur"></div>
                                <div style={{ left: '30px', top: '310px' }} className="absolute  w-full h-1 bg-blue-lazur"></div>
                                <div style={{ left: '30px', top: '400px' }} className="absolute  w-full h-1 bg-blue-lazur"></div>
                                {/* Lines */}
                                <div style={{ height: '400px', left: '30px', top: '0px' }} className="absolute  w-1  bg-blue-lazur "></div>

                                {/* block 4 */}
                                <div style={{ left: '80px', top: '-10px' }} className="p-3 bg-dark-blue-grad w-fit  rounded-xl text-white absolute ">
                                    Հետազոտությունների և վերլուծությունների բաժին
                                </div>
                                {/* block 5 */}
                                <div style={{ left: '80px', top: '90px', }} className="p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                    Կապիտալ շուկաների բաժին
                                </div>
                                <div style={{ left: '80px', top: '170px', }} className="p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                    Ակտիվների կառավարման և արժեթղթերով գործառնությունների բաժին
                                </div>
                                <div style={{ left: '80px', top: '290px', }} className="p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                    Իրավաբանական բաժին
                                </div>
                                <div style={{ left: '80px', top: '380px', }} className="p-3 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                    Մարքեթինգի բաժին
                                </div>
                            </div>
                        </div>
                        {/* Second graph */}
                        <div className="flex">

                            <div className="relative w-1/4  ">
                                {/* Line */}
                                <div style={{ height: '100px', left: '30px', top: '250px' }} className="absolute  w-1 bg-dark-blue-2 "></div>
                                <div style={{ height: '150px', left: '30px', top: '350px' }} className="absolute  w-1 bg-dark-blue-2 "></div>
                                <div style={{ height: '70px', left: '30px', top: '450px' }} className="absolute  w-1 bg-dark-blue-2 "></div>
                                {/* Line hr */}
                                <div style={{ left: '30px', top: '430px', width: '150px' }} className="absolute  h-1 bg-dark-blue-2 "></div>
                                <div style={{ left: '30px', top: '520px', width: '150px' }} className="absolute  h-1 bg-dark-blue-2 "></div>

                                {/* Block */}
                                <div style={{ left: 0, top: '200px', width: '150px' }} className="p-3 bg-dark-blue w-fit  border-dark-blue border-2 rounded-xl text-white absolute ">
                                    Dimension CJSC
                                    <div className="text-xs">28.09.2018</div>
                                </div>
                                <div style={{ left: 0, top: '300px' }} className="p-3 bg-dark-blue border-dark-blue border-2 w-fit rounded-xl text-white absolute ">
                                    Դայմենշն Ֆանդզ Մենեջմենթ ՍՊԸ
                                    <div className="text-xs">31.01.2020</div>
                                </div>
                                <div style={{ left: '100px', top: '400px', width: '150px' }} className="p-3 bg-dark-blue border-dark-blue border-2 w-fit rounded-xl text-white absolute ">
                                    Դայմենշն Ֆիքսդ Ինքամ Ֆոնդ
                                    <div className="text-xs">31.01.2020</div>
                                </div>
                                <div style={{ left: '100px', top: '500px', width: '150px' }} className="p-3 bg-dark-blue border-dark-blue border-2 w-fit rounded-xl text-white absolute ">
                                    Դայմենշն Ֆիքսդ նքամ ՅՈՒԷՍԴԻ Ֆոնդ
                                    <div className="text-xs">11.09.2021</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
