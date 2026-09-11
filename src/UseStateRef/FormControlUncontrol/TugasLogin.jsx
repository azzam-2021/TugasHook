import React, { useState } from 'react'

export default function Tugas() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username + " pw:" + password)
    }
  return (
    <div className='bg-blue-950 min-h-screen w-screen font-sans flex justify-center items-center'>
      <div className='bg-white w-96 p-7 rounded-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
            <h1 className='font-bold text-xl text-center uppercase'>Sign up to your account</h1>
            <span className='text-sm'>Username</span>
            <input type="text" onChange={(e) => setUsername(e.target.value)} className='p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400' />
            <span className='text-xs text-gray-500'>Your username: {username}</span>
            <span className='text-sm'>Password</span>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400' />
            <span className='text-xs text-gray-500'>Your password: {password}</span>
            <button type="submit" className='bg-blue-600 p-2 rounded-lg text-white font-medium' >Sign up now</button>
        </form>
      </div>
    </div>
  )
}
