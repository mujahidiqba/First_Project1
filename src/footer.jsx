import React from 'react'

import mobile36 from './img/Untitled-5 1.svg'
import mobile37 from './img/Layer 830 1.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="container-fluid     bg-gradient-to-t from-[rgba(255,255,255,1)] to-[rgba(255,241,233,1)]">
        <div className="container">


          <div className="row row-cols-lg-2 row-cols-sm-1  d-flex  reverse">
            <div>
              <img src={mobile36} alt="" />
            </div>


            <div className="col-12 justify-end align-items-lg-start align-items-sm-center d-flex flex-column  leading-none ">
              <p className="text-xl font-medium">Download the</p>
              <p className="text-4xl font-bold">eSIM Fox App</p>
              <p className="col-8 font-normal text-lg leading-8">Download the App and easily add, manage, and extend your data plans for multiple destinations-all from one eSIM.</p>

              <div className="d-flex gap-2 pt-4">
                <div className="pt-2">
                  <p className="">Downlaod by</p>
                </div>

                <div className="bg-black rounded-5 p-1">
                  <FaApple size="2em" className=" text-white " />
                </div>
                <div className="play rounded-5 p-2">
                  <FaGooglePlay size="1.5em" className="p-0 m-0 " />

                </div>

              </div>
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


            <div className="what col-lg-7 col-12  grid lg:grid-cols-3 grid-cols-1   lg:justify-between    gap-5 ">
              <div className="lg:col-span-1 col-span-6   grid lg:justify-start ">
                <h3 className=" text-white  text-center">TopDestinations</h3>
                <div className=" list-none text-gray-400  grid lg:grid-cols-1 md:grid-cols-3 grid-cols-2  gap      ">

                  <li>Europe</li>
                  <li>USA</li>
                  <li>Japan</li>
                  <li>Turkey</li>
                  <li>Spain</li>
                  <li>France</li>
                  <li>TheWorld</li>


                </div>

              </div>
              


              <div className=''>

              </div>



              <div className=" lg:col-span-1 col-span-6   flex lg:justify-start  ">
                <h3 className=" text-white text-lg-start  text-center m-0 ">Legal</h3>
                <div className="list-none text-gray-400  grid lg:grid-cols-1 md:grid-cols-3 grid-cols-2  gap  lg:justify-start justify-center    ">
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Cookies Policy</li>
                  <li>Refund Policy</li>
                  <li>Website Terms of Use</li>
                </div>

              </div>


              <div className=" lg:col-span-1 col-span-6   grid lg:justify-start ">
                <h3 className=" text-white text-lg-start  text-center">Interest</h3>
                <div className="list-none text-gray-400  grid lg:grid-cols-1 md:grid-cols-3 grid-cols-2  gap  lg:justify-start justify-center   ">
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
