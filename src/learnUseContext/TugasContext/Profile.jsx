import { namaContext } from '../../AppUseContext'
import React, { useContext } from 'react'

function Profile() {
    const nama = useContext(namaContext)
  return (
    <div>
      <h1>Nama santri: {nama}</h1>
    </div>
  )
}

export default Profile
