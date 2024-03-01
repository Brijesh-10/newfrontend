// import React from 'react'
// import { Footer } from 'flowbite-react';
// import { Link } from 'react-router-dom';
// import { HiOutlineChevronDown } from 'react-icons/hi';
// export default function FooterComponent() {
//   return (
//     <Footer container className='border border-gray-800 bg-gray-800 '>
//       <div className='w-full max-w-7xl mx-auto flex justify-center '>
//         {/* <div className='grid w-full justify-center sm:flex md:grid-cols-1'> */}
//         <div className='grid w-full justify-center sm:flex md:grid-cols-1 '>
//           <div className='mt-5'></div>
//           <div className='grid mt-4 grid-cols-3 sm:gap-16 gap-8'>
//             <div className='px-8'>
//               <Footer.Title title='Categories' className="text-white" />
//               <Footer.LinkGroup col>
//                 {['Web Builder', 'Hosting', 'Data Center', 'Robotic-Automation'].map((link, index) => (
//                   <Footer.Link
//                     key={index}
//                     href='#'
//                     target='blank' rel='noopener noreferrer'
//                     className="text-grey">
//                     {link}
//                   </Footer.Link>
//                 ))}
//               </Footer.LinkGroup>
//             </div>
//             <div className='px-8'>
//               <Footer.Title title='Contact' className="text-white" />
//               <Footer.LinkGroup col>
//                 {['Contact', 'Privacy Policy', 'Terms of Service', 'Categories', 'About'].map((link, index) => (
//                   <Footer.Link
//                     key={index}
//                     href='#'
//                     target='blank'
//                     className="text-grey">
//                     {link}
//                   </Footer.Link>
//                 ))}
//               </Footer.LinkGroup>
//             </div>
//             <button className="flex items-center text-white px-8">
//               Dropdown
//               <HiOutlineChevronDown className="ml-1" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </Footer>
    

//   );
// };


import React from 'react';
import { Footer } from 'flowbite-react';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function FooterComponent() {
  return (
    <Footer container className='border border-gray-800 bg-gray-800'>
      <div className='w-full max-w-7xl mx-auto flex justify-center'>
        <div className='grid w-full justify-center sm:flex md:grid-cols-1'>
          <div className='mt-5'></div>
          <div className='grid mt-4 grid-cols-3 gap-8 sm:gap-16'>
            <FooterColumn title='Categories' links={['Web Builder', 'Hosting', 'Data Center', 'Robotic-Automation']} />
            <FooterColumn title='Contact' links={['Contact', 'Privacy Policy', 'Terms of Service', 'Categories', 'About']} />
            <div className='px-8 flex items-center text-white'>
              Dropdown <HiOutlineChevronDown className="ml-1" />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className='px-8'>
      <Footer.Title title={title} className="text-white" />
      <Footer.LinkGroup col>
        {links.map((link, index) => (
          <Footer.Link key={index} href='#' target='blank' rel='noopener noreferrer' className="text-grey">
            {link}
          </Footer.Link>
        ))}
      </Footer.LinkGroup>
    </div>
  );
}

