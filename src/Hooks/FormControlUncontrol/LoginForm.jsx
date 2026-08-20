//Bikin input text, password, button login

//Ini Uncontolled, dikontrol oleh DOM bukan Hook react
import React from 'react'

export default function LoginForm() {
    const handlerSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.pw.value)
    }
  return (
    <div>
    <h1>Uncontrolled</h1>
    <form onSubmit={handlerSubmit}>
      <input type="text" name='username' placeholder='Username' className='border-2 border-black m-2' />
      <input type="password" name="pw" id="" placeholder='Password' className='border-2 border-black m-2' />
      <button type="submit" className='bg-green-500 p-1'>Login</button>
    </form>
    </div>
  )
}
