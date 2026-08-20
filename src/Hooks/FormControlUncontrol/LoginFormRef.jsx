import React, { useRef } from 'react'

export default function LoginFormRef() {
    const UsernameRef = useRef()
    const handlerSubmit = (event) => {
        event.preventDefault()
        console.log(UsernameRef.current.value)
    }
  return (
    <div>
        <h1>Ref</h1>
    <form onSubmit={handlerSubmit}>
      <input type="text" name='username' placeholder='Username' ref={UsernameRef} className='border-2 border-black m-2' />
      <input type="password" name="pw" id="" placeholder='Password' className='border-2 border-black m-2' />
      <button type="submit" className='bg-green-500 p-1'>Login</button>
    </form>
    </div>
  )
}