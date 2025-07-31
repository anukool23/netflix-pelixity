import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div>
        <img src ='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs'
        alt='Netflix Login Background' className='w-full h-auto absolute'/>
      </div>
      <form className='p-12 absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-60 rounded-lg'>
      <h1 className='font-bold text-xl py-4'>{isSignInForm ? 'Sign In' : ' Register Now'}</h1>
        {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>) }
        <input type="email" placeholder='Email or Phone Number' className='p-4 my-4 w-full bg-gray-700'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <button type='submit' className='bg-red-600 text-white p-2 my-4 w-full rounded-lg'>{isSignInForm ? 'Sign In' : ' Register'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?  'New to Netflix? Sign up now' : 'Already Registered? Sign In'}</p>
      </form>
    </div>
  )
}

export default Login