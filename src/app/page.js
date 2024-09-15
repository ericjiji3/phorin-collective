'use client';
import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/../public/images/home-img.png";
import Intro from '../../public/images/intro.gif';
// import IntroVid from '../../public/images/introVid.mov';
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <div className="absolute top-0 px-[1rem] md:px-[3.75rem] pt-[5.5rem] md:pt-[6.88rem] pb-[1.5rem] md:pb-[2.5rem] flex flex-col-reverse md:flex-row flex-wrap gap-x-[10%] w-full h-full justify-between">
        
      
      <div className={click ? "w-full md:w-[45%] h-[60%] md:h-full flex flex-col opacity-1" :"w-full md:w-[45%] h-[60%] md:h-full flex flex-col opacity-1"}>
        <div className="slide mb-[1rem] md:mb-[5rem] relative">
          <div className="relative overflow-hidden">
            <h1>PHORIN COLLECTIVE</h1>
            <div className="absolute top-0 left-0 block w-full h-full bg-white animate-slide"></div>
          </div>
          <div className="relative overflow-hidden">
            <span>A collective based in Austin, TX. Focused on pushing forward fashion, art, and community.</span>
            <div className="absolute top-0 left-0 block w-full h-full bg-white animate-slideDelay"></div>
          </div>
        </div>
        <div className="h-full relative home-nav">
          <div className="absolute bottom-0 ml-[1.25rem]">
            <Link className="block w-fit" href="">01. Articles</Link>
            <Link className="block w-fit" href="/contact">02. Contact</Link>
            <Link className="block w-fit" href="">03. Videos</Link>
            <Link className="block w-fit" href="">04. Shop</Link>
            <Link className="block w-fit" href="">05. Photos</Link>
          </div>
        </div>
      </div>
      <div className={click ? "relative w-full md:w-[45%] h-[40%] md:h-full overflow-hidden opacity-1" :"relative w-full md:w-[45%] h-[40%] md:h-full overflow-hidden opacity-1"}>
        <div className="absolute top-0 left-0 block w-full h-full bg-white animate-slideY"></div>
        <Image src={HomeImage} className="w-full h-full object-cover" width={500} alt="oops"/>
      </div>
    </div>

  );
}
