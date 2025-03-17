import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className='bg-white shadow'>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            {/* Left and Right */}
            <div className='flex justify-between h-16'>
                {/* Left */}

                <div className='flex'>
                    {/* Logo */}
                    <div className='flex-shrink-0 flex items-center'>
                        <Link to='/' className='text-2xl font-bold text-orange-600'>Blogify</Link>
                    </div>
                    {/* Nav */}
                    <nav className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                        <Link to='/' className='inline-flex px-1 pt-1 items-center border-b-2 border-orange-500 text-sm font-medium'>Home</Link>
                        <Link to='articles' className='inline-flex px-1 pt-1 items-center border-b-2 border-transparent text-sm font-medium'>Articles</Link>
                        <Link to='article' className='inline-flex px-1 pt-1 items-center border-b-2 border-transparent text-sm font-medium'>Article</Link>
                        <Link to='write' className='inline-flex px-1 pt-1 items-center border-b-2 border-transparent text-sm font-medium'>Write</Link>
                        <Link to='myarticle' className='inline-flex px-1 pt-1 items-center border-b-2 border-transparent text-sm font-medium'>My Article</Link>

                    </nav>
                </div>
                {/* Right */}
                <div className='flex space-x-8 items-center'>
                <div>
                    {/* Profile */}
                    <span>Hello, Abdalla</span>
                </div>
                <div className='flex space-x-8 items-center'>
                    {/* Buttons */}
                    <Link to='singin' className='inline-flex item-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-ofset-2 focus:ring-orange-500'>
                    Sing In
                    </Link>
                    <Link to='singin' className='hidden sm:inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-orange-600 bg-white border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-ofset-2 focus:ring-orange-500'>
                    Sing Up
                    </Link>
                </div>
            </div>
            </div>

        </div>

    </header>
  )
}

export default Header