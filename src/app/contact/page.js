'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactImage from "@/../public/images/contact-img.png";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (res.ok) {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert('Failed to send message.');
        }
      };
  return (
    <div className="relative md:absolute top-0 px-[1rem] md:px-[3.75rem] pt-0 md:pt-[5.5rem] md:pt-[6.88rem] pb-[2.5rem] flex flex-col md:flex-row justify-between flex-wrap gap-x-[10%] w-full h-full">
        <div className="absolute right-[1rem] md:right-[35%] top-[38%] md:top-[60%] z-[1]">
            <div className="relative overflow-hidden">
              <div className="block absolute w-full h-full top-0 left-0 animate-slide bg-white"></div>
              <h1>SIGN UP</h1>
              <h1>NEWSLETTER</h1>
            </div>
        </div>
      <div className="relative w-full md:w-[45%] h-[47.5%] md:h-full overflow-hidden">
        <div className="relative inline-block overflow-hidden">
          <div className="absolute block w-full h-full top-0 left-0 bg-white animate-slide"></div>
          <span className="inline-block mb-[0.6rem]">
            <b>CONTACT</b>
          </span>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="block w-full h-full absolute top-0 left-0 bg-white animate-slideY" style={{ animationDelay: `1.75s!important`}}></div>
          <Image src={ContactImage} className="w-full h-[400px] md:h-full object-cover object-top" width={500} alt="oops"/>
        </div>
      </div>
      <div className="relative overflow-hidden w-full md:w-[45%] h-[47.5%] md:h-full flex flex-col mt-[2.5rem] md:mt-0">
        <div className="block absolute w-full h-full top-0 left-0 animate-slide bg-white"></div>
        <span className="block mb-[0.6rem]"><b>PHORIN COLLECTIVE</b></span>
        <span className="block mb-[1.5rem] md:mb-[3rem]">Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean lacinia sem taciti interdum natoque magna faucibus. Lorem proin ultricies morbi aliquam ultricies vestibulum facilisi vestibulum eu.</span>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-b-[1px] border-black mb-[1rem] md:mb-[2rem]"
                    required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b-[1px] border-black mb-[1rem] md:mb-[3rem]"
                    required
                    />
                </div>
                <div className="w-full text-end">
                    <button type="submit"><b>SUBMIT</b></button>
                </div>
                
            </form>
        </div>
        <div className="h-full relative">
          <div className="relative mt-[2rem] md:mt-0 md:absolute bottom-0 left-0 md:right-0 flex flex-col">
            <div className="relative overflow-hidden">
              <a className="block text-xs w-fit mb-[0.3rem] md:ml-auto mr-0" href="https://www.instagram.com/phorin.collective/" target="_blank"><u>Instagram: @phorin.collective</u></a>
              <a className="block text-xs w-fit mb-[0.3rem] md:ml-auto mr-0" href="https://www.tiktok.com/@phorin.collective?lang=en" target="_blank"><u>TikTok: @phorin.collective</u></a>
              <a className="block text-xs w-fit md:ml-auto mr-0" href="https://www.youtube.com/@Phorincollective" target="_blank"><u>YouTube: Phorin Collective</u></a>
              <div className="block absolute w-full h-full top-0 left-0 animate-slideDelay bg-white"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
      

  );
}
