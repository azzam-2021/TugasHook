import React from 'react'
import { NavLink, useParams } from 'react-router'
import DaftarSantri from './DaftarSantri'

function DetailSantri() {
    const {id} = useParams()
    const santri = [
        {
            id: 1,
            nama: "Ahmad",
            kelas: "XI"
        },
        {
            id: 2,
            nama: "Ali",
            kelas: "X"
        },
        {
            id: 3,
            nama: "Umar",
            kelas: "XII"
        }
    ]
    const nama = santri.find((item) => item.id === Number(id))
  return (
    <div>
      <h1>Nama: {nama.nama}</h1>
      <p>ID: {nama.id}</p>
      <p>Kelas: {nama.kelas}</p>
      <button><NavLink to={'/santri'}>Kembali</NavLink></button>
    </div>
  )
}

export default DetailSantri
