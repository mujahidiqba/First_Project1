
import mobile41 from './img/Rectangle (33).svg';
// page-2
import mobile42 from './img/Rectangle (34).svg'
import { CgMenuLeftAlt } from "react-icons/cg";
import 'flowbite';
import mobile43 from './img/istanbul-s-ocean-with-cruise-ship 1.svg'
import mobile44 from './img/Rectangle (35).svg'
import { CiCircleCheck } from "react-icons/ci";
import { Md5G } from "react-icons/md";
import { GrRefresh } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import mobile45 from './img/Group 31.svg'
import mobile46 from './img/Group 35.svg'
import mobile47 from './img/Group 33.svg'
import mobile48 from './img/Group 34.svg'
import { FaRegCompass } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { GiNetworkBars } from "react-icons/gi";
import { IoMdWifi } from "react-icons/io";
import { BsBox, BsLightningCharge } from "react-icons/bs";
import { IoMdFingerPrint } from "react-icons/io";
import mobile49 from './img/dl.beatsnoop.com-kUN3Rl5KmP 1.svg'
import { BsListCheck } from "react-icons/bs";
import { IconStack2 } from '@tabler/icons-react';
import { FaSimCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from './footer';
import Nav from "./nav"


import { FaCheck } from "react-icons/fa6";
import { useState } from 'react';




const App2 = () => {
  const [activeBox, setActiveBox] = useState("box");

  return (
    <>
      <Nav />
      <section className="container-fluid page-2 py-5 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF1E9_100%)]">
        <div className="container">
          <div className="row">

            <div className="col-12 flex justify-center">




              <div className="grid gap-5 lg:grid-cols-11 grid-cols-1 py-5 ">
                <div className="lg:col-span-4 col-span-8 ">
                  <img className="rounded-4 shadow" src={mobile43} alt="" />
                </div>

                <div className="lg:col-span-7 col-span-8 ">
                  <div className="flex gap-3 items-center ">
                    <img className="" src={mobile44} alt="" />
                    <p className="font-poppins font-bold text-[35px] lg:text-5xl  items-end  leading-75px tracking-3%">eSIM Turkey</p>
                  </div>
                  <div className="pt-3">
                    <div className="list-none  gap-1 items-center">
                      <li className="flex items-start gap-1">
                        <i><CiCircleCheck size={25} color="rgba(254, 95, 0, 1)" /></i><span>Affordable data plans — starting from $3.99.</span>
                      </li>

                      <li className="flex items-start gap-1">
                        <i><CiCircleCheck size={25} color="rgba(254, 95, 0, 1)" /></i><span>Reliable connection from Turkey’s best networks.
                        </span>
                      </li>
                      <li className="flex items-start gap-1">
                        <i><CiCircleCheck size={25} color="rgba(254, 95, 0, 1)" /></i><span>
                          You will only get mobile data and keep your original phone number.
                        </span>
                      </li>
                      <li className="flex items-start gap-1">
                        <i><CiCircleCheck size={25} color="rgba(254, 95, 0, 1)" /></i><span>
                          Works with all smartphones with eSIM technology.</span>
                      </li>


                      <div className="flex flex-wrap py-3 Hotspot gap-1">
                        <button className="border flex items-center gap-1  text-center px-3 py-1 rounded-5"><CiCircleCheck size={20} />
                          Hotspot
                        </button>

                        <button className="border flex items-center gap-2  text-center px-3 py-1 rounded-5">
                          Avea <i className="border items-end"><Md5G size={10} /></i>
                        </button>
                        <button className="border flex items-center gap-2  text-center px-3 py-1 rounded-5">
                          Vodafone <i className="border items-end"><Md5G size={10} /></i>
                        </button>
                        <button className="border flex items-center gap-2  text-center px-3 py-1 rounded-5">
                          Turkcell <i className="border items-end"><Md5G size={10} /></i>
                        </button>
                        <button className="border flex items-center gap-2  text-center px-3 py-1 rounded-5">
                          Avea <i className="border items-end"><Md5G size={10} /></i>
                        </button>

                      </div>
                      <div>
                        <div>
                          <h3 className="font-sans font-bold text-[30px] leading-[100%] tracking-[0%] "> Choose your Mobile Data Esim Turkey</h3>
                        </div>








                        <div className="grid lg:grid-cols-2 grid-cols-1  gap-4">

                          <div className={` ${activeBox === "box" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] col-lg-12   col-sm-12 p-2 bg-white rounded-3" : "shadow col-lg-12   col-sm-12 p-2 bg-white rounded-3 gb "}`} onClick={() => setActiveBox("box")} >
                            <div className="flex items-start justify-between round   leading-1  ">
                              <p className="font-bold text-xl leading-none">2 GB Data Turkey</p>

                              <div className='justify-end flex ' >
                                <div className={`${activeBox === "box" ? " bg-[rgba(254,95,0,1)]  text-white border flex  items-center justify-center     h-[20px] w-[20px] rounded-full" : "border flex  items-center justify-center     h-[20px] w-[20px] rounded-full"}`} onClick={() => setActiveBox("box")} >
                                  {activeBox === "box" && <FaCheck size={10} className=" " />}
                                </div>
                              </div>
                            </div>

                            <p className="border-bottom font-poppins font-normal text-base16 tracking-wide2">Prepaid eSIM Turkey with LTE | 4G | 5G Mobile Data for Tourists</p>
                            <div className="flex justify-between ">
                              <p className="font-poppins font-medium text-[15px] leading-[15px] tracking-normal text-[rgba(154,151,150,1)] ">4,50€ per GB <br />15 Days Validity</p>
                              <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€8.99</p>
                            </div>

                          </div>


                          <div className={` ${activeBox === "box1" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] col-lg-12   col-sm-12 p-2 bg-white rounded-3" : "shadow col-lg-12   col-sm-12 p-2 bg-white rounded-3 gb "}`} onClick={() => setActiveBox("box1")}>
                            <div className="flex items-start justify-between round   leading-1  ">
                              <p className="font-bold text-xl leading-none">5 GB Data Turkey</p>
                              <div className='justify-end flex ' >
                                <div className={`${activeBox === "box1" ? " bg-[rgba(254,95,0,1)]  text-white border flex  items-center justify-center     h-[20px] w-[20px] rounded-full" : "border flex  items-center justify-center     h-[20px] w-[20px] rounded-full"}`} onClick={() => setActiveBox("box1")} >
                                  {activeBox === "box1" && <FaCheck size={10} className=" " />}
                                </div>
                              </div>
                            </div>

                            <p className="border-bottom font-poppins font-normal text-base16 tracking-wide2">Travel eSIM Turkey with LTE | 4G | 5G Mobile Data for Tourists</p>
                            <div className="flex justify-between ">
                              <p className="font-poppins font-medium text-[15px] leading-[15px] tracking-normal text-[rgba(154,151,150,1)] ">2,20€ per GB <br />30 Days Validity</p>
                              <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€10.99</p>
                            </div>

                          </div>

                          <div className={` ${activeBox === "box2" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] col-lg-12   col-sm-12 p-2 bg-white rounded-3" : "shadow col-lg-12   col-sm-12 p-2 bg-white rounded-3 gb "}`} onClick={() => setActiveBox("box2")}>
                            <div className="flex items-start justify-between round   leading-1  ">
                              <p className="font-bold text-xl leading-none">10 GB Data Turkey</p>
                              <div className='justify-end flex ' >
                                <div className={`${activeBox === "box2" ? " bg-[rgba(254,95,0,1)]  text-white border flex  items-center justify-center     h-[20px] w-[20px] rounded-full" : "border flex  items-center justify-center     h-[20px] w-[20px] rounded-full"}`} onClick={() => setActiveBox("box2")} >
                                  {activeBox === "box2" && <FaCheck size={10} className=" " />}
                                </div>
                              </div>
                            </div>

                            <p className="border-bottom font-poppins font-normal text-base16 tracking-wide2">Prepaid eSIM Turkey with LTE | 4G | 5G Mobile Data
                              for Tourists</p>
                            <div className="flex justify-between ">
                              <p className="font-poppins font-medium text-[15px] leading-[15px] tracking-normal text-[rgba(154,151,150,1)] ">1,80€ per GB <br />30 Days Validity</p>
                              <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€17.99</p>
                            </div>

                          </div>

                          <div className={` ${activeBox === "box3" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] col-lg-12   col-sm-12 p-2 bg-white rounded-3" : "shadow col-lg-12   col-sm-12 p-2 bg-white rounded-3 gb "}`} onClick={() => setActiveBox("box3")}>
                            <div className="flex items-start justify-between round   leading-1  ">
                              <p className="font-bold text-xl leading-none">20 GB Data Turkey</p>
                              <div className='justify-end flex ' >
                                <div className={`${activeBox === "box3" ? " bg-[rgba(254,95,0,1)]  text-white border flex  items-center justify-center     h-[20px] w-[20px] rounded-full" : "border flex  items-center justify-center     h-[20px] w-[20px] rounded-full"}`} onClick={() => setActiveBox("box3")} >
                                  {activeBox === "box3" && <FaCheck size={10} className=" " />}
                                </div>
                              </div>
                            </div>

                            <p className="border-bottom font-poppins font-normal text-base16 tracking-wide2">Travel eSIM Turkey with LTE | 4G | 5G Mobile Data for Tourists</p>
                            <div className="flex justify-between ">
                              <p className="font-poppins font-medium text-[15px] leading-[15px] tracking-normal text-[rgba(154,151,150,1)] ">1,30€ per GB <br />30 Days Validity</p>
                              <p className="font-poppins font-bold text-[33px] leading-[29px] text-right text-[rgba(254,95,0,1)]">€29.99</p>
                            </div>

                          </div>





                        </div>







                      </div>

                      <li className="flex items-start gap-1 mt-4">
                        <i><CiCircleCheck size={25} color="rgba(254, 95, 0, 1)" /></i> <span>
                          We’ll guide you through the activation process in the eSIM Fox app after purchase.</span>
                      </li>

                      <li className="flex items-start gap-1 mt-2 refresh">
                        <i><GrRefresh size={25} color="rgba(254, 95, 0, 1)" /></i><span>
                          If you can't use your plan, you’ll be eligible for a refund.</span>
                      </li>

                      <li className="flex items-center gap-1 mt-2 ">
                        <IoShieldCheckmarkOutline size={25} color="rgba(254, 95, 0, 1)" /><span>
                          Secure payment guaranteed.</span>
                      </li>
                      <div className="col-lg-10  mt-3  ">
                        <button className="col-12 rounded-5 py-1 font-poppins font-semibold text-lg text-white bg-orange-500 leading-none text-center">Go to Checkout</button>


                      </div>
                      <div className="col-sm- col-lg- mt-3 flex justify-center items-start gap-2  ">
                        <p className="font-poppins font-medium text-[13px] leading-[26px] tracking-[0.02em] text-[rgb(154,151,150)]">Payment Methods</p>
                        <img src={mobile45} alt="" />
                        <img src={mobile46} alt="" />
                        <img src={mobile47} alt="" />
                        <img src={mobile48} alt="" />

                      </div>



                    </div>
                  </div>
                </div>

              </div>




            </div>
          </div>
        </div>
      </section>


      <section className="container-fluid py-5 flex justify-center">
        <div className="container flex justify-center">
          <div className="col-lg-7 col-12 ">
            <div className=" flex flex-column items-center justify-center">

              <p className="text-center font-poppins font-normal lg:text-[25px] text-[19px] leading-none text-center text-[#3c3d44]">  eSIM Features and</p>
              <p className="font-poppins font-bold xl:text-[60px] lg:text-[50px] text-[30px]  leading-none tracking-normal text-center text-[rgb(16,12,10)]">Specifications for USA</p>

              <div className=" grid grid-cols-11 p-1 Additional  border  col-lg-7 col-md-8 col-12  rounded-full mt-2">
                <button
                  className="col-span-5  rounded-5  py-1 whitespace-nowrap font-poppins font-bold not-italic !lg:text-[20px] !text-[12px] text-gray-600 leading-none tracking-normal text-center ">Additional Information</button>
                <button className="col-span-3 font-poppins font-bold not-italic !lg:text-[20px] !text-[12px] text-gray-600 leading-none tracking-normal text-center">Description</button>
                <button className="  col-span-3 font-poppins font-bold not-italic !lg:text-[20px] !text-[12px] text-gray-600 leading-none tracking-normal text-center">Compatibilityn</button>

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

      <section className="container-fluid pb-5">
        <div className="container justify-center flex">
          <div className="col-lg-11 p-lg-5 p-3 flex items-center  flex-wrap justify-between grid-cols-lg-2 grid-cols-sm-1 bg-[rgba(255,241,232,1)]">
            <div className="col-lg-5">
              <p className="font-poppins font-normal lg:text-[25px] text-[19px] lg:leading-[100%] leading-[19px] tracking-[0] text-[rgba(60,61,68,1)]">How to activate</p>
              <p className="font-poppins font-bold lg:text-[60px] text-[35px]  lg:leading-[70px] leading-[40px] tracking-[0]"> Your eSIM FOX for Turkey</p>
              <p className="font-poppins font-normal text-[18px] leading-[32px] tracking-[0.02em]">Buy your eSIM in advance, then activate it right before your trip. Simply tap “Activate eSIM” in the eSIM FOX app - and you’re good to go.</p>
            </div>
            <div className="col-lg-6 col-md- col-12">
              <img className="col-12" src={mobile49} alt="" />
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
            <div className="col-12 grid lg:grid-cols-4 md:grid-cols-2  grid-col-1 gap-3  mt-3">


              <div className=" shadow rounded-3  p-3 gap-2 flex flex-column bg-white">
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


    </>
  );
};

export default App2;
