import React, { useState } from 'react'
import Nav from "./nav"
import { Md5G } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaEuroSign } from "react-icons/fa";
import mobile50 from './img/image.svg';
import mobile51 from './img/Simcard.svg';
import mobile52 from './img/Simcard (1).svg';
import mobile53 from './img/Rectangle (1).svg';
import mobile45 from './img/Group 31.svg'
import mobile46 from './img/Group 35.svg'
import mobile47 from './img/Group 33.svg'
import mobile48 from './img/Group 34.svg'

import { FaCheck } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";



export default function App4() {

    const [activeBox, setActiveBox] = useState("box");


    // const [toggle, setToggle] = useState(false);
    // const [toggle1, setToggle1] = useState(false);
    // const [toggle2, setToggle2] = useState(false);
    return (
        <>

            <section className="container-fluid  bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF1E9_100%)]">
                <div className="container ">
                    <Nav />
                    <section className="col-12 flex justify-center  py-5  ">
                        <div className="  flex flex-column   justify-center items-center col-lg-8  col-12 ">
                            <div className="w-full flex items-center gap-2 justify-center items-center text-center flex-nowrap  text-ellipsis   ">
                                <img src={mobile50} alt="" className="lg:w-[63px] lg:h-[63px] w-[50px] h-[50px] rounded-full " />
                                <span className="font-poppins font-bold 
               text-[25px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[63px] 
               leading-[28px] sm:leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[75px] 
               tracking-[0.03em] truncate min-w-0 flex-shrink text-center lg:text-left ">1 GB Argentiba eSIM</span>
                            </div>

                            <div className="col-12 ">
                                <div className='flex  gap-2 py-4 justify-center'>
                                    <button className=" w-[90px] p-1 text-center justify-center border flex items-center gap-2   rounded-5 font-poppins font-medium text-[19px] leading-[1px] tracking-[0.02em] ">
                                        Amx <i className="border items-end"><Md5G size={10} /></i>
                                    </button>
                                    <button className=" w-[100px] text-center justify-center border flex items-center gap-2   rounded-5 font-poppins font-medium text-[19px] leading-[1px] tracking-[0.02em] ">
                                        Claro <i className="border items-end"><Md5G size={10} /></i>
                                    </button>
                                    <button className="w-[110px]   text-center justify-center border flex items-center gap-2   rounded-5 font-poppins font-medium text-[19px] leading-[1px] tracking-[0.02em] ">
                                        Personal <i className="border items-end"><Md5G size={10} /></i>
                                    </button>
                                </div>

                            </div>
                            <div className="  grid     grid-cols-1  md:grid-cols-2       lg:grid-cols-3 gap-2 col-12  ">

                                <div className="shadow    bg-white rounded-4 p-4 gap-3 flex flex-nowrap items-start">
                                    <div className="text-[rgba(254,95,0,1)] p-3 rounded-5 bg-[rgba(255,241,232,1)]">
                                        <FaRegCalendar size={35} />
                                    </div>

                                    <div className="flex flex-column m-none leading-none p-none">
                                        <p className="font-poppins font-normal text-[17px] leading- tracking-[2%]">Validity For</p>

                                        <p className="font-poppins font-semibold text-3xl leading-none tracking-tight ">7 Days</p>
                                    </div>


                                </div>


                                <div className="shadow  bg-white rounded-4 p-4 gap-3 flex-nowrap flex items-start">
                                    <div className="text-[rgba(254,95,0,1)] p-3 rounded-5 bg-[rgba(255,241,232,1)]">
                                        <HiOutlineArrowsUpDown size={35} />
                                    </div>

                                    <div className="flex flex-column m-none leading-none p-none">
                                        <p className="font-poppins font-normal text-[17px] leading- tracking-[2%]">Data</p>

                                        <p className="font-poppins font-semibold text-3xl leading-none tracking-tight ">1 GB</p>
                                    </div>


                                </div>

                                <div className="shadow bg-white rounded-4 p-4 gap-3 flex flex-nowrap items-start">
                                    <div className="text-[rgba(254,95,0,1)] p-3 rounded-5 bg-[rgba(255,241,232,1)]">
                                        <FaEuroSign size={35} />
                                    </div>

                                    <div className="flex flex-column m-none leading-none p-none">
                                        <p className="font-poppins font-normal text-[17px] leading- tracking-[2%]">Price</p>

                                        <p className="font-poppins font-semibold text-3xl leading-none tracking-tight ">10.99 €</p>
                                    </div>


                                </div>
                            </div>
                            <section className="shadow rounded col-12 flex flex-column justify-center items-center mt-5 py-5 bg-white">
                                <div className='font-poppins font-semibold text-[25px] leading-tight tracking-wide text-center'>
                                    Please Choose Which eSIM You Want To Top Up
                                </div>


      <div className="lg:w-11/12 max-auto  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 py-3  justify-center items-center place-center  items-stretch ">
         <div className={`${activeBox === "box" ? " border-1 rounded-2 border-[rgba(254,95,0,1)] p-1 w-full max-w-[220px] shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)] " : ' rounded-2 p-1 w-full max-w-[220px] shadow '}`} onClick={() => setActiveBox("box")}>
         <div className='justify-end flex ' >
       <div className={`${activeBox === "box" ? " bg-[rgba(254,95,0,1)]  text-white border flex  items-center justify-center     h-[20px] w-[20px] rounded-full" : "border flex  items-center justify-center     h-[20px] w-[20px] rounded-full"}`} onClick={() => setActiveBox("box")} >
         {activeBox === "box" && <FaCheck size={10} className=" " />}
         </div>
         </div>
          <div className=' p-2'>
          <img className='w-full h-auto' src={mobile51} alt="" />
            </div>
             </div>

                                    <div className={`${activeBox === "box1" ? " border-1 rounded-2 border-[rgba(254,95,0,1)] p-1 w-full max-w-[220px] shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)] " : ' rounded-2 p-1 w-full max-w-[220px] shadow '}`} onClick={() => setActiveBox("box1")}>

                                        <div className='justify-end flex ' >
                                            <div className={`${activeBox == "box1" ? " bg-[rgba(254,95,0,1)]  text-white border flex  items-center justify-center     h-[20px] w-[20px] rounded-full" : "border flex  items-center justify-center     h-[20px] w-[20px] rounded-full"}`} onclick={() => setActiveBox("box1")} >
                                                {activeBox === "box1" && <FaCheck size={10} className=" " />}

                                            </div>



                                        </div>
                                        <div className=' p-2'>
                                            <img className='w-full h-auto' src={mobile52} alt="" />
                                        </div>
                                    </div>





                                    <div className={`${activeBox === "box2" ? " border-1 rounded-2 border-[rgba(254,95,0,1)] p-1 w-full max-w-[220px] shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)] " : 'shadow rounded-2 p-1 w-full max-w-[220px]  '}`} onClick={() => setActiveBox("box2")}>

                                        <div className='justify-end flex ' >
                                            <div className={` ${activeBox === "box2" ? " bg-[rgba(254,95,0,1)]  text-white border flex  items-center justify-center     h-[20px] w-[20px] rounded-full" : "border flex  items-center justify-center     h-[20px] w-[20px] rounded-full"}`} onclick={() => setActiveBox("box2")} >
                                                {activeBox === "box2" && <FaCheck size={10} className=" " />}

                                            </div>



                                        </div>





                                        <div className="pb- p-2 flex items-center justify-center ">
                                            <div
                                                className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] 
                                                         h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px]
                                                            mx-auto border flex items-center p-
                                                                rounded-lg shadow-sm hover:shadow-md transition text-center"
                                            >
                                                <p
                                                    className="
    w-full text-center font-poppins font-normal 
    text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 
    leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] xl:leading-[32px]
    tracking-[0.01em] sm:tracking-[0.015em] md:tracking-[0.02em] 
  "
                                                >
                                                    + Order a New eSIM
                                                </p>

                                            </div>
                                        </div>


                                    </div>






                                </div>





                                <div className='col-11 grid lg:grid-cols-7 items-center '>
                                    <span className="lg:col-span-1 font-poppins font-semibold text-21px tracking-2pc text-center lg:text-left ">Logged As</span>
                                    <div className="lg:col-span-6 flex rounded-5 border justify-between px-3  truncate  bg-[#FAFAFA]">
                                        <span className='font-poppins font-medium   text-[20px]   leading-[40px]    tracking-[0.02em] truncate '>Adil zh (alae.namse@gmail.com)</span>
                                        <span className='font-poppins font-medium text-[20px] leading-[40px] tracking-[2%] underline text-[#858382]'>logout</span>
                                    </div>
                                </div>
                                <div className=" col-11  mt-3   ">
                                    <button className="col-12 rounded-5 py-2 font-poppins font-semibold text-lg text-white bg-orange-500 leading-none text-center">Go to Checkout</button>


                                </div>
                                <div className="col-11 col-lg- mt-3 flex justify-center items-start gap-1  ">
                                    <p className="font-poppins font-medium text-[13px] leading-[26px] tracking-[0.02em] text-[rgb(154,151,150)] ">Payment Methods</p>
                                    <img src={mobile45} alt="" />
                                    <img src={mobile46} alt="" />
                                    <img src={mobile47} alt="" />
                                    <img src={mobile48} alt="" />

                                </div>

                            </section>
                            <section className='shadow col-12 mt-5 bg-white rounded'>
                                <div className=' col-12 flex flex-column justify-center items-center '>
                                    <div className='py-4 flex items-center justify-center'>
                                        <span className='font-poppins font-semibold text-[25px] leading-[100%] tracking-[0.02em] text-center'>Other plans that maybe interested you</span>
                                    </div>

                                    <div className="col-11  justify-center grid lg:grid-cols-2 grid-cols-1 p-3  gap-4 ">
                                        <div className="shadow  p-2 bg-white rounded-3 gb ">
                                            <div className="flex items-start justify-between round   leading-1  ">
                                                <p className="font-poppins font-bold  text-[16px] leading-[29px]  tracking-[0%] text-center">1 GB Argentina</p>
                                                <GoArrowUpRight size={30} className=' p-1 rounded-5 bg-[#F5F5F5]' />

                                            </div>

                                            <p className="border-bottom font-poppins font-normal text-base leading-[25px] tracking-[2%] col-11">Prepaid eSIM Argentina with LTE | 4G | 5G Mobile Data for Tourists</p>
                                            <div className="flex justify-between  col-11">
                                                <p className="font-poppins font-medium text-[15px] leading-[22px] tracking-normal text-[rgba(154,151,150,1)] ">3€ per GB 7<br />Days validity</p>
                                                <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€8.99</p>
                                            </div>

                                        </div>


                                        <div className="shadow  p-2 bg-white rounded-3 gb ">
                                            <div className="flex items-start justify-between round   leading-1  ">
                                                <p className="font-poppins font-bold  text-[16px] leading-[29px]  tracking-[0%] text-center">3 GB Argentina</p>
                                                <GoArrowUpRight size={30} className=' p-1 rounded-5 bg-[#F5F5F5]' />

                                            </div>

                                            <p className="border-bottom font-poppins font-normal text-base leading-[25px] tracking-[2%] col-11">Prepaid eSIM Argentina with LTE | 4G | 5G Mobile Data for Tourists</p>
                                            <div className="flex justify-between  col-11">
                                                <p className="font-poppins font-medium text-[15px] leading-[22px] tracking-normal text-[rgba(154,151,150,1)] ">3€ per GB 15<br />Days validity</p>
                                                <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€25.99</p>
                                            </div>

                                        </div>
                                        <div className="shadow  p-2 bg-white rounded-3 gb ">
                                            <div className="flex items-start justify-between round   leading-1  ">
                                                <p className="font-poppins font-bold  text-[16px] leading-[29px]  tracking-[0%] text-center">5 GB Argentina</p>
                                                <GoArrowUpRight size={30} className=' p-1 rounded-5 bg-[#F5F5F5]' />

                                            </div>

                                            <p className="border-bottom font-poppins font-normal text-base leading-[25px] tracking-[2%] col-11">Prepaid eSIM Argentina with LTE | 4G | 5G Mobile Data for Tourists</p>
                                            <div className="flex justify-between  col-11">
                                                <p className="font-poppins font-medium text-[15px] leading-[22px] tracking-normal text-[rgba(154,151,150,1)] ">3€ per GB 30<br />Days validity</p>
                                                <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€38.99</p>
                                            </div>

                                        </div>
                                        <div className="shadow  p-2 bg-white rounded-3 gb ">
                                            <div className="flex items-start justify-between round   leading-1  ">
                                                <p className="font-poppins font-bold  text-[16px] leading-[29px]  tracking-[0%] text-center">10 GB Argentina</p>
                                                <GoArrowUpRight size={30} className=' p-1 rounded-5 bg-[#F5F5F5]' />

                                            </div>

                                            <p className="border-bottom font-poppins font-normal text-base leading-[25px] tracking-[2%] col-11">Prepaid eSIM Argentina with LTE | 4G | 5G Mobile Data for Tourists</p>
                                            <div className="flex justify-between  col-11">
                                                <p className="font-poppins font-medium text-[15px] leading-[22px] tracking-normal text-[rgba(154,151,150,1)] ">3€ per GB 30<br />Days validity</p>
                                                <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€69.99</p>
                                            </div>

                                        </div>



                                    </div>
                                    <div className='col-11 px-3 py-3'>
                                        <button className='w-full  rounded-5 py-1 bg-[#FFF1E9] text-[#FE5F00] !font-poppins !font-semibold !text-xl !leading-8 !tracking-wide text-center py-2'>Show all Plans</button>

                                    </div>

                                </div>
                                <div className='pb-3 '>
                                </div>

                            </section>





                        </div>
                    </section>


                </div>
            </section>
        </>
    )
}
