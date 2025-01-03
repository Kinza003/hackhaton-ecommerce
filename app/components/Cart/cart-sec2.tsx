"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Image from "next/image";


function CardSection2() {
    const route = useRouter();

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center gap-4 mt-9 mx-6">
      
 {/* Main Container */}
 <div className="max-w-6xl">
         {/* Cart Items Table */}
        <div className="hidden md:grid grid-cols-4 items-center bg-[#FFF9E5] py-2 pl-12 px-4 mb-8 text-sm font-medium">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        <div className="space-y-4 md:space-y-0">
           {/* Responsive Rows  */}
           <div className="grid md:grid-cols-4 grid-cols-1 items-center gap-4 p-4">
              {/* Product  */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#FBEBB5] rounded-xl flex-shrink-0">
                <Image
                  src="/assets/Asgaard-sofa.svg" 
                  alt="Asgaard sofa"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain rounded-[300px]"
                />
              </div>
              <span className="text-[#9F9F9F] md:hidden font-normal text-sm">Product:</span>
              <span className="text-[#9F9F9F] font-normal text-sm">Asgaard sofa</span>
            </div>

            {/* Price */}
            <div className="flex md:justify-start items-center space-x-2">
              <span className="text-[#9F9F9F] md:hidden font-normal text-sm">Price:</span>
              <span className="text-[#9F9F9F] font-normal text-sm">Rs. 250,000.00</span>
            </div>

            {/* Quantity  */}
             <div className="flex md:justify-start items-center space-x-2">
              <span className="text-[#9F9F9F] md:hidden font-normal text-sm">Quantity:</span>
              <input
                type="number"
                defaultValue={1}
                className="w-7 h-7 pl-2 border border-[#9F9F9F] rounded-[5px] appearance-none"
              />
            </div> 

               {/* Subtotal  */}
             <div className="flex md:justify-start items-center space-x-2">
              <span className="text-gray-600 md:hidden font-normal text-sm">Subtotal:</span>
              <span className="font-normal text-sm">Rs. 250,000.00</span>
              <button className="text-[#f0d682] hover:text-red-500 pl-4">
              <AiFillDelete />
              </button>
            </div> 

          </div>
         </div>
         </div>




            {/* Cart Totals Section  */}
            <div className="bg-[#FFF9E5] pt-7 rounded-md sm:pt-4 pb-10 space-y-9 px-10 max-w-xs">
                <h2 className="font-semibold text-3xl text-center">Cart Totals</h2>

                <div className="space-y-3">

                    <div className="space-x-4">
                    <span className="font-medium text-sm">Subtotal</span>
                    <span className="text-[#9F9F9F] font-normal text-sm text-nowrap">Rs. 250,000.00</span>
                    </div>

                    <div className="space-x-5">
                    <span>Total</span>
                    <span className="text-[#B88E2F] text-base font-medium text-nowrap">Rs. 250,000.00</span>
                    </div>

                </div>

                <Button 
                variant={"outline"}
                onClick={() => route.push("/components/Checkout")}
                className="mx-8 rounded-xl hover:shadow-md hover:bg-[#eeddbf]">Check Out</Button>

            </div>

    </div>
  )
}

export default CardSection2
