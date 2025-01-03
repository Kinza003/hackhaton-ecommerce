import { Input } from "@/components/ui/input";
import React from "react";

function CheckoutSection2() {
  return (
    <div className="flex flex-col gap-y-8 sm:flex-row justify-evenly py-4 sm:py-12 sm:px-3">
      {/* Billing Detail */}
      <div className="space-y-6 px-3 py-1">
        <h2 className="font-semibold text-3xl text-center sm:text-left">
          Billing Details
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div className="flex gap-5">
            {/* First Name */}
            <span className="space-y-2">
              <label htmlFor="fname" className="font-medium text-sm">
                First Name
              </label>
              <Input
                type="text"
                id="fname"
                required
                className="w-[140px] rounded border-[#9F9F9F]"
              />
            </span>
            {/* Last Name */}
            <span className="space-y-2">
              <label htmlFor="lname" className="font-medium text-sm">
                Last Name
              </label>
              <Input
                type="text"
                id="lname"
                required
                className="w-[140px] rounded border-[#9F9F9F]"
              />
            </span>
          </div>

          {/* Compay Name */}
          <div className="space-y-2">
            <label htmlFor="cname" className="font-medium text-sm">
              CompanY Name (Optional)
            </label>
            <Input
              type="text"
              id="cname"
              className="w-[300px] rounded border-[#9F9F9F]"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="country" className="font-medium text-sm">
              Country / Region
            </label>
            <select
              id="country"
              className="w-[300px] rounded border border-[#9F9F9F] p-2 appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundPosition: "right 10px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1rem",
              }}
            >
              <option>Pakistan</option>
              <option>SriLanka</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Street Address */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="address" className="font-medium text-sm">
              Street Address
            </label>
            <Input
              id="address"
              required
              className="w-[300px] rounded border-[#9F9F9F]"
            />
          </div>

          {/* City */}
          <div className="space-y-2">
            <label htmlFor="city" className="font-medium text-sm">
              Town / City
            </label>
            <Input
              type="text"
              id="city"
              required
              className="w-[300px] rounded border-[#9F9F9F]"
            />
          </div>

          {/* Province */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="province" className="font-medium text-sm">
              Province
            </label>
            <select
              id="province"
              className="w-[300px] rounded border border-[#9F9F9F] p-2 appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundPosition: "right 10px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1rem",
              }}
            >
              <option>Western Province</option>
              <option>SriLanka</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Zip Code */}
          <div className="space-y-2">
            <label htmlFor="zcode" className="font-medium text-sm">
              Zip Code
            </label>
            <Input
              type="password"
              id="zcode"
              required
              className="w-[300px] rounded border-[#9F9F9F]"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="font-medium text-sm">
              Phone
            </label>
            <Input
              type="password"
              id="phone"
              required
              className="w-[300px] rounded border-[#9F9F9F]"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label htmlFor="email" className="font-medium text-sm">
              Email Address
            </label>
            <Input
              type="password"
              id="email"
              required
              className="w-[300px] rounded border-[#9F9F9F]"
            />
          </div>

          {/* Additional Info */}
          <Input
            id="address"
            placeholder="Additional Information..."
            className="w-[300px] rounded border-[#dbd1d1] placeholder:text-[#9F9F9F] placeholder:pr-2"
          />
        </form>
      </div>




      {/* Product Detail */}
      <div className="max-w-sm px-2 mt-0">
        {/* Product Price */}
        <div className="flex justify-between px-3 sm:px-0 pb-3 border-b border-[#D9D9D9]">
          {/* left div */}
          <div className="space-y-3">
            <h4 className="font-medium text-xl">Product</h4>
            <p className="font-normal text-sm">
              <span className="text-[#9F9F9F]">Asgaard sofa </span>x 1
            </p>
            <p className="font-normal text-sm">Subtotal</p>
            <p className="font-normal text-sm">Total</p>
          </div>

          {/* Right div */}
          <div className="space-y-3 text-right">
            <h4 className="font-medium text-xl">Subtotal</h4>
            <p className="font-extralight text-sm">Rs. 250,000.00</p>
            <p className="font-extralight text-sm">Rs. 250,000.00</p>
            <p className="text-[#B88E2F] font-bold text-medium">
              Rs. 250,000.00
            </p>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-3">
            <input type="radio" name="transaction" />
            <label className="font-normal text-sm">Direct Bank Transfer</label>
          </div>

          <p className="text-[#9F9F9F] font-extralight text-sm">
            Make your payment directly in your bank account. Please use your
            Other ID as the payment reference. Your order will not be shipped
            untill the funds have cleared in our account.
          </p>

          <div className="flex items-center gap-3">
            <input type="radio" name="transaction" />
            <label className="font-normal text-sm text-[#9F9F9F]">
              Direct Bank Transfer
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input type="radio" name="transaction" />
            <label className="font-normal text-sm text-[#9F9F9F]">
              Cash On Delievery
            </label>
          </div>

          <p className="font-normal text-sm">
            Your personal data will be used to support your experiance
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a className="font-semibold text-sm hover:underline" href="">
              privacy policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSection2;
