"use client";
import { ChevronRight, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import {Button} from "@/components/ui/button";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/navigation";


interface ImageType {
  images: string[];
}

function SingleProductSection1({ images }: ImageType) {
  // State To Manage Selected Product Image
  const [selectedImage, setSelectedImage] = useState(images[0]);
  // State To Manage Product Size
  const [selectedSize, setSelectedSize] = useState("L");
  // State To Manage Product Quantity
  const [quantity, setQuantity] = useState(1);
  // State To Manage Cart Popup Visiblity
  const [isPopupOpen, setIsPopupOpen] = useState(false); // For Cart Popup

  // Sizes Array
  const sizes = ["L", "XL", "XS"];

  // Function To Increase Quantity
  const IncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function To Decrease Quantity
  const DecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  };

  // Function To Toggle Cart Popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const route = useRouter();

  return (
    <div className="pb-8">
      {/* Navigation */}
      <div className="flex gap-3 py-5 pl-3 lg:pl-0">
        <span className="flex items-center">
          <Link href={"/"} className="text-[#9F9F9F] text-sm font-normal">
            Home
          </Link>
          <ChevronRight size={18} />
        </span>

        <span className="flex items-center">
          <Link
            href={"/components/Shop"}
            className="text-[#9F9F9F] text-sm font-normal"
          >
            Shop
          </Link>
          <ChevronRight size={18} />
        </span>

        <span className="flex items-center text-sm font-normal">
          <Link href={"single-product-pg"} className="text-sm font-normal">
            Asgaard Sofa
          </Link>
        </span>
      </div>

      {/* Main Product Section */}
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Image Gallery */}
        <div className="flex flex-col px-2 max-h-96 sm:flex-row gap-3">
          {/* Column Images Start */}
          <div className="flex sm:flex-col gap-2">
            {images.map((image, index) => (
              <Image
                width={20}
                height={20}
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`w-14 h-14 rounded-[8px] cursor-pointer bg-[#FFF9E5] border ${
                  selectedImage === image ? "border-gray-700" : "border-none"
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          {/* Column Images End */}

          {/* Main Image Start */}
          <div className="flex-1">
            <Image
              src={selectedImage}
              alt="Selected"
              width={2500}
              height={200}
              className="w-96 h-64 sm:h-80 lg:h-80 rounded-[9px] object-cover flex-shrink-0 sm:object-contain lg:object-cover bg-[#FFF9E5]"
            />
          </div>
          {/* Main Image End */}
        </div>
        {/* Imade Gallery End */}

        {/* Product Detail Start */}
        <div className="sm:max-w-xs lg:max-w-md space-y-3 px-3">
          {/* Price And Rating Start */}
          <div className="space-y-1">
            <h2 className="font-semibold text-3xl">Asgaard Sofa</h2>
            <p className="font-medium text-xl text-[#9F9F9F]">Rs. 25,000.00</p>
            <span className="flex items-center gap-3">
              <p className="text-[#FFDA5B] pr-3 border-r  border-[#9F9F9F]">
                ★★★★★
              </p>
              <p className="font-normal text-xs text-[#9F9F9F]">
                5 Customer Review
              </p>
            </span>
            <p className="font-normal text-xs text-zinc-800">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>
          {/* Price And Rating end */}

          {/* Size, Color And Quantity */}
          <div className="space-y-3">
            {/* Size Start */}
            <div className="space-y-2">
              <h6 className="font-medium text-sm text-[#9F9F9F]">Size</h6>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-[5px] w-7 h-7 text-xs font-medium ${
                      selectedSize === size ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Size End */}

            {/* Color Start */}
            <div className="space-y-2">
              <h6 className="font-medium text-sm text-[#9F9F9F]">Color</h6>
              <div className="space-x-3">
                <button className="bg-[#816DFA] rounded-full h-6 w-6"></button>
                <button className="bg-black rounded-full h-6 w-6"></button>
                <button className="bg-[#CDBA7B] rounded-full h-6 w-6"></button>
              </div>
            </div>
            {/* Color End */}

            {/* Button Start */}

            <div className="flex gap-4 items-center border-b border-[#D9D9D9] pb-12">

              {/* Quantity Selector */}
              <div>
                <Button className="border border-[#9F9F9F] py-2 rounded-xl">
                  {/* Decrease Quantity */}
                 <button
                 className="px-1 lg:px-2"
                 aria-label="Decrease Quantity"
                 onClick={DecreaseQuantity}
                 >-</button>

                 <span className="px-3 font-medium text-base">{quantity}</span>

                 {/* Increase Quantity */}
                 <button
                 className="px-2"
                 aria-label="Increase Quantity"
                 onClick={IncreaseQuantity}>+</button>
                </Button>
              </div>

              {/* Add To Cart Button */}
              <div>
                <button
                onClick={togglePopup} 
                className="rounded-xl py-2 px-4 lg:px-7 border border-black">Add To Cart</button>
              </div>

            </div>
            {/* Button End */}


            {/* Footer */}
            <div className="text-[#9F9F9F] font-normal text-sm space-y-3">
              <p><span className="pr-20">SKU : </span>SS001</p>
              <p><span className="pr-9">Category : </span>Sofas</p>
              <p><span className="pr-[70px]">Tags : </span>Sofa, Chair, Home, Shop</p>
              <p className="flex items-center gap-3 text-black"><span className="text-[#9F9F9F] pr-[59px]">Share : </span><FaFacebook /> <FaLinkedin /> <AiFillTwitterCircle /></p>
            </div>

          </div>
        </div>
        {/* Product Detail End */}

      </div>





     {/* Cart Popup Start */}
     {isPopupOpen && (
      <>
       {/* Overlay For Popup Start */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40"
      onClick={togglePopup}></div>
      {/*  Overlay For Popup End */}

       {/* Popup Content Start */}
      <div className="fixed w-80 h-80 sm:h-full top-0 right-0 bg-white z-50 shadow-lg transform -translate-x-0 transition-transform duration-100">
        <div className="p-4">
              
              {/* Heading Start */}
              <div className="flex items-baseline justify-between border-b border-[#D9D9D9] pt-2 pb-1">
              <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
              <button onClick={togglePopup}>
              <CgClose size={22} className="text-gray-500 hover:text-gray-700"/>
              </button>
              </div> 
              {/* Heading End */}

              {/* Cart Items Start */}
              <div>
                {/* Image */}
                <div className="flex items-center gap-4 mt-5">
                  <Image
                  src={selectedImage} alt="Selected Product"
                  width={20} height={20}
                  className="bg-[#FBEBB5] h-20 w-20 object-contain"/>
                  <div className="space-y-1">
                    <h5 className="font-normal text-base">Asgaard Sofa</h5>
                    <p className="font-extralight text-xs">{quantity} x <span className="text-[#B88E2F]">Rs. 25,000.00</span></p>
                  </div>
                </div>

                {/* Subtotal And Buttons */}
                <div className="mt-8 sm:mt-32 lg:mt-44">

                  {/* Total */}
                  <div className="flex gap-24 pt-4">
                    <p className="font-normal text-base">Subtotal</p>
                    <p className="text-[#B88E2F] font-semibold text-base">Rs. {25000 * quantity}</p>
                  </div>

                  {/* Button */}
                  <div className="mt-3 flex gap-10 pt-3 border-t border-[#D9D9D9]">
                    <Button 
                    variant={"outline"} 
                    onClick={() => route.push("/components/Cart")}
                    className="font-normal text-xs h-7 w-28 rounded-xl hover:bg-slate-200 shadow-md">
                    View Cart
                    </Button>

                    <Button 
                    variant={"outline"} 
                    onClick={() => route.push("/components/Checkout")}
                    className="font-normal text-xs h-7 w-28 rounded-xl hover:bg-slate-200 shadow-md">
                    Checkout
                    </Button>
                  </div>

                </div>

              </div>
              {/* Cart Items End */}


        </div>
      </div>
       {/* Popup Content End */}
      </>
     )}
     {/* Cart Popup End */}




    </div>
    
  )
}
    

export default SingleProductSection1;
