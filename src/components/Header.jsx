import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { Navbar, TextInput } from 'flowbite-react';

export default function Header() {

    return (
        <Navbar className='border-b-2 bg-gray-800 text-white'>
            <Navbar.Collapse>
                <Navbar.Link><Link to='#' className="text-white">Categories</Link></Navbar.Link>
                <Navbar.Link><Link to='#' className="text-white">Website Builders</Link></Navbar.Link>
                <Navbar.Link><Link to='#' className="text-white">Today's deals</Link></Navbar.Link>
            </Navbar.Collapse>
            <div className='flex gap-2 md:order-2'>
                <Navbar.Toggle />
            </div>
            <div className='flex items-center ml-auto'>
                <TextInput
                    type='text'
                    rightIcon={AiOutlineSearch}
                    className='w-48 md:w-40 sm:w-35 h-10 text-black px-2 py-1 rounded' 
                />
            </div>
        </Navbar>
    );
}
