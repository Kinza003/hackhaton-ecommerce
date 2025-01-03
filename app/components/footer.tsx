import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Footer() {
    return (
      <footer className="py-10 px-6">
        <div className="max-w-6xl text-center mx-auto gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Address */}
          <div>
            <h4 className="text-[#9F9F9F] font-semibold mt-3 sm:mt-0">Address</h4>
            <p className="mt-4 sm:mt-2 text-sm">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="text-[#9F9F9F] font-semibold  mt-3 sm:mt-0">Links</h4>
            <ul className="mt-4 sm:mt-2 space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/components/Shop" className="text-sm hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/components/Contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h4 className="text-[#9F9F9F] font-semibold  mt-3 sm:mt-0">Help</h4>
            <ul className="mt-4 sm:mt-2 space-y-1 sm:space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h4 className="text-[#9F9F9F] font-semibold  mt-3 sm:mt-0">Newsletter</h4>
            <form className="mt-4 sm:mt-2">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full py-2 px-3 text-sm text-gray-700 border-b border-black focus:outline-none"
                />
                <Button
                  variant={"link"}
                  className="text-sm font-semibold underline underline-offset-8"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </form>
          </div>
        </div>
  
        {/* Bottom Text */}
        <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
          © 2022 Meubel House. All rights reserved.
        </div>
      </footer>
    );
  }
  