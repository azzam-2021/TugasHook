import React, { createContext, useContext, useState } from 'react'
// Jangan lupa import komponen anaknya
import Profileprop from './Profileprop'

export const jeanContext = createContext()

function Homeprop() {
    const [nama, setNama] = useState("Jean Elaine Grey")
    
  return (
    <div className='mt-10'>
        <h1>Operan Props ribet amat!</h1>
      <h1>Halaman Home</h1>
      <jeanContext.Provider value={{name: nama, setName: setNama}}>
        <Profileprop />
      </jeanContext.Provider>
    </div>
  )
}

export default Homeprop