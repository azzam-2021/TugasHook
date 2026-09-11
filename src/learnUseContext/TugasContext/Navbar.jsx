import { namaContext } from '../../AppUseContext'
import React, { useContext } from 'react'
function Navbar() {
    const nama = useContext(namaContext)
  return (
    <div>
      <h1>Selamat datang, {nama}</h1>
    </div>
  )
}

export default Navbar
