'use client';
import { useState } from "react";

export default function IntroVideo(){
    const [click, setClick] = useState(false);

    return(
        <div className={click ? "absolute z-[-1] top-0 left-0 w-full h-full overflow-hidden opacity-0 intro-container" : "absolute z-[100] top-0 left-0 w-full h-full overflow-hidden opacity-1 intro-container"} onClick={() => setClick(true)}>
            {/* <Image src={Intro} width={500} height={500} alt="oops"/> */}
            <video className="intro-vid" src={'/introVid.mov'} autoPlay={true} loop muted={true}>
            </video>
            <span className="absolute bottom-[5%] left-[50%] translate-x-[-50%] bg-white border border-black px-[1rem] block"><b>CLICK TO CONTINUE</b></span>
        </div>
    )
}     