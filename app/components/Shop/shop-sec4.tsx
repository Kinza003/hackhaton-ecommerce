import React from 'react'

function ShopSection4() {
  return (
    <div className='flex flex-col sm:flex-row text-center sm:text-left justify-around items-center gap-10 sm:gap-3 bg-[#FAF4F4] my-5 py-16 px-10 sm:px-6 md:px-10'>

        <div className='space-y-2'>
            <h2 className='font-mono text-2xl sm:text-xl md:text-2xl'>Free Delievery</h2>
            <p className='font-normal text-base text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
        </div>

        <div className='space-y-2'>
            <h2 className='font-mono text-2xl sm:text-xl md:text-2xl'>90 Days Return</h2>
            <p className='font-normal text-base text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
        </div>

        <div className='space-y-2'>
            <h2 className='font-mono text-2xl sm:text-xl md:text-2xl'>Secure Payment</h2>
            <p className='font-normal text-base text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
        </div>

    </div>
  )
}

export default ShopSection4
