import React, { useState } from 'react'
import Nav from './nav'
import mobile54 from './img/Sim card (1).svg';
import mobile55 from './img/Mask group (1).svg';
import mobile56 from './img/image (1).svg';
import mobile57 from './img/Sim card (2).svg';
import mobile58 from './img/image (2).svg';
import mobile59 from './img/Qr Code 1.svg';
import mobile60 from './img/Rectangle 39389 (3).svg';
import mobile61 from './img/image (3).svg';
import mobile62 from './img/logo.svg';


import { IoRadioButtonOn } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdContentCopy } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import mobile37 from './img/Layer 830 1.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";








export default function App5() {
    const [activeBox, setActiveBox] = useState("box1");
    const [activeBox1, setActiveBox1] = useState("button1");
    return (
        <>
            <section className='container-fluid bg-gradient-to-b from-white to-[#FFF1E9]'>
                <div className="container flex justify-center flex-column items-center">
                    <div className="col-12">
                        <Nav />
                    </div>
                    <div className='col-12 flex flex-column  justify-center pt-5'>
                        <p className='font-poppins font-bold lg:text-6xl text-[47px] lg:leading-tight leading[35px] tracking-wide text-center'>My eSIM</p>
                    </div>
                    <div className="col-12 flex  justify-center  ">
                        <div className=' flex gap-2  border  rounded-5 bg-white '>
                            <button className={` runded-5  p-2 px-3  ${activeBox === "box1" ? "bg-black rounded-5 text-white" : "bg- text-black"}`} onClick={() => setActiveBox("box1")}>Active eSIM</button>
                            <button className={` runded-5  p-2 px-3  ${activeBox === "box2" ? "bg-black rounded-5 text-white" : "bg- text-black"}`} onClick={() => setActiveBox("box2")}>Inactive eSIM</button>
                        </div>
                    </div>
                    {/* box 1 */}
                    <div className='col-lg-8 col-12  py-4 mt-3'>

                        {activeBox === "box1" && (
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 '>
                                <img src={mobile54} alt="" />
                                <div className='gap-3 flex flex-column '>
                                    <span className='font-poppins font-bold text-[29px] leading-[100%] tracking-[0%] flex justify-center lg:justify-start'>eSIM Data Plans</span>
                                    <div className='bg-white border shadow rounded p-3  '>
                                        <div className='col-12 flex justify-between border-b border-gray-400 pb-2 '>
                                            <div className='flex items-center gap-2'>
                                                <img src={mobile55} alt="" />
                                                <span className='font-poppins font-bold text-[29px] leading-none tracking-normal'>Norway</span>
                                            </div>
                                            <div className='flex  items-center gap-1 justify-center text-[#19B820]'>
                                                <IoRadioButtonOn />active

                                            </div>

                                        </div>
                                        <div className="flex justify-between  col-12 py-2">
                                            <span className="font-poppins font-normal text-xl leading-10 tracking-[2%]  text-[#909090]">Remaining Data<br />Expires in</span>
                                            <span className="font-poppins font-bold text-[20px] leading-[40px] tracking-[0.02em] text-right text-[#100C0A]">4.7/10 GB <br />
                                                14/04/2024
                                            </span>
                                        </div>

                                    </div>
                                    <div className='bg-white border shadow rounded p-3   '>
                                        <div className='col-12 flex justify-between border-b border-gray-400 pb-2 '>
                                            <div className='flex items-center gap-2'>
                                                <img src={mobile56} alt="" className='rounded-5' />
                                                <span className='font-poppins font-bold text-[29px] leading-none tracking-normal'>Seychelles</span>
                                            </div>
                                            <div className='flex  items-center gap-1 justify-center font-poppins font-medium text-sm capitalize leading-none tracking-normal text-[#909090]'>
                                                Expired
                                            </div>

                                        </div>
                                        <div className="flex justify-between  col-12 py-2">
                                            <p className="m-0 font-poppins font-normal text-xl leading-10 tracking-[2%]  text-[#909090]">Remaining Data<br />Expires in</p>
                                            <p className="m-0 font-poppins font-medium text-[20px] leading-[40px] tracking-[0.02em] text-right text-[#909090]">4.7/10 GB <br />
                                                14/04/2024
                                            </p>
                                        </div>

                                    </div>

                                    <u className='font-poppins font-medium text-sm capitalize leading-none tracking-normal text-[#FE5F00] flex justify-center lg:justify-start'>Load More Plans</u>
                                    <div className=' text-white flex justify-center lg:justify-start'>
                                        <button className='font-poppins font-semibold text-[20px] leading-[100%] tracking-[0em] text-center p-2 rounded-5 bg-[#FE5F00]'>Buy a New eSIM</button>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* box 2 */}

                        {activeBox === "box2" && (
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5  '>
                                <img src={mobile57} alt="" />
                                <div className='gap-3 flex flex-column '>
                                    <span className='font-poppins font-bold text-[29px] leading-[100%] tracking-[0%] flex justify-center lg:justify-start'>eSIM Data Plans</span>
                                    <div className='bg-white border shadow rounded p-3  '>
                                        <div className='col-12 flex justify-between border-b border-gray-400 pb-2 '>
                                            <div className='flex items-center gap-2'>
                                                <img src={mobile58} alt="" className='rounded-5' />
                                                <span className='font-poppins font-bold text-[29px] leading-none tracking-normal'>Morocco</span>
                                            </div>
                                            <div className='flex  items-center gap-1 justify-center text-[#19B820]'>
                                                Ready

                                            </div>

                                        </div>
                                        <div className="flex justify-between  col-12 py-2">
                                            <span className="font-poppins font-normal text-xl leading-10 tracking-[2%]  text-[#909090]">Remaining Data<br />Activate Before</span>
                                            <span className="font-poppins font-bold text-[20px] leading-[40px] tracking-[0.02em] text-right text-[#100C0A]">4.7/10 GB <br />
                                                <span className='font-poppins font-normal text-[20px] leading-[40px] tracking-[0.02em] text-right text-[#909090]'>14/04/2024</span>
                                            </span>
                                        </div>

                                    </div>


                                    <p className='font-poppins font-normal text-[17px] leading-[32px] tracking-[0.02em] text-[#2F2F2F]  '>The data plan will be activated automatically when you arrive at your destination.</p>
                                    <div className=' text-white flex justify-center lg:justify-start'>
                                        <button className='font-poppins font-semibold text-[20px] leading-[100%] tracking-[0em] text-center p-2 rounded-5 bg-[#FE5F00]'>Buy a New eSIM</button>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>




                </div>

            </section>
            <section className='container-fluid py-5'>
                <div className="container flex justify-center">
                    <div className="col-lg-8 col-12  flex justify-center  flex-column">
                        <div className='flex flex-column justify-center  '>
                            <p className='m-0 font-poppins font-medium text-[25px] leading-[100%] tracking-[0] text-center text[#3C3D44]'>Install</p>
                            <p className='m-0 font-poppins font-bold lg:text-[60px] md:text-50 sm:text-40 text-35 leading-[100%] tracking-[0] text-center'>Before Your Trip</p>







                        </div>



                        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-3 py-4'>
                            <div className='shadow rounded flex flex-column justify-center items-center'  >
                                <div className='col-12 bg-black rounded-tl rounded-tr m-0 text-white font-poppins font-semibold text-[22px] leading-[47px] tracking-[0.02em] text-center flex items-center justify-center gap-2'>  <BsQrCode size={15} /> QR Code</div>
                                <div className='col-10 flex justify-center flex-column text-center'>
                                    <p>
                                        Install the eSIM on your Apple device with <b>iOS 17.4 or higher by pressing the QR code</b> (open with Safari browser).
                                    </p>
                                    <div className=' flex justify-center'>
                                        <img src={mobile59} alt="" className='' />
                                    </div>
                                    <p>
                                        For other devices, simply scan the QR code in your mobile device's Settings.
                                    </p>


                                </div>


                            </div>


                            <div className='shadow rounded flex flex-column justify-center items-center'  >
                                <p className='col-12 bg-[#FE5F00] rounded-tl rounded-tr m-0 text-white font-poppins font-semibold text-[22px] leading-[47px] tracking-[0.02em] text-center  flex items-center justify-center gap-1'> <SlScreenSmartphone size={15} />  Installation codes</p>
                                <div className='col-10 flex justify-center flex-column text-center gap-3'>
                                    <p className='pt-3'>
                                        <b>Use the codes</b> that you find below and follow the steps that appear in the installation guide.
                                    </p>
                                    <div className='grid grid-cols-6 col-12  justify-between p-2 border rounded-4 '>
                                        <div className='border-r border-gray-400 col-span-5 '>
                                            <p className='m-0 p-0 text-start font-poppins font-normal text-[16px] leading-[40px] tracking-[0.02em] text-[#909090]'>SM-DP+ Address
                                                <br />
                                            </p>
                                            <p className='m-0 p-0 text-start font-poppins font-semibold text-[18px] leading-[32px] tracking-[0.02em] text-[#2F2F2F]'>ecprsp.eastcompeace.com
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <MdContentCopy size={20} />

                                        </div>

                                    </div>

                                    <div className='grid grid-cols-6 col-12  justify-between p-2 border rounded-4 mb-4'>
                                        <div className='border-r border-gray-400 col-span-5 '>
                                            <p className='m-0 p-0 text-start font-poppins font-normal text-[16px] leading-[40px] tracking-[0.02em] text-[#909090]'>Activation code
                                                <br />
                                            </p>
                                            <p className='col-11 m-0 p-0 text-start font-poppins font-semibold text-[18px] leading-[32px] tracking-[0.02em] text-[#2F2F2F] truncate'>1132A354FFF8481C8B6F39Cdfklslkfhdkjfksdjcnfkjdcn
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <MdContentCopy size={20} />

                                        </div>

                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>
                </div>

            </section>

            <section className='container-fluid py-5 bg-[#FFF1E8]'>
                <div className="container justify-center flex">
                    <div className="col-lg-8 col-12 ">
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5  py-5 '>
                            <div className='bg-white h-[320px] max-auto border [clip-path:polygon(0_0,100%_0,100%_70%,70%_100%,0_100%)] flex items-center justify-center'>
                                {/* <img src={mobile60} alt="" className='absalote' /> */}
                                <p className="p-5 text-center py-5 m-5font-poppins font-normal text-[20px] leading-[32px] tracking-[0.02em] ">
                                    + New eSIM
                                </p>
                            </div>

                            <div className='flex flex-col gap-2  text-center'>
                                <p className='font-poppins font-medium text-[20px] leading-[100%] tracking-[0] p-0 m-0   lg:text-left'>When should I get an</p>
                                <p className='font-poppins font-bold text-[40px] leading-[100%] tracking-[0] m-0 lg:text-left'>Additional eSIM?</p>
                                <p className='font-poppins font-normal text-[18px] leading-[32px] tracking-[0.02em] m-0 lg:text-left'>You can top up an existing eSIM with any destination data plan. Getting a new eSIM  comes in handy if you want to use the same eSIMFOX account for management of multiple  eSIMs across devices.</p>
                                <div className='flex justify-center lg:justify-start '>
                                    <button className='flex bg-[#FE5F00] text-white  rounded-5 px-3 py-2 !font-poppins !font-semibold !text-[22px] !leading-[100%] tracking-[0] text-center '>
                                        Get a new eSIM Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className='container-fluid py-5'>
                <div className="container flex justify-center">
                    <div className="col-lg-8 col-md-8 col-12  ">
                        <div className='flex flex-col'>
                            <div className='flex  justify-center lg:justify-start'>
                                <button className='flex !lg:justify-start !lg:text-start  items-center gap-2 font-poppins font-normal !text-[15px] !leading-[100%] tracking-[0]'><FaArrowLeftLong /> Back</button>
                            </div>
                            <div className=' grid lg:grid-cols-5 grid-cols-1 gap-2 justify-between items-end'>
                                <div className='col-span-3 text-center'>
                                    <p className='m-0 p-0 font-poppins lg:text-left font-bold xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[] text-[30px]  leading-[100%] tracking-[0]'>Purchase History</p>
                                </div>
                                <div className='col-span-2 grid grid-cols-3 border rounded-5 p-1'>

                                    <button className={` runded-5  p-1  ${activeBox1 === "button1" ? "bg-[#FE5F00] rounded-5 text-white" : " text-black"}`} onClick={() => setActiveBox1("button1")}>Plans</button>
                                    <button className={` runded-5  p-1  ${activeBox1 === "button2" ? "bg-[#FE5F00] rounded-5 text-white" : " text-black"}`} onClick={() => setActiveBox1("button2")}>Numbers</button>


                                    <button className={` runded-5  p-1  ${activeBox1 === "button3" ? "bg-[#FE5F00] rounded-5 text-white" : " text-black"}`} onClick={() => setActiveBox1("button3")}>Balance</button>


                                </div>
                            </div>
                        </div>
                        <div className=" col-12   mt-5 flex  justify-center ">
                            <div className="col-lg-6  col-12 grid gap-3">
                                {/* box-1 */}
                                <div className='bg-white  shadow rounded p-3  '>
                                    <div className='col-12 flex justify-between border-b border-gray-400 pb-2 '>
                                        <div className='flex items-center gap-2'>
                                            <img src={mobile61} alt="" className='rounded-5' />
                                            <span className='font-poppins font-bold lg:text-[25px] text-[20px]  leading-none tracking-normal'>Germany</span>
                                        </div>
                                        <div className='flex   gap-1 items-center text-[#909090]'>3 GB • 5 Days

                                        </div>

                                    </div>
                                    <div className="flex justify-between  col-12 py-2">
                                        <div>
                                            <span className="font-poppins font-normal text-[15px] leading-[30px] tracking-[2%]  text-[#909090] m-0 p-0">Activate Later <br />Ycoins Used <br />Paid </span>
                                            <div className='flex'>
                                                <span className="font-poppins font-normal text-[15px] leading-[30px] tracking-[2%]  text-[#909090] m-0 p-0 flex items-center gap-1"><CiCalendar size={20} className='text-[#FE5F00]' /> 17 August 2024 </span>
                                            </div>
                                        </div>

                                        <span className="font-poppins font-bold text-[15px] leading-[30px] tracking-[0.02em] text-right text-[#100C0A]">No <br />-800 Ycoins
                                            <br /> $0.00
                                        </span>
                                    </div>

                                </div>
                                {/* box-2 */}
                                <div className='bg-white  shadow rounded p-3  '>
                                    <div className='col-12 flex justify-between border-b border-gray-400 pb-2 '>
                                        <div className='flex items-center gap-2'>
                                            <img src={mobile61} alt="" className='rounded-5' />
                                            <span className='font-poppins font-bold lg:text-[25px] text-[20px] leading-none tracking-normal'>Germany</span>
                                        </div>
                                        <div className='flex  items-center gap-1  text-[#909090]'>   3 GB • 5 Days
                                        </div>

                                    </div>
                                    <div className="flex justify-between  col-12 py-2">
                                        <div>
                                            <span className="font-poppins font-normal text-[15px] leading-[30px] tracking-[2%]  text-[#909090] m-0 p-0">Activate Later <br />Ycoins Used <br />Paid </span>
                                            <div className='flex'>
                                                <span className="font-poppins font-normal text-[15px] leading-[30px] tracking-[2%]  text-[#909090] m-0 p-0 flex items-center gap-1"><CiCalendar size={20} className='text-[#FE5F00]' /> 23 July 2024 </span>
                                            </div>
                                        </div>

                                        <span className="font-poppins font-bold text-[15px] leading-[30px] tracking-[0.02em] text-right text-[#100C0A]">No <br />-700 Ycoins
                                            <br /> $1.00
                                        </span>
                                    </div>

                                    <div className='border rounded-5 bg-black text-[#FFFFFF] felx items-center justify-center text-center'>
                                        <button className='p-1 font-poppins font-semibold text-[22px] leading-[100%] tracking-[0] text-center'>Create Invoice</button>
                                    </div>

                                </div>




                            </div>

                        </div>

                        <div className='col-12 mt-5 flex  justify-center '>
                            <div className="col-lg-6 col-12 ">
                                <div className='flex  justify-center lg:justify-start'>
                                    <button className='flex !lg:justify-start !lg:text-start  items-center gap-2 font-poppins font-normal !text-[15px] !leading-[100%] tracking-[0]'><FaArrowLeftLong /> Back</button>
                                </div>
                                <div className='flex  justify-center lg:justify-start'>
                                    <p className='m-0 p-0 font-poppins lg:text-left font-bold xl:text-[45px] lg:text-[35px] md:text-[35px] sm:text-[] text-[30px]  leading-[100%] tracking-[0] !lg:justify-start !lg:text-start'>Account Settings</p>
                                </div>
                                <div className='mt-4'>
                                    <input type="search" placeholder='alae.namse@gmail.com' name="" id="" className='border rounded-5 col-12 p-2 font-poppins font-medium text-[20px] leading-[40px] tracking-[0.02em] text-black   bg-[#E6E6E6] px-3   ' />
                                    <p className='m-0 font-poppins font-normal text-[11px] leading-[100%] tracking-[0.02em] mt-2'>After changing your email address, you must authorize with your new email address  </p>
                                </div>
                                <div className='bg-white  shadow rounded p-3  mt-5'>
                                    <div className='col-12 flex justify-between border-b border-gray-400 pb-2 '>
                                        <div className='flex items-center gap-2'>
                                            {/* <img src={mobile61} alt="" className='rounded-5' /> */}
                                            <span className='font-poppins font-medium text-[15px] leading-[0px] tracking-[0.02em] m-0 p-0 text-[#100C0A]'>FOX User ID</span>
                                        </div>
                                        <div className='flex  items-center gap-1  text-[#909090]'>   1237540  <MdContentCopy className='text-black' size={20} />
                                        </div>

                                    </div>
                                    <div className="flex justify-between  col-12 py-2">
                                        <div>
                                            <span className='font-poppins font-medium text-[15px] leading-[0px] tracking-[0.02em] m-0 p-0 text-[#100C0A]'>Cashback 5%</span>

                                        </div>

                                        <div className='flex  items-center gap-1  '>    <IoMdInformationCircleOutline className='color-black' size={20} />
                                        </div>
                                    </div>



                                </div>

                                <div className='flex justify-center my-5 col-12  '>
                                    <button className='col-6  bg-[#FE5F001A] p-3 rounded-5 text-[#FE5F00] font-poppins font-semibold text-[22px] leading-[100%] tracking-[0] text-center'>Delete Account</button>

                                </div>




                            </div>

                        </div>


                    </div>

                </div>

            </section>

            <section className='container-fluid my-5 bg-gradient-to-t from-[#FFFFFF] to-[#FFF1E9] '>1
                <div className="container flex justify-center ">

                    <div className="col-lg-6 col-md-8 col-12 shadow rounded my-5 bg-white grid justify-center ">

                        <div className='flex justify-center'>
                            <img src={mobile62} alt="" className='' />
                        </div>


                        <div>
                            <p className='m-0 font-poppins font-bold xl:text-[60px] lg:text-[55px] md:text-[55px] sm:text-[40px] text-[30px] leading-[100%] tracking-[0] text-center'>
                                Welcome aboard!
                            </p>
                            <p className='font-poppins font-normal text-[18px] leading-[32px] tracking-[0.02em] text-center'>
                                Track eSIM data usage, and sync with other devices.
                            </p>
                        </div>


                        <div className='grid lg:grid-cols-2  gap-2 grid-cols-1 mb-4 '>

                            <div className="flex border items-center justify-center gap-2 p-2  rounded-full">
                                <FaApple size={20} />
                                <span className="font-poppins font-normal text-lg/8 tracking-[0.02em]">Sign In with Apple</span>
                            </div>
                            <div className="flex border items-center justify-center gap-2 p-2 rounded-full">
                                <FcGoogle size={20} />
                                <span className="font-poppins font-normal text-lg/8 tracking-[0.02em]">Sign In with Google</span>
                            </div>






                        </div>
                        <div className='grid grid-cols-21 justify- '>
                            <hr className='col-span-10' /><span className='col-span-1  '>OR</span> <hr className='col-span-10' />
                            {/* <div className='border'></div>
                            <div className=''>or</div>
                            <div className='border'></div> */}
                        </div>
                        <div className='col-span-1 border justify-center text-center items-center rounded-5 bg-[#FE5F00] text-white p-2 mt-4 '>
                            <button className='!text-center'>Explore Plans</button>
                        </div>
                        <div className='mt-2 text-center'>
                            <p>Already have an account? <b>Login</b></p>
                        </div>



                    </div>
                </div>


            </section>
            <footer className="container-fluid bg-black py-5">
                <div className="container mt- ">
                    <div className="row  gap-2 mb-4 py-5  flex-wrap border-bottom">
                        <div className=" col-lg-4 col-sm-12 ">
                            <div className="d-grid  justify-center lg:justify-start">
                                <div >
                                    <img src={mobile37} alt="" />
                                </div>
                                <div className="py-3 justify-center d-flex lg:justify-start">
                                    <button className="text-white btn5 p-2 px-3 rounded-5">Get My eSIM</button>
                                </div>
                                <div className="d-flex gap-1 justify-center d-flex lg:justify-start ">
                                    <div className="p-2 bg-gray-800 rounded-3 ">
                                        <FaFacebookF className="text-white   " />
                                    </div>
                                    <div className="p-2 bg-gray-800 rounded-3">
                                        <FaYoutubeSquare className="text-white " />

                                    </div>
                                    <div className="p-2 bg-gray-800 rounded-3">
                                        <AiFillTikTok className="text-white " />
                                    </div>
                                    <div className="p-2 bg-gray-800 rounded-3">
                                        <FaSquarePinterest className="text-white " />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="what  col-lg-7 col-sm-12 gap-2 row-cols-lg-4 row-cols-sm-1 flex-wrap  lg:justify-between  flex   gap-5 ">
                            <div className=" lg:text-start sm:text-center ">
                                <h3 className=" text-white  text-center">TopDestinations</h3>
                                <div className="list-none text-gray-400  d-lg-grid flex gap   row-cols-sm-2 row-cols-lg-1 flex-wrap   ">
                                    <li>Europe</li>
                                    <li>USA</li>
                                    <li>Japan</li>
                                    <li>Turkey</li>
                                    <li>Spain</li>
                                    <li>France</li>
                                    <li>TheWorld</li>
                                </div>

                            </div>



                            <div className=" lg:text-start sm:text-center ">
                                <h3 className=" text-white text-lg-start  text-center">Legal</h3>
                                <div className="list-none text-gray-400  d-lg-grid flex gap   row-cols-sm-2 row-cols-lg-1 flex-wrap   ">
                                    <li>Terms and Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookies Policy</li>
                                    <li>Refund Policy</li>
                                    <li>Website Terms of Use</li>
                                </div>

                            </div>


                            <div className=" lg:text-start sm:text-center ">
                                <h3 className=" text-white text-lg-start  text-center">Interest</h3>
                                <div className="list-none text-gray-400  d-lg-grid flex gap   row-cols-sm-2 row-cols-lg-1 flex-wrap   ">
                                    <li>What is an eSIM</li>
                                    <li>eSIM compatible devices</li>
                                    <li>How to install</li>
                                    <li>FAQs</li>
                                    <li>Blog</li>
                                </div>

                            </div>



                        </div>


                    </div>

                    <p className=" text-center justify-center text-gray-400 d-flex flex-wrap">Made with  <FaHeart color="red" className="mt-2 m-1 " />    by people who love to travel. <span className="text-white font-bold px-1">eSIM</span> Fox 2024 ®
                    </p>


                </div>

            </footer>

        </>
    )
}
