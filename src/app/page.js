'use client';
import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/../public/images/home-img.png";
import Intro from '../../public/images/intro.gif';
// import IntroVid from '../../public/images/introVid.mov';
import { motion,AnimatePresence } from "framer-motion";
import { Stream } from "@cloudflare/stream-react";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  const videoIdOrSignedToken = "9c36256b4fd499bdceef365b72b2c376";
  return (
    <div className="absolute top-0 px-[1rem] md:px-[3.75rem] pt-[5.5rem] md:pt-[6.88rem] pb-[1.5rem] md:pb-[2.5rem] flex flex-col-reverse md:flex-row flex-wrap gap-x-[10%] w-full h-full justify-between opacity-0 animate-fadeIn">
        
      
      <div className={click ? "w-full md:w-[45%] h-[60%] md:h-full flex flex-col opacity-1" :"w-full md:w-[45%] h-[60%] md:h-full flex flex-col opacity-1"}>
        <div className="slide mb-[1rem] md:mb-[5rem] relative">
          <div className="relative overflow-hidden">
            <h1>PHORIN COLLECTIVE</h1>
            <div className="absolute top-0 left-0 block w-full h-full bg-white animate-slide"></div>
          </div>
          <div className="relative overflow-hidden">
            <span>Knowledge is power.</span><br/>
            <span>Inspiration is everywhere.</span>
            <div className="absolute top-0 left-0 block w-full h-full bg-white animate-slideDelay"></div>
          </div>
        </div>
        <div className="h-full relative home-nav">
          <div className="absolute bottom-0 ml-[1.25rem]">
          <Link className="block w-fit" href="/radio">01. Radio</Link>
            <Link className="block w-fit" href="/articles">02. Articles</Link>
            <Link className="block w-fit" href="/contact">03. Contact</Link>
            <Link className="block w-fit" href="/videos">04. Videos</Link>
            <Link className="block w-fit" href="">05. Shop</Link>
            <Link className="block w-fit" href="/photos">06. Photos</Link>
            
          </div>
        </div>
      </div>
      <div className={click ? "relative w-full md:w-[45%] h-[40%] md:h-full overflow-hidden opacity-1" :"relative w-full md:w-[45%] h-[40%] md:h-full overflow-hidden opacity-1"}>
        <div className="absolute top-0 left-0 block w-full h-full bg-white animate-slideY"></div>
        <Image src={HomeImage} className="w-full h-full object-cover" width={500} alt="oops"/>
      </div>
      <div>
      <div>
   
      
</div>
      </div>
    </div>

  );
}
