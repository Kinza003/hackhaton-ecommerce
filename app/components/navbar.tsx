"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";


function Navbar() {
  const route = useRouter();

  return (
    <nav className="w-full bg-[#FBEBB5] p-3">
      <div className="max-w-5xl mx-auto flex items-center justify-end gap-14">
        <div className="flex gap-44">

          {/* Link Start */}
          <div className="sm:w-60 md:w-[350px] h-[24px] mx-auto hidden sm:flex items-center justify-between font-medium text-sm">
            <Link href="/" className="hover:underline hover:font-semibold">
              Home
            </Link>
            <Link href="/components/Shop" className="hover:underline hover:font-semibold">
              Shop
            </Link>
            <Link href="/" className="hover:underline hover:font-semibold">
              About
            </Link>
            <Link href="/components/Contact" className="hover:underline hover:font-semibold">
              Contact
            </Link>
          </div>
           {/* Link End */}


          {/* Icon start */}
          <div className="flex items-center justify-between w-[160px]">

            {/* Account */}
            <Button 
            variant={"ghost"} 
            onClick={() => route.push("/components/Account")}
            className="size-4 hover:text-gray-500 hover:size-[18px] cursor-pointer">
            <span className="relative">
              <User className="size-4 hover:text-gray-500 hover:size-[18px] cursor-pointer" />{" "}
              <span className="absolute left-[14px] top-0 text-xs">!</span>
            </span>
            </Button>

            {/* Search */}
            <Button 
            variant={"ghost"} 
            onClick={() => route.push("/")}
            className="size-4 hover:text-gray-500 hover:size-[18px] cursor-pointer">
            <Search className="size-4 hover:text-gray-500 hover:size-[18px] cursor-pointer" />
            </Button>

            {/* Heart */}
            <Button 
            variant={"ghost"} 
            onClick={() => route.push("/")}
            className="size-4 hover:text-slate-600 hover:size-[18px] cursor-pointer">
            <Heart className="size-4 hover:text-slate-600 hover:size-[18px] cursor-pointer" />
            </Button>

            {/* Shopping Cart */}
            <Button 
            variant={"ghost"} 
            onClick={() => route.push("/components/Cart")}
            className="size-4 hover:text-slate-600 hover:size-[18px] cursor-pointer" >
            <ShoppingCart/>
            </Button>
          </div>
           {/* Icons end */}
         </div>



           {/*Links mobile screen */}
        <Sheet>
          <SheetTrigger className="sm:hidden flex">
            <FiMenu className="mr-4 flex items-center hover:text-slate-600 hover:size-[18px] cursor-pointer" />
          </SheetTrigger>

          <SheetContent className="bg-[#FBEBB5]">
            <SheetTitle className="text-center">Menu</SheetTitle>
            <div className="sm:hidden flex flex-col items-center gap-4 mt-8 font-medium text-sm">
              <Link href="/" className="hover:underline hover:font-semibold">
                Home
              </Link>
              <Link href="/components/Shop" className="hover:underline hover:font-semibold">
                Shop
              </Link>
              <Link href="/" className="hover:underline hover:font-semibold">
                About
              </Link>
              <Link href="/components/Contact" className="hover:underline hover:font-semibold">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet> 

       </div>

    </nav>
  )
}

export default Navbar





