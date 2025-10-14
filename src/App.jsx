import "./App.css"
import "./App2.css"
import App2 from "./App2"
import App3 from "./App3"
import App4 from "./App4"
import App5 from "./App5"
import "./index.css"
import "./media.css"
import "./media2.css"
import mobile from './img/Mobile.svg'
import mobile1 from './img/Mobile copy.svg'
import mobile2 from './img/Mobile (1).svg'
import mobile3 from './img/01 copy.svg'
import mobile4 from './img/01.svg'
import mobile5 from './img/Layer 829 copy 2 (2).svg'
import mobile6 from './img/Rectangle.svg'
import mobile7 from './img/Rectangle (2).svg'
import mobile8 from './img/Rectangle (3).svg'
// import mobile9 from './img/Rectangle (6).svg'
import mobile10 from './img/Rectangle (4).svg'
import mobile11 from './img/Rectangle (5).svg'
// import mobile12 from './img/Rectangle (7).svg'
import mobile13 from './img/Rectangle (8).svg'
import mobile14 from './img/Rectangle (9).svg'
import { GoArrowDownRight } from "react-icons/go";
import mobile15 from './img/Rectangle (10).svg'
import mobile16 from './img/Rectangle (11).svg'
import mobile17 from './img/Rectangle (12).svg'
import mobile18 from './img/Rectangle (13).svg'
import mobile19 from './img/Rectangle (14).svg'
import mobile20 from './img/Rectangle (15).svg'
import mobile21 from './img/Rectangle (16).svg'
import mobile22 from './img/Rectangle (17).svg'
import mobile23 from './img/Rectangle (18).svg'
import mobile24 from './img/Rectangle (19).svg'
import mobile25 from './img/Rectangle (20).svg'
import mobile26 from './img/Rectangle (21).svg'
import mobile27 from './img/Rectangle (22).svg'
import mobile29 from './img/Rectangle (24).svg'
import mobile30 from './img/Rectangle (25).svg'
import mobile31 from './img/Rectangle (27).svg'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import mobile32 from './img/02.svg'
import mobile33 from './img/02.svg'
import mobile34 from './img/Rectangle (28).svg'
import mobile35 from './img/Group 11.svg'
//footer
import mobile36 from './img/Untitled-5 1.svg'
import mobile37 from './img/Layer 830 1.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";


import { FaHeart } from "react-icons/fa";
import mobile38 from './img/Rectangle (30).svg'
import { GoArrowUpRight } from "react-icons/go";
import mobile39 from './img/Rectangle (31).svg'
import mobile40 from './img/Rectangle (32).svg'
import { FaWifi } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";




import mobile41 from './img/Rectangle (33).svg'





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
import { BsLightningCharge } from "react-icons/bs";
import { IoMdFingerPrint } from "react-icons/io";
import mobile49 from './img/dl.beatsnoop.com-kUN3Rl5KmP 1.svg'
import { BsListCheck } from "react-icons/bs";
import { IconStack2 } from '@tabler/icons-react';
import { FaSimCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


// page-3
import mobile50 from './img/image.svg'
import { FaRegCalendar } from "react-icons/fa";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaEuroSign } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer"
import Nav from "./nav"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiWifiOn } from "react-icons/ci";
import { useState } from "react"


import USA from './img/Rectangle (1).svg'
import France from './img/Rectangle (2).svg'
import Germany from './img/Rectangle (4).svg'
import Italy from './img/Rectangle (5).svg'
import Turkey from './img/Rectangle (8).svg'
import Switzerland from './img/Rectangle (9).svg'
import Czech_Republic from './img/Rectangle (10).svg'
import Spain from './img/Rectangle (11).svg'
import star from './img/star.svg'
import pic1 from './img/pic1.svg'
import pic2 from './img/pic2.svg'
import pic3 from './img/pic3.svg'
import pic4 from './img/pic4.svg'
import pic5 from './img/pic5.svg'
import pic6 from './img/pic6.svg'
import pic7 from './img/pic7.svg'
import pic8 from './img/pic8.svg'
import pic9 from './img/pic9.svg'

