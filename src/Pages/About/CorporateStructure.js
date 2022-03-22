import React from 'react'

export default function Corporatestructure(props) {


    return (
        <>
            <div className=" bg-dark-blue-grad">
                <div className="container mx-auto px-4">
                    <div className="py-36">
                        <div className="mb-6 text-white font-bold text-2xl xl:text-3xl pb-16">
                            Corporate structure
                        </div>
                        <div style={{height : '800px'}} className="charts p-8 bg-blue-aqua rounded-xl">
                            <div className="mt-16"></div>
                            <div className="flex">
                                {/* Block 1 */}
                                <div className="relative w-1/4 ">
                                    <div className="absolute  w-full h-1 bg-blue-lazur top-1/2 left-1/2"></div>
                                    <div style={{left : 0, top : '-30px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                        Բաժնետերերի ժողով
                                    </div>
                                </div>
                                {/* Block 2 container */}
                                <div className="relative w-1/4 ">
                                    {/* Lines */}
                                    <div className="absolute  w-full h-1 bg-blue-lazur top-1/2 left-1/2"></div>
                                    <div style={{height : '100px', left : '25%'}} className="absolute  w-1  bg-blue-lazur "></div>
                                    
                                    {/* block 2 */}
                                    <div style={{left : 0, top : '-30px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                        Տնօրենների խորհուրդ
                                    </div>
                                    {/* block 3 */}
                                    <div style={{left : 0, top : '100px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                        Տնօրենների խորհուրդ
                                    </div>
                                </div>
                                {/* Block 4 container */}
                                <div className="relative w-1/4 ">
                                   {/* Lines */}
                                   <div className="absolute  w-full h-1 bg-blue-lazur top-1/2 left-1/2"></div>
                                    <div style={{height : '100px', left : '25%'}} className="absolute  w-1  bg-blue-lazur "></div>
                                    
                                    {/* block 4 */}
                                    <div style={{left : 0, top : '-30px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute ">
                                    Գլխավոր տնօրեն
                                    </div>
                                    {/* block 5 */}
                                    <div style={{left : '20px', top : '100px', width : '150px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute  text-center">
                                    Գլխավոր տնօրենի տեղակալ
                                    </div>
                                </div>
                                {/* Block 5 container */}
                                <div className="relative w-1/4 ">
                                    
                                   {/* Lines horizontal */}
                                   <div style={{left : 0, top : '150px'}}  className="absolute  w-full h-1 bg-blue-lazur"></div>
                                   <div style={{left : 0, top : '300px'}}  className="absolute  w-full h-1 bg-blue-lazur"></div>
                                   <div style={{left : 0, top : '460px'}}  className="absolute  w-full h-1 bg-blue-lazur"></div>
                                   <div style={{left : 0, top : '570px'}}  className="absolute  w-full h-1 bg-blue-lazur"></div>
                                   {/* Lines */}
                                    <div style={{height : '570px', left : '0', top : '0px'}} className="absolute  w-1  bg-blue-lazur "></div>
                                    
                                    {/* block 4 */}
                                    <div style={{right : 0, top : '-30px', width : '260px'}} className="p-5 bg-dark-blue-grad w-fit  rounded-xl text-white absolute ">
                                    Հետազոտությունների և վերլուծությունների բաժին
                                    </div>
                                    {/* block 5 */}
                                    <div style={{right : 0, top : '100px', width : '260px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                        Կապիտալ շուկաների բաժին
                                    </div>
                                    <div style={{right : 0, top : '250px', width : '260px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                    Ակտիվների կառավարման և արժեթղթերով գործառնությունների բաժին
                                    </div>
                                    <div style={{right : 0, top : '430px', width : '260px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                    Իրավաբանական բաժին
                                    </div>
                                    <div style={{right : 0, top : '530px', width : '260px'}} className="p-5 bg-dark-blue-grad w-fit rounded-xl text-white absolute  ">
                                        Մարքեթինգի բաժին
                                    </div>
                                </div>
                            </div>
                            {/* Second graph */}
                            <div className="flex">
                                <div className="relative w-1/4 ">
                                    {/* Line */}
                                    <div style={{ left : '140px', top : '450px', width : '400px'}} className="absolute  h-1 bg-dark-blue-2 "></div>
                                    <div style={{height : '100px', left : '70px', top : '250px'}} className="absolute  w-1 bg-dark-blue-2 "></div>
                                    <div style={{height : '100px', left : '540px', top : '450px'}} className="absolute  w-1 bg-dark-blue-2 "></div>
                                    <div style={{height : '150px', left : '140px', top : '400px'}} className="absolute  w-1 bg-dark-blue-2 "></div>
                                    
                                    {/* Block */}
                                    <div style={{ left: 0, top: '200px' }} className="p-5 bg-dark-blue w-fit rounded-xl text-white absolute ">
                                        Dimension CJSC
                                        <div className="text-xs">28.09.2018</div>
                                    </div>
                                    <div style={{ left: 0, top: '350px', width : '330px' }} className="p-5 bg-dark-blue border-dark-blue border-2 w-fit rounded-xl text-white absolute ">
                                        Դայմենշն Ֆանդզ Մենեջմենթ ՍՊԸ 
                                        <div className="text-xs">31.01.2020</div>
                                    </div>
                                    <div style={{ left: 0, top: '500px', width : '330px' }} className="p-5 bg-dark-blue border-dark-blue border-2 w-fit rounded-xl text-white absolute ">
                                        Դայմենշն Ֆիքսդ Ինքամ Ֆոնդ
                                        <div className="text-xs">31.01.2020</div>
                                    </div>
                                    <div style={{ left: '380px', top: '500px', width : '350px' }} className="p-5 bg-dark-blue border-dark-blue border-2 w-fit rounded-xl text-white absolute ">
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
