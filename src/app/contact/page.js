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
    <div className="absolute top-0 px-[3.75rem] pt-[6.88rem] pb-[2.5rem] flex flex-wrap gap-x-[10%] w-full h-full">
        <div className="absolute left-[35%] top-[60%] z-[1]">
            <h1>SIGN UP</h1>
            <h1>NEWSLETTER</h1>
        </div>
      <div className="relative w-[45%] h-full overflow-hidden">
        <span className="block mb-[0.6rem]"><b>CONTACT</b></span>
        <Image src={ContactImage} className="w-full h-full object-cover object-top" width={500} alt="oops"/>
      </div>
      <div className="w-[45%] h-full flex flex-col">
        <span className="block mb-[0.6rem]"><b>PHORIN COLLECTIVE</b></span>
        <span className="block mb-[3rem]">Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean lacinia sem taciti interdum natoque magna faucibus. Lorem proin ultricies morbi aliquam ultricies vestibulum facilisi vestibulum eu.</span>
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
                    className="border-b-[1px] border-black mb-[2rem]"
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
                    className="border-b-[1px] border-black mb-[3rem]"
                    required
                    />
                </div>
                <div className="w-full text-end">
                    <button type="submit">Send</button>
                </div>
                
            </form>
        </div>
        <div className="h-full relative">
          <div className="absolute bottom-0 right-0 flex flex-col">
            <a className="block w-fit mb-[0.3rem] ml-auto mr-0" href="https://www.instagram.com/phorin.collective/" target="_blank"><u>Instagram: @phorin.collective</u></a>
            <a className="block w-fit mb-[0.3rem] ml-auto mr-0" href="https://www.tiktok.com/@phorin.collective?lang=en" target="_blank"><u>TikTok: @phorin.collective</u></a>
            <a className="block w-fit ml-auto mr-0" href="https://www.youtube.com/@Phorincollective" target="_blank"><u>YouTube: Phorin Collective</u></a>
          </div>
        </div>
      </div>
    </div>
      

  );
}
