'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function HeroSection1() { 
  const router = useRouter()

  return (
   
    <div className="bg-[#FBEBB5] flex flex-col md:flex-row items-center justify-center px-6 sm:px-20 py-8 sm:py-0 lg:px-24 gap-3">

      {/* Text Section */}
      <div className="text-center sm:text-left space-y-3 max-w-lg sm:pt-20 md:pb-36 lg:pb-52 sm:ml-24 md:ml-0 lg:ml-20">
        <h1 className="text-3xl font-poppins sm:text-4xl sm:max-w-xs font-bold">
          Rocket single seater
        </h1>
        <button 
        onClick={() => router.push("/components/Shop")} 
        className="font-semibold underline underline-offset-8 hover:text-gray-500 hover:font-thin">Shop Now</button>
      </div>

      {/* Image Section */}
      <div className="mt-0 sm:mt-0 flex justify-center">
        <Image
          src="/assets/hero.png" // Ensure the image is placed correctly in the public folder
          alt="Rocket single seater"
          width={500} // Adjusted for better scaling
          height={600} // Adjusted for better scaling
          className="rounded-lg drop-shadow-lg object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default HeroSection1;
