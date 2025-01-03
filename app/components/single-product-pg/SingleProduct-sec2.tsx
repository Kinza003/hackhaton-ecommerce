import Image from 'next/image'
import React from 'react'

function SingleProductSection2() {
  return (
    <div className='border-y border-[#D9D9D9] py-5'>
      
      {/* Heading */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-1 lg:gap-16 pb-7'>
        <h4 className='font-normal text-xl'>Description</h4>
        <h4 className='font-normal text-xl text-[#9F9F9F]'>Additional Information</h4>
        <h4 className='font-normal text-xl text-[#9F9F9F]'>Reviews [5]</h4>
      </div>

      {/* Description */}
      <div className='space-y-4 max-w-3xl mx-auto px-3 text-justify mb-5'>
        <p className='text-[#9F9F9F] font-normal text-sm'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className='text-[#9F9F9F] font-normal text-sm'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>

      {/* Images */}
      <div className='flex flex-col sm:flex-row justify-center gap-4 max-w-4xl mx-auto px-3'>
        <Image 
        src={"/assets/SingleProduct-img5.png"}
        alt='Sofa 1'
        width={605}
        height={348}
        className='bg-[#FFF9E5]'
        />
        <Image
        src={"/assets/SingleProduct-img6.png"}
        alt='Sofa 2'
        width={605}
        height={348}
        className='bg-[#FFF9E5]'
        />
      </div>

    </div>
  )
}

export default SingleProductSection2
