import React, { useState } from 'react'
import { Link } from 'react-router';

function SingInPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>

      <div className='max-w-md w-full'>
        {/* Title and subtitle */}
        <div className='text-center mb-10'> 
          <h1 className='text-3xl font-bold'>Create an Account</h1>
          <p className='text-gray-600 mt-2'>Join our community and start sharin your ideas</p>
        </div>
        {/* Form info */}
        <div className='bg-white rounded-lg shadow-md p-8'>
          <form>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor="email">
                Email Address 
              </label>
              <input type="email" id="email"
              className='w-full px-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' 
              placeholder='Email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor="username">
                Username 
              </label>
              <input type="username" id="username"
              className='w-full px-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' 
              placeholder='Abdallah'
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor="password">
                Password 
              </label>
              <input type="password" id="password"
              className='w-full px-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' 
              placeholder='*************'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor="confirmPassword">
                Confirm Password 
              </label>
              <input type="confirmPassword" id="confirmPassword"
              className='w-full px-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' 
              placeholder='*************'
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
              required
              />
            </div>

            <button className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200 disabled:cursor-not-allowed disabled:bg-orange-400'
            disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className='text-center mt-6'>
            <p className='text-gray-600 text-sm'>
              All ready have an account?
              <Link to='/signin' className='text-orange-600 hover:text-orange-800 font-semibold'>
              Sign In
              </Link>
            </p>
          </div>  
        </div>
      </div>

    </div>
  )
}

export default SingInPage