import React from 'react'
import Nav from "./nav"
import mobile50 from './img/image.svg'
import { Md5G } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaEuroSign } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoMdWifi } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { IoMdFingerPrint } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import { IconStack2 } from '@tabler/icons-react';
import { FaSimCard } from "react-icons/fa";
import Footer from './footer';
import { FcGoogle } from "react-icons/fc";







export default function App3() {
  return (
    <>
      <section className="container-fluid">
        <section className="container-fluid page-2 py-5 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF1E9_100%)]">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Nav />

                <section className="col-12 py-5 flex justify-center">
                  <div className=" flex flex-column items-center col-lg-7 col-12 ">



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

                      <div className="  shadow  bg-white rounded-4 p-4 gap-3 flex flex-nowrap items-start">
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

                      <div className=" shadow bg-white rounded-4 p-4 gap-3 flex flex-nowrap items-start">
                        <div className="text-[rgba(254,95,0,1)] p-3 rounded-5 bg-[rgba(255,241,232,1)]">
                          <FaEuroSign size={35} />
                        </div>

                        <div className="flex flex-column m-none leading-none p-none">
                          <p className="font-poppins font-normal text-[17px] leading- tracking-[2%]">Price</p>

                          <p className="font-poppins font-semibold text-3xl leading-none tracking-tight ">10.99 €</p>
                        </div>


                      </div>
                    </div>


                    <div className="shadow py-3 col-12  mt-4 bg-white flex flex-column rounded-3 justify-center items-center">
                      <div className="py-3 font-poppins font-semibold text-[25px] leading-[100%] tracking-[2%] text-center">Sign Up or Log In</div>

                      <div className=" col-lg-8  col-11 grid lg:grid-cols-2 grid-cols-1 gap-2">
                        <div className="flex border items-center justify-center gap-2 p-2 px-4 rounded-full">
                          <FaApple size={20} />
                          <span className="font-poppins font-normal text-lg/8 tracking-[0.02em]">Sign In with Apple</span>
                        </div>
                        <div className="flex border items-center justify-center gap-2 p-2 px-4 rounded-full">
                          <FcGoogle size={20} />
                          <span className="font-poppins font-normal text-lg/8 tracking-[0.02em]">Sign In with Google</span>
                        </div>
                      </div>
                      <p className="col-lg-10 col-11 font-poppins font-normal text-[18px] leading-8 tracking-[0.02em] text-center">We promise to only send you important emails about the service quality.
                        You'll also receive news about special offers, but if you don't want to get those, drop us as a note at support@esimfox.com.</p>
                    </div>



                  </div>


                </section>





              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid py-5 flex justify-center">
          <div className="container flex justify-center">
            <div className="col-lg-7 col-12 ">
              <div className=" flex flex-column items-center justify-center">

                <p className="text-center font-poppins font-normal lg:text-[25px] text-[19px] leading-none text-center text-[#3c3d44]">  eSIM Features and</p>
                <p className="font-poppins font-bold lg:text-6xl text-[30px]  leading-none tracking-normal text-center text-[rgb(16,12,10)]">Specifications for USA</p>

                <div className="flex  flex-shrink py-1 Additional    justify-between  py- border  col-lg-8 col-md-8  rounded-full mt-2">
                  <button
                    className=" px-3 py-1 whitespace-nowrap text-star  font-poppins font-bold not-italic !lg:text-[20px] !text-[13px] text-gray-600 leading-none tracking-normal ">Additional Information</button>
                  <button
                    className="px-3 font-poppins font-bold not-italic !lg:text-[20px] !text-[13px] text-gray-600 leading-none tracking-normal text-center">Description</button>
                  <button className="px-3  font-poppins font-bold not-italic !lg:text-[20px] !text-[13px] text-gray-600 leading-none tracking-normal text-center">Compatibilityn</button>

                </div>

                <div className="col-lg-10   row  justify-between   row-cols-lg-2 flex-wrap  flex my-5 row-cols-sm-1   ">
                  <div className="col-12 col-lg-5 gap-3">
                    <div className="  flex items-start gap-2">
                      <div className=" bg-[rgba(255,241,232,1)] mt-2 p-2  rounded-full ">
                        <FaRegCompass size={20} className="text-[rgba(254,95,0,1)] " />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-[22px] leading-[22px] tracking-[0.02em]">work <br />
                          <span className="font-poppins font-normal text-[17px] leading-[17px] tracking-[0em]">Türkiye</span></p>
                      </div>

                    </div>

                    <div className="  flex items-start gap-2">
                      <div className=" bg-[rgba(255,241,232,1)] mt-2 p-2  rounded-full ">
                        <PiTelegramLogoLight size={20} className="text-[rgba(254,95,0,1)] " />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-[22px] leading-[22px] tracking-[0.02em]"> Plan Type <br />
                          <span className="font-poppins font-normal text-[17px] leading-[17px] tracking-[0em]">Data only</span></p>
                      </div>

                    </div>


                    <div className="  flex items-start gap-2">
                      <div className=" bg-[rgba(255,241,232,1)] mt-2  p-2  rounded-full ">
                        <IoMdWifi size={20} className="text-[rgba(254,95,0,1)] " />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-[22px] leading-[22px] tracking-[0.02em]">Mobile Hotspot<br />
                          <span className="font-poppins font-normal text-[17px] leading-[17px] tracking-[0em]">Available</span></p>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-7 ">
                    <div className="  flex items-start  gap-2">
                      <div className=" bg-[rgba(255,241,232,1)] mt-2  p-2 rounded-full ">
                        <GiNetworkBars size={20} className="text-[rgba(254,95,0,1)] " />
                      </div>
                      <div className="">

                        <p className=" font-poppins font-semibold text-[22px] leading-[22px] tracking-[0.02em]"> <span>Networks </span>
                          <span className="font-poppins font-semibold text-[15px] leading-[25px] tracking-[0] text-center  text-[rgba(254,95,0,1)] bg-[rgba(255,241,233,1)] rounded-full   py-1 px-3 ">Best Coverage</span>
                          <br />

                          <t className="  px-2 rounded-full font-poppins font-normal text-sm leading-[15px] tracking-normal bg-[rgba(242,242,242,1)] ">Turk Telekom</t>
                          <t className=" m-2  px-2 rounded-full font-poppins font-normal text-sm leading-[15px] tracking-normal bg-[rgba(242,242,242,1)]">Turkcell</t>
                        </p>
                      </div>

                    </div>

                    <div className="  flex items-center gap-2">
                      <div className=" bg-[rgba(255,241,232,1)]  p-2  rounded-full ">
                        <IoMdFingerPrint size={20} className="text-[rgba(254,95,0,1)] " />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-[22px] leading-[22px] tracking-[0.02em]">eKYC (ID VERIFICATION) <br />
                          <span className="font-poppins font-normal text-[17px] leading-[17px] tracking-[0em]">Not Required</span></p>
                      </div>

                    </div>
                    <div className="col-11 col-lg-12    flex items-start  gap-2">
                      <div className="  bg-[rgba(255,241,232,1)] mt-2  p-2  rounded-full ">
                        <BsLightningCharge size={20} className="text-[rgba(254,95,0,1)] " />
                      </div>
                      <div className="col-12">
                        <p className="font-poppins font-semibold text-[22px] leading-[22px] tracking-[0.02em]">Activation Policy <br />
                          <span className="font-poppins font-normal text-[17px] leading-[17px] tracking-[0em]">The validity period starts when the SIM connects to any supported networks</span></p>
                      </div>

                    </div>
                  </div>







                </div>
              </div>

            </div>



          </div>
        </section>


        <section className="container-fluid pb-5 py-5 bg-gradient-to-b from-[#FFFFFF] to-[#FFF1E9]">
          <div className="container flex justify-center">
            <div className="col-lg-11 col-12 flex flex-column justify-center ">
              <div className="col-12 grid justify-center">
                <div className=" ">
                  <p className="font-poppins font-normal lg:text-[25px] text-[19px] lg:leading-[100%] leading-[19px] tracking-[0] text-center">Why choose an</p>
                  <p className="font-poppins font-bold lg:text-[60px] text-[35px] lg:leading-[100%] leading-[35px] tracking-[0] text-center">eSIM Fox Turkey?</p>
                </div>
              </div>
              <div className="col-12 grid lg:grid-cols-4  grid-col-1 gap-3  mt-3">


                <div className=" shadow  rounded-3  p-3 gap-2 flex flex-column bg-white">
                  <div className="w-[53px] h-[53px]  bg-[rgba(255,241,232,1)] mt-2  py-2 flex justify-center  rounded-full items-center ">
                    <BsListCheck size={30} className="w-[21px] h-[29px] border-[1.5px] text-[rgba(254,95,0,1)] " />
                  </div>
                  <p className="  font-poppins font-semibold text-[22px] leading-[100%] tracking-[0.02em]">
                    No roaming charges
                  </p>
                  <p className="font-poppins font-normal lg:text-[17px] leading-32px tracking-2">
                    Roaming charges can add up quickly. Get a prepaid data plan for Turkey & stay in control of your phone bill.
                  </p>
                </div>



                <div className="shadow rounded-3 p-4 gap-2 flex flex-column bg-white">
                  <div className="w-[53px] h-[53px]  bg-[rgba(255,241,232,1)] mt-2  py-2 flex justify-center  rounded-full items-center ">
                    <BsLightningCharge className="w-[21px] h-[29px]  text-[rgba(254,95,0,1)] " />
                  </div>
                  <p className="whitespace-nowrap font-poppins font-semibold lg:text-[22px] lg:leading-[100%] tracking-[0.02em]">
                    Connect in a few taps
                  </p>
                  <p className=" col-11 font-poppins font-normal lg:text-[17px] leading-32px tracking-2">
                    Activate your eSIM before your flight — your data will be ready to use when you land.
                  </p>
                </div>



                <div className="shadow rounded-3 p-4  gap-2 flex flex-column bg-white">
                  <div className="w-[53px] h-[53px]   bg-[rgba(255,241,232,1)] mt-2  py-2 flex justify-center  rounded-full items-center ">
                    <IconStack2 stroke={2} className="w-[21px] h-[29px]  text-[rgba(254,95,0,1)] " />


                  </div>
                  <p className=" font-poppins font-semibold lg:text-[22px] lg:leading-[100%] tracking-[0.02em]">
                    Flexible plans
                  </p>
                  <p className="font-poppins font-normal lg:text-[17px] leading-32px tracking-2">
                    Choose from several affordable data plans for Turkey. Get as much or as little data as you need.
                  </p>
                </div>

                <div className="shadow rounded-3 p-4 gap-2 flex flex-column bg-white">
                  <div className="w-[53px] h-[53px]  bg-[rgba(255,241,232,1)] mt-2  py-2 flex justify-center  rounded-full items-center ">
                    <FaSimCard className="w-[21px] h-[29px]  text-[rgba(254,95,0,1)] " />

                  </div>
                  <p className="font-poppins font-semibold lg:text-[22px] lg:leading-[100%] tracking-[0.02em]">
                    One eSIM for all travel
                  </p>
                  <p className="font-poppins font-normal lg:text-[17px] leading-32px tracking-2">
                    Add new destinations to your existing eSIM Fox through the eSIM Fox app - no new eSIMs needed.
                  </p>
                </div>






              </div>

            </div>


          </div>


        </section>


        <Footer />

      </section>
    </>
  )
}
