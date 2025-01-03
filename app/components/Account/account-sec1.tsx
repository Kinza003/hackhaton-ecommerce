import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function AccountSection1() {
  return (
    <div className='w-full bg-banner flex flex-col items-center py-20 sm:pt-5 sm:pb-8'>
      
      {/* Logo */}
      <div>
        <Image 
        src={"/assets/banner-logo.png"} 
        alt='logo'
        width={60}
        height={60}
        />
      </div>

      {/* Heading */}
      <div>
        <h1 className='font-medium text-5xl'>My Account</h1>
      </div>

      {/* Links */}
      <div className='flex mt-3'>
        <Link href={"/"} className='font-medium text-base'>Home</Link>
        <ChevronRight/>
        <Link href={"account"} className='font-thin text-base text-gray-500'>My account</Link>
      </div>

    </div>
  )
}

export default AccountSection1








// import React from 'react'
// import { Banner } from '../props'

// function Account() {
//   const bannerData = {
//     title: "My Account",
//     links: [
//         {label: "Home", href: "/"},
//         {label: "My Account", href: "My account"},
//       ],
//   }
//   return (
//     <div>
//       <Banner title={bannerData.title} links={bannerData.links}/>
//     </div>
//   )
// }

// export default Account











// import Banner from "../props";

// const HomePage = () => {
//   const bannerData = {
//     title: "Welcome to Kinza's Sofa Store",
//     links: [
//       { label: "Home", href: "/" },
//       { label: "Contact", href: "/contact" },
//       // { label: "Blog", href: "/blog" },
//     ],
//   };

//   return (
//     <div>
//       <Banner title={bannerData.title} links={bannerData.links} />
//     </div>
//   );
// };

// export default HomePage;

