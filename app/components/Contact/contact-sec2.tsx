import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ContactSection2() {
  return (
    <div>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 py-10">
        <h2 className="font-semibold text-3xl">Get In Touch With Us</h2>
        <p className="text-[#9F9F9F] font-normal text-sm px-2">
          For More Information About Our Products And Services. Please Feel Free
          To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col sm:flex-row justify-center pl-8 items-strat gap-12 sm:gap-20 md:gap-28 pt-5 pb-3 pr-4 lg:pr-0">

        {/* Left Side */}
        <div className="max-w-[250px] space-y-6">

          {/* Address */}
          <div>
            <span className="flex items-center gap-2">
              <MdLocationOn size={21}/>
              <h3 className="font-medium text-xl">Address</h3>
            </span>
            <p className="font-normal text-sm pl-6">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>

          {/* Phone */}
          <div>
          <span className="flex items-center gap-2">
          <FaPhoneAlt/>
              <h3 className="font-medium text-xl">Phone</h3>
            </span>
            <p className="font-normal text-sm pl-6">Mobile: +(84) 546-6789</p>
            <p className="font-normal text-sm pl-6">Hotline: +(84) 456-678</p>
          </div>

          {/* Working Time */}
          <div>
          <span className="flex items-center gap-2">
          <GoClockFill />
              <h3 className="font-medium text-xl">Working Time</h3>
            </span>
            <p className="font-normal text-sm pl-6">Monday-Friday: 9:00 - 22:00</p>
            <p className="font-normal text-sm pl-6">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        {/* Right Side */}
        <div>
            <form className="space-y-5 sm:space-y-8">

                {/* Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="font-medium text-sm">Your Name</label>
                    <Input 
                    type="text" required 
                    id="name"
                    placeholder="Abc"
                    className="placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[8px] w-60 sm:w-80 md:w-96"/>
                </div>

                {/*Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="font-medium text-sm">Email address</label>
                    <Input 
                    type="text" required 
                    id="emiail"
                    placeholder="Abc@def.com"
                    className="placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[8px] w-60 sm:w-80 md:w-96"/>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <label htmlFor="add" className="font-medium text-sm">Subject</label>
                    <Input 
                    type="text"
                    id="add"
                    placeholder="This is an optional"
                    className="placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[8px] w-60 sm:w-80 md:w-96 "/>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="font-medium text-sm">Message</label>
                    <textarea 
                    id="message" 
                    rows={2} 
                    placeholder="Hi! I'd like to ask about"
                    className="border border-[#9F9F9F] w-60 sm:w-80 md:w-96 text-[#9F9F9F] placeholder:p-2 placeholder:font-normal placeholder:text-sm placeholder:text-[#9F9F9F] rounded-xl"></textarea>
                </div>

                {/* Button */}
                <Button 
                variant={"outline"}
                className="font-normal text-base w-48 text-center sm:text-left rounded-xl hover:shadow-md hover:bg-slate-200"
                >Submit</Button>

            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection2;
