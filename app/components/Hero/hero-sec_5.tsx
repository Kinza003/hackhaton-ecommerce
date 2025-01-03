"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { HeroSection5Props } from '../props'
import { Button } from '@/components/ui/button'

function HeroSection5() {
  const route = useRouter();
    const blogs = [
        {
            image: "/assets/hero-sec5-1.png",
            title: "Going all-in with millennial design",
            button: "Read More",
            date: "Oct 2022",
            time: "5 min"
        },
        {
            image: "/assets/hero-sec5-2.png",
            title: "Going all-in with millennial design",
            button: "Read More",
            date: "Oct 2022",
            time: "5 min"
        },
        {
            image: "/assets/hero-sec5-3.png",
            title: "Going all-in with millennial design",
            button: "Read More",
            date: "Oct 2022",
            time: "5 min"
        },
    ]

  return (
    <div className='py-12 px-3 lg:px-0'>
      
      {/* Heading */}
      <div className='text-center space-y-3'>
        <h3 className='font-semibold text-4xl'>Our Blogs</h3>
        <p className='text-[#9F9F9F] font-medium text-base px-2'>Find a bright ideal to suit your taste with our great selection</p>
      </div>

      {/* Card */}
      <div className='flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mt-12'>
        {blogs.map((blog, index) => (
            <HeroSection5Props
            key={index}
            image={blog.image}
            title={blog.title}
            button={blog.button}
            date={blog.date}
            time={blog.time}
            />
        ))}
      </div>

      {/* Button */}
      <div className='text-center mt-7'>
        <Button 
        variant={"link"} 
        onClick={() => route.push('/components/Blog')}
        className='text-mediun text-base text-shadow-md underline underline-offset-[12px] hover:text-neutral-500'>View All Post</Button>
      </div>
    </div>
  )
}

export default HeroSection5
