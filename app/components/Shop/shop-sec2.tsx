import { SlidersHorizontal } from 'lucide-react'
import React from 'react'
import { CgLayoutGrid } from "react-icons/cg";
import { IoListSharp } from "react-icons/io5";

function ShopSection2() {
  return (
    <div className='bg-[#FAF4F4] hidden sm:flex justify-around items-center mt-6 py-4'>
       
      {/* Left div */}
      <div className='flex  gap-6'>

        <span className='flex items-center gap-2'>
            <SlidersHorizontal size={'14px'}/> 
            <p className='font-normal text-sm'>Filter</p>
            
        </span>

        <span className='flex items-center gap-2'>
        <CgLayoutGrid size={'26px'}/>
        <IoListSharp size={'20px'}/>
        </span>

        <span className='border-l-2 border-[#9F9F9F] pl-5 text-sm font-normal flex items-center'>
        Showing 1-16 of 32 results
        </span>


      </div>

      {/* Right div */}
      <div className='flex gap-4'>

        <div className='flex gap-3 items-center text-sm font-normal'>

            <p>Show</p>
            <p className='bg-white text-[#9F9F9F] p-3'>16</p>

        </div>

        <div className='flex gap-3 items-center text-sm font-normal'>

            <p>Sort by</p>
            <p className='bg-white text-[#9F9F9F] p-3'>Default</p>

        </div>

      </div>

    </div>
  )
}

export default ShopSection2
