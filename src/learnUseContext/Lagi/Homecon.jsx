import React, { createContext, useState } from 'react'
import Profilecontext from './Profilecontext'
export const namaContext = createContext()
export const umurContext = createContext()

function Homecon() {
    const [nama, setNama] = useState("")
    const [umur, setUmur] = useState()
    function gatau(e) {
      e.preventDefault()
    }
    function Update() {
      setNama(nama)
      setUmur(umur)
    }
  return (
    <div>
      Home <br />
      <input type="text" placeholder='Nama' onChange={(e) => setNama(e.target.value)} className='ring-1 bg-blue-500'/> <br />
      <input type="number" placeholder='Umur' onChange={(e) => setUmur(e.target.value)} className='ring-1 bg-red-500' />
      <namaContext.Provider value={nama}>
        <umurContext.Provider value={umur}>
          <Profilecontext />
        </umurContext.Provider>
      </namaContext.Provider>
      <button>Update</button>
    </div>
  )
}

export default Homecon
