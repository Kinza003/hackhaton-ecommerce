'use client';
import { Button } from '@/components/ui/button'
import { Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

interface CardType {
    image: string,
    user?: string,
    category?: string,
    description?: string,
    title: string,
    button?: string,
    price?: number,
    time?: string,
    date?: string,
    links?: string[],
}

// Prop for shop products

export function Shop ({image, title, price} : CardType) {
  return (
    <div className='flex flex-col w-42'>

      
      <Image src={image} alt="Sofa" width={247} height={247} className='object-contain h-52 w-full'/>
      <div className='text-center sm:text-left space-y-2 mt-2 px-2 py-1'>
        <p className='font-normal text-sm sm:text-sm md:text-base'>{title}</p>
        <p className='font-semibold text-xl sm:text-base md-text-2xl'>Rs: {price}</p>
        </div>
    </div>
  )
}



// Prop for Blog section in hero

export function HeroSection5Props ({image, title, button, time, date} : CardType) {
  const route = useRouter();
  return (
     <div>

      {/* Image */}
      <Image src={image} alt='blog img' width={280} height={280} className='object-contain mx-auto rounded-xl'/>

      <div className='space-y-1 py-4 text-center'>

      {/* Description */}
      <p className='font-normal text-sm'>{title}</p>

      {/* Button */}
      <Button variant={"link"} onClick={() => route.push('/components/Blog')} className='text-center font-medium text-base hover:text-blue-500 underline underline-offset-4'>{button}</Button>
      
      {/* Date And Time */}
      <p className='flex justify-center gap-x-4 font-thin text-[9px]'>
        <span className='flex items-center gap-x-2'><Clock/> {time} </span>
        <span className='flex items-center gap-x-2'><Calendar/> <span>12<sup>th</sup> {date}</span> </span> 
      </p>

      </div>

     </div>
     )
}



// Prop for blog page


export function BlogPageProps1 ({image, user, date, category, title, description, button} : CardType) {
  return(
    <div className='space-y-3'>

      <div className='space-y-1'>

      <Image src={image} alt="Blog" width={817} height={500} className='w-full h-64 object-cover rounded-[8px]'/>

      <div className='flex items-center gap-3 sm:gap-4'>
        <span className='flex gap-1 sm:gap-2 items-center text-sm text-[#9F9F9F]'><FaUser /> {user }</span>
        <span className='flex gap-1 sm:gap-2 items-center text-sm text-[#9F9F9F]'><FaCalendar /> {date}</span>
        <span className='flex gap-1 sm:gap-2 items-center text-sm text-[#9F9F9F]'><FaTag /> {category}</span>
      </div>

    </div>

    <div className='space-y-2'>
      <h2 className='font-semibold text-xl'>{title}</h2>
      <p className='text-sm font-normal text-[#9F9F9F]'>{description}</p>
      <button className='font-normal text-base underline underline-offset-8 hover:text-blue-500'>{button}</button>
    </div>


    </div>
  )
}



export function BlogPageProps2({ image, title, date }: CardType) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={image}
        alt="blog"
        height={60}
        width={60}
        className="rounded-xs object-cover flex-shrink-0"
      />
      <div>
        <p className="font-light text-sm">{title}</p>
        <p className="text-[#9F9F9F] font-extralight text-xs">{date}</p>
      </div>
    </div>
  );
}


