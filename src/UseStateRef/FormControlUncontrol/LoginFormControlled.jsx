import React, { useState } from 'react'

export default function LoginFormControlled() {
    const handlerSubmit = (event) => {
        event.preventDefault()
        console.log(name + " " + password + "+" + telp)
    }
    const [name, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [telp, setTelp] = useState()
  return (
    <div>
        <h1>Controlled</h1>
    <form onSubmit={handlerSubmit}>
      <input type="text" name='username' placeholder='Username' onChange={(event) => setUsername(event.target.value)} value={name} className='border-2 border-black m-2' />
      <input type="password" name="pw" id="" placeholder='Password' onChange={(event) => setPassword(event.target.value)} value={password} className='border-2 border-black m-2' />
      <input type="number" name="notelp" id="" placeholder='no telp' onChange={(event) => setTelp(event.target.value)} value={telp} className='border-2 border-black m-2' />
      <button type="submit" className='bg-green-500 p-1'>Login</button>
    </form>
    </div>
  )
}