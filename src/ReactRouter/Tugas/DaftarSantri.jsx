import React from 'react'
import { NavLink } from 'react-router'

function DaftarSantri() {
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
  return (
    <div>
        {santri.map((Santri) => {
            return(
                <div key={Santri.id}>
                    <h1>Nama: {Santri.nama}</h1>
                    <p>Kelas: {Santri.kelas}</p>
                    <button className='bg-gray-400 p-2'><NavLink to={`/santri/${Santri.id}`}>Detail</NavLink></button>
                </div>
            )
        })}
    </div>
  )
}

export default DaftarSantri
