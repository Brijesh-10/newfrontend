import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon} from 'react-icons/fa';
export default function Header() {
    const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2 bg-gray-800'>
         <div className="flex items-center">
                <div className='mr-4 lg:mr-0'>
                    <TextInput
                        type='text'
                        placeholder='Search...'
                        rightIcon={AiOutlineSearch}
                        className=' lg:inline w-full lg:w-64'
                    />
                </div>
                {/* <Button className='w-14 h-10' color='gray'>
                    <AiOutlineSearch/>
                </Button> */}
            </div>
        <div className='flex gap-2 md:order-2'>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse className=" gap-4 md:gap-10">
    <Navbar.Link className='text-cyan-600'><Link to='#'>Categories</Link></Navbar.Link>
    <Navbar.Link className='text-cyan-600'><Link to='#'>Website Builders</Link></Navbar.Link>
    <Navbar.Link className='text-cyan-600'><Link to='#'>Today's deals</Link></Navbar.Link>
    <Navbar.Link className='text-cyan-600'><Link to='#'>Projects</Link></Navbar.Link>
</Navbar.Collapse>

    </Navbar>
  )
}
