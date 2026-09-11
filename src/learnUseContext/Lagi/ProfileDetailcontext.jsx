import React, { useContext } from 'react'
import { namaContext, umurContext } from './Homecon'

function ProfileDetailcontext() {
    const nama = useContext(namaContext)
    const umur = useContext(umurContext)
  return (
    <div>
      <p>Nama: {nama}</p>
      <p>Umur: {umur}</p>
    </div>
  )
}

export default ProfileDetailcontext