// import About from "./pages/About";
const Home = () => {
  const [activeBox1, setActiveBox1] = useState("button1");
 const [activeBox, setActiveBox] = useState("box");
 const [activeBox2, setActiveBox2] = useState("Faq");
 const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <section class=" container-fluid  bg-gradient-to-b from-white to-[#FFF1E9]">
        <div className="container ">
          <div className="row ">
            <div className="col-12 ">
              <Nav />
              <section class="container One py-5 ">
                <div className="container ">
                  <div className="col-12   text-center  ">
                    <p className="font-poppins font-semibold lg:text-[42px] text-[30px] leading-[100%] tracking-[3%] text-center m-0">One <span className="text-[#FE5F00]">eSIM</span> for All,</p>
                    <p className="font-poppins font-bold lg:text-[75px] text-[47px] m- leading-[100%] tracking-[3%]">Here, There and Everywhere</p>
                  </div>
                </div>
                <div className="container py-3 col-lg-10 col-10 ">
                  <div className="d-flex   flex-wrap  A100 " >
                    <div className="row col-lg-4  col-12 lg:border-r me-3  ">
                      <div className="d-flex p-0 align-items-start gap-  ">
                        <img src="./img/3.png" alt="" class="mx-2" />
                        <div className="col-11  mt-">
                          <p>190 Countries 8 Regions</p>
                        </div>
                      </div>
                    </div>
                    <div className="row col-lg-8 col-sm-12 ">
                      <div className="  d-flex  align-items-start  gap-3   ">
                        <img src="./img/4.png" alt="" class="mt-2" />
                        <div className="  col-12  ">
                          <p class="text-break ">Enjoy the convenience of one
                            eSIM for all your destinations— <br />
                            up and extend data plans for any country you visit, all on a
                            single eSIM.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12   justify-center  items-center flex ">


                  <div className="col-lg-6 col-md-8 col-12 pt-5 ">


                    <div className=" bg-white   flex  justify-center  item-center shadow-sm rounded-5 p-3 py-2">
                      <div className="   rounded-5 p-2   "><FaMagnifyingGlass /></div>



                      <input type="text" placeholder="Where do you nned internet?" name="Search" id="" className="col-10 col-lg-11 text-[13px]  border-0" />

                      <div className="   rounded-5 p-2  bg-[#FE5F00] text-white"><CiWifiOn size={20} /></div>
                    </div>

                  </div>
                </div>



              </section>
              {/* error section */}
              <section className="   py-3  relative">
                <div className="absolute  col-12 flex justify-center top-0  bottom-0 main ">
                  <img className="relative  lg:w-[800px] " src={mobile39} />
                  

                </div>
                <div className="col-lg-12 py-5 ">

                  <div className="flex py-5 gap-2 justify-center    ">

                    <div className="relative">
                      <img src="./img/f1.png" alt="" />
                    </div>
                    <div className="relative lg:static ">
                      <img src="./img/f2.png" alt=""  />
                    </div>
                    <div className=" relative  ">
                      <img src="./img/f5.png" alt="" className="lg:w-[250px]" />
                      {/* <div className="flex relative  flex-column pt-5 items-center ">
                        <i><FaWifi size={30} color="green" /></i>
                        <p className="font-bold">coneccted</p>
                        <div className="lg-mb-4">
                          <p className=" flex gap-2 items-center">Downlaod by
                            <div className="bg-black rounded-5 p-1">
                              <FaApple size="2em" className=" text-white " />
                            </div>
                            <div className="play rounded-5 p-2">
                              <FaGooglePlay size="1.5em" className="p-0 m-0 " />

                            </div>
                          </p>
                        </div>
                      </div> */}


                    </div>


                    <div className="relative lg:static  ">
                      <img src="./img/f3.png" alt="" />
                    </div>
                    <div className=" ">
                      <img src="./img/f4.png" alt="" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid py-lg-5   ">
        <div className="container py-5 flex justify-center">
          <div className="col-12 col-lg-10 ">
            <div className="flex justify-center lg:justify-start">
              <p className="font-[Poppins] font-normal lg:text-[25px] text-[19px] text-[#3C3D44] leading-[100%] tracking-[0%] ">One eSIM for all</p>
            </div>
            <div className="grid grid-cols-12  gap-2 ">
              {/* <div className="lg:col-span-6 col-span-12 justify-center lg:justify-start">
                <p className="  font-poppins font-bold text-[35px] lg:text-[60px] leading-[100%] tracking-[0%]  m-0  !lg:text-start text-center whitespace-nowrap">Your Destinations</p>
              </div> */}
              <div className="lg:col-span-6 col-span-12 flex justify-center lg:justify-start">
  <p className="font-poppins font-bold text-[35px] lg:text-[60px] leading-[100%] tracking-[0%] m-0  ">
    Your Destinations
  </p>
</div>


              <div className="lg:col-span-2 col-span-12 flex items-end  ">
                <div className="col-12 bg-white  border  flex  justify-center  item-center  rounded-5 p-2 py-1">
                  <div className="   rounded-5 p-2   "><FaMagnifyingGlass /></div>
                  <input type="text" placeholder="Search.." name="Search" id="" className="col-10 col-lg-11 text-[13px]  border-0" />

                </div>
              </div>
              <div className="lg:col-span-4 col-span-12  grid items-end  ">
                <div className=" rounded-5 grid grid-cols-3  border p-1 gap-2">
                  <button className={` runded-5    ${activeBox1 === "button1" ? "bg-[#100C0A] rounded-5 text-white py-1 m-0 font-[Poppins] font-bold text-[20px] leading-[100%] tracking-[-1%] text-center" : "font-[Poppins] font-bold text-[20px] leading-[100%] tracking-[0%] text-center text-[#636363]"}`} onClick={() => setActiveBox1("button1")}>Countries</button>
                  <button className={` runded-5    ${activeBox1 === "button2" ? "bg-[#100C0A] rounded-5 text-white py-1 m-0 font-[Poppins] font-bold text-[20px] leading-[100%] tracking-[-1%] text-center" : "font-[Poppins] font-bold text-[20px] leading-[100%] tracking-[0%] text-center text-[#636363]"}`} onClick={() => setActiveBox1("button2")}>Regions</button>
                  <button className={` runded-5    ${activeBox1 === "button3" ? "bg-[#100C0A] rounded-5 text-white py-1 m-0 font-[Poppins] font-bold text-[20px] leading-[100%] tracking-[-1%] text-center" : "font-[Poppins] font-bold text-[20px] leading-[100%] tracking-[0%] text-center text-[#636363]"}`} onClick={() => setActiveBox1("button3")}>Global</button>
                </div>
              </div>
            </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  py-5">
                <div className= {`${activeBox === "box" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={USA} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">USA</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$10</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box")}   /></i>

                    </div>

                  </div>

                </div>

                <div className= {`${activeBox === "box1" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box1")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={France} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">France</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$8</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box1" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box1")}   /></i>

                    </div>

                  </div>

                </div>

                 <div className= {`${activeBox === "box2" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box2")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src="./img/f9.png" alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">Japan</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$12</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box2" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box2")}   /></i>

                    </div>

                  </div>

                </div>

                <div className= {`${activeBox === "box3" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box3")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={Germany} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">Germany</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$12</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box3" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box3")}   /></i>

                    </div>

                  </div>

                </div>
                <div className= {`${activeBox === "box4" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box4")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={Italy} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">Italy</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$12</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box4" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box4")}   /></i>

                    </div>

                  </div>

                </div>

                <div className= {`${activeBox === "box5" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box5")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={Turkey} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">Turkey</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$12</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box5" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box5")}   /></i>

                    </div>

                  </div>

                </div>

                <div className= {`${activeBox === "box6" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box6")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={Switzerland} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">Switzerland</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$14</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box6" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box6")}   /></i>

                    </div>

                  </div>

                </div>

                <div className= {`${activeBox === "box7" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box7")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={Czech_Republic} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">Czech Republic</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$13</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box7" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box7")}   /></i>

                    </div>

                  </div>

                </div>
                <div className= {`${activeBox === "box8" ? "shadow-[-1px_1px_9px_-2px_rgba(250,94,0,0.75)] rounded border-2 border-[#FA5E00] p-2" :  "shadow rounded p-2" }`} onClick={() => setActiveBox("box8")}   >
                  <div className=" flex justify-start items-center gap-2 border-b pb-2 ">
                    <img src={Spain} alt="" />
                    <span className="font-poppins font-bold text-[29px] leading-[100%] tracking-[0]">Spain </span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#909090]">Starting at <span className="font-poppins font-bold text-[20px] leading-[100%] tracking-[0.02em] m-0 text-[#100C0A]">$14</span></p>
                    <div className="flex items-center pt-2">
                       <i> <GoArrowUpRight size={30} className={`${activeBox === "box8" ? "p-1  rounded-5 text-[#FFFFFF] bg-[#FE5F00]" : "p-1  rounded-5 text-[#000000] bg-[#F5F5F5]" }`} onClick={() => setActiveBox("box8")}   /></i>

                    </div>

                  </div>

                </div>

                
                
                
                
                
                
                
                


              
            
            
            
            
              </div>
              <div className="flex justify-center">
                <button className="border col-xl-2 col-lg-3 col-4 rounded-5 text-[#FE5F00] font-poppins font-semibold text-[22px] leading-[100%] tracking-[0] text-center py-2">See All Countries</button>
              </div>


          </div>
        </div>      
      </section>



       <section className="container-fluid mt-5 ">
        <div className="container  col-12">
          <div className="row">
            <div className="text-2 col-12 d-flex justify-content-center  align-items-center flex-column">
              <h6>How does eSIM from</h6>
              <h1>eSIM Fox work</h1>

              <div className="row row-cols-lg-3 row-cols-sm-1 d-flex  justify-content-center align-items-center">
                <div>
                  <div className=" imgM d-flex  justify-content-center align-items-center py-4">
                    <img src={mobile} alt="" />
                    <div className="btnp">
                      <button className="btnp1 px-2 rounded-5" >01</button>
                    </div>

                  </div>
                  <div className="text-center text3 ">
                    <p id="p1">Check that your device <br />is eSIM-compatible and buy <br />your data plan.</p>
                    <p id="p2">Your phone must be compatible <br />with eSIM. After verifying, look for your <br />destination and buy a data plan.</p>
                    <a id="a1">Check Compatibility</a>

                  </div>

                </div>
                <div>
                  <div className=" imgM d-flex  justify-content-center align-items-center py-4 ">
                    <img src={mobile1} alt="" />
                    <div className="btnp">
                      <button className="btnp1 px-2 rounded-5" >02</button>
                    </div>


                  </div>
                  <div className="text-center text3  ">
                    <p id="p1">Download the <br />eSIM app</p>
                    <p id="p2">Set up the eSIM on <br />your device by following the <br />instructions in the app.</p>
                    <p className="flex items-center justify-center gap-1" ><i className="pe-2 "> Download By</i>

                      <div className="bg-black rounded-5 p-1">
                        <FaApple size="2em" className=" text-white " />
                      </div>
                      <div className="play rounded-5 p-2">
                        <FaGooglePlay size="1.5em" className="p-0 m-0 " />

                      </div>
                    </p>

                  </div>
                </div>
                <div>
                  <div className=" imgM d-flex  justify-content-center align-items-center py-4">
                    <img src={mobile2} alt="" />
                    <div className="btnp">
                      <button className="btnp1 px-2 rounded-5" >03</button>
                    </div>

                  </div>
                  <div className="text-center text3 ">
                    <p id="p1">Get online right <br />after landing</p>
                    <p id="p2">Start using your data plan as soon as <br />you arrive at your destination. Your <br />phone will automatically connect to <br />the internet network upon arrival.</p>
                    <a id="a1">View All Destination</a>

                  </div>
                </div>
              </div>

              <div className="mt-5 text-center">
                <div>
                  <button className=" py-1 px-3 rounded-5  bg-white btn3">Good news</button>
                </div>
                <div className="text4">
                  <p id="p1">Grab your data plan anytime. It starts the moment you land. <br /> <span id="p2">Stress-free travel, instant connection!</span></p>
                </div>
                <div>
                  <button className="border-0 rounded-5 py-2 px-4 btn4">See All Countries</button>
                </div>

              </div>
            </div>
          </div>
        </div>


      </section> 







       <section class="container-fluid py-5" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12  d-flex ">
              <div className=" col-lg-12 col-12   d-flex gap-2 picbg reverse   ">
                <div className="col-lg-6 col-sm-12 error ">
                  <img className="col-lg-12 col-md-12 error  col-sm-12  " src={mobile5} alt="" />
                </div>
                <div className="py-5 col-lg-6 terror col-sm-12   ">
                  <div className="col-12 text5 text-lg-start teror text-sm-center">
                    <p>Free offer Oui, it's really free!</p>
                    <h3>1GB of Data on us to try eSIMX!</h3>
                    <div className=""><button className="btn5 px-3 py-2 rounded-5 text-white border-0">Grab the deal</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section> 
       <section className="container-fluid ">
        <div className="container">
          <div className="row ">
            <div className="col-12 ">
              <div className=" d-flex gap-3  align-items-end flex-wrap row-cols-lg-3 row-cols-sm-1  main5  d-flex justify-content-center">
                <div className="bg-black col-lg-3 col-sm-12 error2 rounded-4  border d-grid  text-start text10">
                  <div className="p-3   col-lg-12 d-grid align-items- justify-content-  text-start" >
                    <div className="  py-5 col-12">
                      <p id="p1">Meet Internet <br />without borders</p>
                      <p id="p2">We’re creating the easiest <br /> way to connect globally. <br />
                        Min hassle.  <span className="bg-white text-black rounded-5 ">Max flexibility.</span> <br />
                        Instant activation.</p>
                      <div>
                        <button className="border-0 rounded-5 py-2 px-4 btn4">Explore</button>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="girl col-lg-2 col-sm-12   ">
                  <div className="col-lg-12 d-grid  justify-content-center  " >
                    <div className="   col-12">
                      <img className="col-lg-12 col-sm-12" src={mobile6} alt="" />
                    </div>

                  </div>
                </div>

               

                <div className="At col-lg-3 col-sm-12  rounded-4   align-items-center justify-content-center d-flex">
                  <div className="line col-12  py-5 mt-5  align-items-center justify-content-center  text-center d-flex flex-column ">
                    <div className="col-9 mt-4   justify-content-start d-flex ">
                      <h3 className="bg-black text-white  rounded-3  " id="p1">
                        At eSIMFOX,</h3>
                    </div>

                    <div className="col-9 justify-content-end d-flex">
                      <h3 className="bg-white text-black   px- rounded-3  " id="p1">
                        We have One eSim</h3>
                    </div>
                    <div className=" col-9 justify-content-start d-flex">
                      <h3 className="bg-black text-white text-start  rounded-3">For All Countries. </h3>
                    </div>

                    <p className="py-4 text-white">Instal once. use forever. No need to re-install!</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-1 row-cols-sm-1  co2 justify-content-center text-center d-grid rounded-4  py-5">
                  <div className="text-center  py-5 mt-3 col-12 ">

                    <h1>-50%</h1>

                    <h4>eSIMs emit</h4>
                    <h4>50% less Co2 than <br /> regular SIMs</h4>
                  </div>


                </div>


              </div>

            </div>
          </div>
        </div>


      </section> 




       <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className=" col-12   d-flex  align-items-center text-center justify-content-center text7 py-5">
                <div>
                  <p id="p1">our Coustomers <br />
                    <p id="p2">Tells you better than us!</p>
                  </p>

                  <div className="col-12 d-flex gap-3 align-items-center justify-content-center text8 "
                    id="navbarNav">
                    <div className="col-3   d-flex align-items-center border-end"> <i id="i1" class="fa-solid fa-star fa-lg mb-3" ></i>
                      <p id="p3">Trustpilot</p></div>

                    <div className="star d-flex ">
                      <img src={star} alt="" />
                    </div>
                    <div className="d-flex text-center gap-1">
                      <h5>4.7 </h5>
                      <h6 className="mt-1">Average</h6>
                      <h5>5</h5>
                      <h6 className="mt-1">Reviews</h6>

                    </div>


                  </div>
                </div>
              </div>
              <div className=" col-12 d-flex Tells gap-4 row-cols-lg-3  row-cols-sm-1    ">

                <div className="col-lg-3 rounded-4    p-4 Awesome">
                  <div>
                    <img src={pic1} alt="" />
                  </div>
                  <div className="text9">
                    <p id="p1">Awesome Service!</p>
                    <p id="p2">I'm really impressed with this eSIM technology - it's user-friendly, and I make sure to use it for all my travels. It's become a travel staple for me.</p>
                  </div>
                  <div className="text10 d-flex items-center justify-content-between">
                    <p id="p3">Emma T.</p>
                    <img src={mobile8} alt="" />


                  </div>
                </div>
                <div className="col-lg-3 rounded-4   p-4 Awesome">
                  <div>
                    <img src={pic2} alt="" />
                  </div>
                  <div className="text9">
                    <p id="p1">Works very well</p>
                    <p id="p2">I've been thoroughly
                      impressed with the eSIM service's performance worldwide. It consistently delivers dependable data wherever I am...</p>
                  </div>
                  <div className="text10 d-flex items-center justify-content-between">
                    <p id="p3">Charlotte D.</p>
                    <img src={mobile8} alt="" />


                  </div>
                </div>
                <div className="col-lg-3 rounded-4  p-4 Awesome">
                  <div>
                    <img src={pic3} alt="" />
                  </div>
                  <div className="text9">
                    <p id="p1">Very satisfied!</p>
                    <p id="p2">Truly pleased with my
                      experience using eSIM FOX during my travels across Uzbekistan, Azerbaijan, and Turkey. The coverage was impressively stable...</p>
                  </div>
                  <div className="text10 items-center d-flex justify-content-between">
                    <p id="p3">Alex F.</p>
                    <img src={mobile8} alt="" />


                  </div>
                </div>
                <div className="col-lg-3 rounded-4   p-4 Awesome">
                  <div>
                    <img src={pic4} alt="" />
                  </div>
                  <div className="text9">
                    <p id="p1">Top eSIM for the
                      international traveling!</p>
                    <p id="p2">This eSIM is a must-have for international travel! I've experienced exceptional coverage and swift internet speeds...</p>
                  </div>
                  <div className="text10 items-center d-flex justify-content-between">
                    <p id="p3">Mohammed H.</p>
                    <img src={mobile8} alt="" />


                  </div>
                </div>


              </div>
              <div className="col-12 d-flex align-items-center justify-content-center py-4 ">
                <button className="border rounded-5 py-2 px-4   btn6">See All Countries</button>
              </div>

            </div>
          </div>
        </div>

      </section> 






       <section className="container-fluid Latest">
        <div className="container">
          <div className="row">

            <div className="direction col-12 d-flex text-sm-center flex-wrap  ">
              <div className="col-10 text-lg-start  ">
                <h6>Latest post</h6>
                <h1>The eSIM Fox blog</h1>
              </div >
              <div className="btn-outer col  justify-content-sm-end    align-self-center d-flex justify-content-center  ">
                <button className="border rounded-5 py-2 px-4   btn7">See All Blog</button>
              </div>



              <div className="col-12 row-cols-lg-3 row-cols-sm-1 row-cols-md-2 d-flex  flex-wrap text11 ">
                <div className="col-12">
                  <img className="col-12" src={pic5} alt="" />
                  <div className="   text-start">
                    October 17, 2023
                    <p>Best eSIM & SIM Card Options in Turkey for Tourists: eSIMFox Review</p>

                  </div>
                </div>

                <div>
                  <img className="col-12" src={pic6} alt="" />
                  <div className="  text-start">
                    October 17, 2023
                    <p>Best eSIM & SIM Card Options in Turkey for Tourists: eSIMFox Review</p>
                  </div>
                </div>
                <div className="pb-5">
                  <img className="col-12" src={pic7} alt="" />
                  <div className="  text-start">
                    October 17, 2023
                    <p>Best eSIM & SIM Card Options in Turkey for Tourists: eSIMFox Review</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 





       <section className="container-fluid py-5 mt-5">
        <div className="container ">
          <div className="row">
            <div className="col-12 row-cols-lg-2 row-cols-1 gap- d-flex flex-wrap ">
              <div className="col-lg-5 col-12 text-sm-center text-lg-start  Faq">
                <div className="text12">
                  <p id="p1">FAQ</p>
                  <p id="p2">eSIM Questions</p>
                  <p id="p3 " className="col-lg-10 col-sm-12">Aenean vel arcu sed ipsum ullamcorper blandit. Nullam quis sodales odio. Praesent vulputate gravida nisi non ultrices.</p>

                </div>
                <div className="text13 ">
                  <p id="p1">Still need help?</p>
                  <div className="d-flex gap-2 text-start ">

                    <div className=" d-flex align-items-center    ">
                      <i className=" rounded-5 py-2 px-2 bg-[rgba(255,241,232,1)] text-[rgba(255,95,0,1)]"><FaPhoneAlt size={18} /></i>
                    </div>
                    <div className=" d-flex mt-3 text14 flex-column">
                      <p id="t1">Phone</p>
                      <p id="t2">+3197010283954</p>
                    </div>
                  </div>
                  <div className="d-flex  gap-2 text-start ">
                    <div className="d-flex align-items-center">
                      <i className=" rounded-5 py-2 px-2 bg-[rgba(255,241,232,1)] text-[rgba(255,95,0,1)]">
                        <IoIosMail size={20} />

                      </i>
                    </div>
                    <div className=" d-flex  mt-3 text14 flex-column ">
                      <p id="t1">Email</p>
                      <p id="t4"> Support@esimfox.com</p>
                    </div>

                  </div>


                  <div className="d-flex justify-content-start py-5">
                    <button className="btn8 d-flex align-items-center jsutify-content-center px-3 py-2 rounded-5 text-white border">Visit Help Center</button>
                  </div>
                </div>

              </div>

              <div className="col-lg-6 col-12  grid gap-3">
                <div className={`${activeBox2 === "Faq" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className="">What is an eSIM?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                <div className={`${activeBox2 === "Faq1" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq1")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className="">What is an eSIM profile?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq1" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq1" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                <div className={`${activeBox2 === "Faq2" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq2")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className="">How many profiles can I have on an eSIM?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq2" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq2" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                 <div className={`${activeBox2 === "Faq3" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq3")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className="">How do I activate my eSIM?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq3" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq3" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                 <div className={`${activeBox2 === "Faq4" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq4")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className=""> Where can I find my eSIM activation code?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq4" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq4" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                <div className={`${activeBox2 === "Faq5" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq5")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className=""> When does the validity of my eSIM start to count?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq5" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq5" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                 <div className={`${activeBox2 === "Faq6" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq6")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className=""> Do I need an ID card or passport to purchase a SIM Card?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq6" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq6" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                <div className={`${activeBox2 === "Faq7" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq7")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className=""> Is my smartphone eSIM-compatible?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq7" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq7" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>

                <div className={`${activeBox2 === "Faq8" ? " rounded-4 border-2 rounded-2 border-[rgba(254,95,0,1)]  shadow-[-2px_-1px_8px_-2px_rgba(254,95,0,1)]":"border rounded-4 " }`} onClick={() => setActiveBox2("Faq8")}>
                  <div className=" flex p-2 justify-between">
                    <div className="">
                      <h4 className="">Does the iPhone 15 arrive only with eSIM in Europe?</h4> </div>
                    <div className="flex items-center justify-center" >

                      
                        < GoArrowDownRight size={30} color="" className={`${activeBox2 === "Faq8" ? "    rotate-[260deg] bg-[#FE5F00] rounded-5 text-[#FFFFFF]  " :"flex items-center justify-center    bg-[#F5F5F5] rounded-5 text-[#000000]  " }`} />
                      
                    </div>

                  </div>
                  {activeBox2 === "Faq8" && <div className="px-3 m-3 d-flex float-end align-items-end justify-content-end ">

                    <p className="px-3 border-l border-[#FE5F00]">Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.</p>

                  </div>}
                </div>












                

                

                

                

                

                

                

                








              </div>
            </div>
          </div>
        </div>

      </section> 
       <section>
        <div className="container d-grid">
          <p className="text-center  font-medium text-[#3C3D44]">Trusted By</p>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-5 p-5 justify-center items-center  border">
            <div><img src={mobile18} alt="" /></div>
            <div><img src={pic8} alt="" /></div>
            <div><img src={pic9} alt="" /></div>
            <div><img src={mobile17} alt="" /></div>
            <div><img src={mobile19} alt="" /></div>
            <div><img src={mobile20} alt="" /></div>
            <div><img src={mobile21} alt="" /></div>
            <div><img src={mobile22} alt="" /></div>
            <div><img src={mobile23} alt="" /></div>
            <div><img src={mobile24} alt="" /></div>
            <div><img src={mobile25} alt="" /></div>
            <div><img src={mobile26} alt="" /></div>
            <div><img src={mobile27} alt="" /></div>
            <div><img src={mobile29} alt="" /></div>
            <div><img src={mobile30} alt="" /></div>


          </div>
        </div>
      </section> 

      <Footer />



    </ >
  );
};

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="">
        <Link to="/" className="text-blue-500 hover:underline fixed top-0">Home</Link>
        <Link to="/app2" className="text-blue-500 hover:underline fixed top-5">App2</Link>
        <Link to="/app3" className="text-blue-500 hover:underline fixed top-10 ">App3</Link>
        <Link to="/app4" className="text-blue-500 hover:underline fixed top-15 ">App4</Link>
        <Link to="/app5" className="text-blue-500 hover:underline fixed top-20 ">App5</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
        <Route path="/app4" element={<App4 />} />
        <Route path="/app5" element={<App5 />} />
      </Routes>
    </Router>
  );
};

export default App;



