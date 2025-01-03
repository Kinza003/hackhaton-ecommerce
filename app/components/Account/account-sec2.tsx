import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

function AccountSection2() {
  return (
    <div className='flex flex-col sm:flex-row gap-y-14 justify-evenly py-12'>

        {/* Login */}
        <div className='space-y-6 px-3'>
            <h2 className='font-semibold text-center sm:text-left text-3xl'>Log In</h2>

            {/* Form Starts */}
            <form className='space-y-6'>

            {/* email */}
            <div className='space-y-2'>
            <label htmlFor="email" className='font-medium text-sm' >Username or email address</label>
            <Input type="text" id='email' required className='w-[300px] rounded border-[#9F9F9F]'/>
            </div>

            {/* password */}
            <div className='space-y-2'>
            <label htmlFor="password"  className='font-medium text-sm'>Password</label>
            <Input type='password' id='password' required className='w-[300px] rounded border-[#9F9F9F]'/>
            </div>

            {/* Check */}
            <div className='flex items-center gap-3 '>
            <input type='checkbox' id='remember' className='h-5 w-5 rounded border-[#9F9F9F]'/>
            <label htmlFor='remember' className='font-normal text-sm'>Remember me</label>
            </div>

            {/* Button */}
            <div className='space-x-5'>
                <Button type='submit' variant={"outline"} size={"lg"} className='rounded-xl shadow-md hover:bg-slate-100'>Login</Button>
                <Link href={""} className='font-light text-sm hover:underline'>Lost Your Password?</Link>
            </div>

            </form>
            {/* Form ends */}

        </div>
        {/* Login ends */}





        {/* Register */}
        <div className='space-y-6 px-3 max-w-xs'>
            <h2 className='font-semibold text-center sm:text-left text-3xl'>Register</h2>

            {/* form starts */}
            <form className='space-y-6'>

            {/* email */}
            <div className='space-y-2'>
            <label htmlFor="email" className='font-medium text-sm' >Username or email address</label>
            <Input type="text" id='email' required className='w-[300px] rounded border-[#9F9F9F]'/>
            </div>

            {/* Paragraph 1 */}
            <p className='font-light text-xs'>A link to set a new password will be sent to your email address.</p>

            {/* Paragraph 2 */}
            <p className='font-light text-xs'>Your personal data will be used to support your experiance throughout this website, to manage access to your account, and for other purposes described in our <a href="" className='hover:underline hover:text-blue-500'>Privacy Policy</a></p>

            {/* Button */}
            <Button type='submit' variant={"outline"} size={"lg"} className='rounded-xl shadow-md hover:bg-slate-100'>Register</Button>

            </form>

        </div>
      
    </div>
  )
}

export default AccountSection2
