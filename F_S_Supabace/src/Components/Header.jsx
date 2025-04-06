import React, { useState }from 'react'
import { Link } from 'react-router'
import { FaUserAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useAuth } from '../context/AuthContext';
import { signOut } from '../lib/auth';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const {isLoggedIn, profile, logout} = useAuth();

    // console.log("user profile", profile?.session?.user?.email.split("@")[0]);

    const avater_url = null;
    
    
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
                     {/* Profile */}
                {isLoggedIn ? (
                    <>
                    <div> 
                    <span className='text-gray-700 text-sm'>Hello, {profile?.username}</span>
                    </div>
                    <div className='relative'>
                        <button className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500' 
                        onMouseEnter={()=> setIsDropdownOpen(true)}
                        onClick={()=> setIsDropdownOpen(!isDropdownOpen)}
                        > 
                            {
                                avater_url ? <img className='w-8 h-8 rounded-full ' src={avater_url}/> : <FaUserAlt className='text-gray-600' />

                            }
                        </button>
                        {isDropdownOpen && (
                             <div className='absolute right-0 w-48 bg-white mt-1 rounded-md shadow-lg z-10' 
                             onMouseLeave={()=>setIsDropdownOpen(false)}
                             >
                             <div></div>
                             <Link to={'profile'} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Your Profile</Link>
                             <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' >Manage Articles</Link>
                             <button onClick={()=> logout()} className='block px-4 py-2 text-gray-700 hover:bg-gray-100' >Signout</button>
                         </div>
                        )}
                       
                    </div>
                </>
                ) : (
                    <div className='flex space-x-8 items-center'>
                    {/* Buttons */}
                    <Link to='singin' className='inline-flex item-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-ofset-2 focus:ring-orange-500'>
                    Sing In
                    </Link>
                    <Link to='singup' className='hidden sm:inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-orange-600 bg-white border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-ofset-2 focus:ring-orange-500'>
                    Sing Up
                    </Link>
                </div>
                )}
                
            </div>
            {/* Humbuger */}
            <div className='-mr-2 flex items-center sm:hidden'>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400'
            onClick={()=> setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <IoMdClose className='block w-6 h-6'/> : <CiMenuBurger className='block w-6 h-6'/>}
            
            
            </button>
            

            </div>
            </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
        <div className='sm:hidden py-4'>
            <div>
                <div className='pt-2 pb-3 space-y-1'>
                <Link to='/' className='block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-orange-700 bg-orange-50'>Home</Link>
                <Link to='articles' className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>Articles</Link>

                </div>
            </div>

            {/* Islogged in */}
            {isLoggedIn && (
                <>
                <Link to='/editer' className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>Write</Link>
                <Link to='/manage-articles' className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>My Articles</Link>
                <Link to='/profile' className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>Profile</Link>
                <button className='block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>Sing Out</button>

                </>
            )}

             {/* Islogged in */}

             {!isLoggedIn && (
                <>
                <Link to='/signin' className='block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>Sign In</Link>
                <Link to='/signup' className='block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>Sign Out</Link>

                </>
             )}
        </div>
        )}
    </header>
  )
}

export default Header