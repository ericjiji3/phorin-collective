import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/../public/images/home-img.png";

export default function Home() {
  return (
    <div className="absolute top-0 px-[3.75rem] pt-[6.88rem] pb-[2.5rem] flex flex-wrap gap-x-[10%] w-full h-full">
      <div className="w-[45%] h-full flex flex-col">
        <div className="mb-[5rem]">
          <h1>PHORIN COLLECTIVE</h1>
          <span>A collective based in Austin, TX. Focused on pushing forward fashion, art, and community.</span>
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
      <div className="w-[45%] h-full">
        <Image src={HomeImage} className="w-full h-full object-cover" width={500} alt="oops"/>
      </div>
    </div>
      

  );
}
