'use client';
import Image from "next/image"
import Logo from '@/../public/images/phorin-logo.png';
import Link from "next/link";
import { useEffect, useState } from "react";
import './Header.css'

export default function Header(){
    const [active, setActive] = useState(false);

    const toggleNav = (e) => {
        setActive(!active);
        console.log(active);
    }

    return(
        <div className="flex justify-between items-center px-[3.75rem] py-[2.5rem]">
            <div>
                <Image src={Logo} width={40} alt="oops"/>
            </div>
            <div className="relative text-end w-[30%]">
                <div className="relative z-[3]">
                    <span className={active ? "index active font-bold text-white" : "index font-bold text-black"} onClick={(e) => toggleNav(e)}>INDEX</span>
                </div>
                <div className={`${active ? "nav-links active absolute right-[-15px] top-[-15px] pt-[2rem] pb-[5%] w-full max-h-[500px] max-w-[500px] overflow-hidden z-[2] bg-black text-white" : "nav-links absolute right-[-15px] top-[-15px] pt-[2rem] pb-[5%] w-full max-h-0 max-w-0 overflow-hidden z-[2] bg-black text-white"}`}>
                    <Link className="flex items-baseline justify-end mr-[15px] mt-[10px]" href="/">
                        <div>01.</div>
                        <h2>HOME</h2>
                    </Link>
                    <Link className="flex items-baseline justify-end mr-[15px]" href="/articles">
                        <div>02.</div>
                        <h2>ARTICLES</h2>
                    </Link>
                    <Link className="flex items-baseline justify-end mr-[15px]" href="/contact">
                        <div>03.</div>
                        <h2>CONTACT</h2>
                    </Link>
                    <Link className="flex items-baseline justify-end mr-[15px]" href="/videos">
                        <div>04.</div>
                        <h2>VIDEOS</h2>
                    </Link>
                    <Link className="flex items-baseline justify-end mr-[15px]" href="/">
                        <div>05.</div>
                        <h2>SHOP</h2>
                    </Link>
                    <Link className="flex items-baseline justify-end mr-[15px]" href="/photos">
                        <div>06.</div>
                        <h2>PHOTOS</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}