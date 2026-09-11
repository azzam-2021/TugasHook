import React from 'react'
import { useParams } from 'react-router'

function ProfileDetail() {
    const {id} = useParams()
    const orang = {
        1: "Kengo",
        2: "Akito",
        3: "Yuna"
    }
      const nama = orang[id]
  return (
    <div>
        <p>{id}</p>
        <p>Karakter nama {nama}, id:{id}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aliquam. Dolor repellat labore sequi minima cupiditate exercitationem veniam. Voluptatum, eius. Reiciendis sunt, id quas perferendis dolorum aut ipsa culpa quod?
      Aliquam ratione corrupti ipsum deleniti quia atque, dicta quo vero, error, excepturi fuga inventore explicabo dignissimos reprehenderit ex sed iusto quaerat! Aliquid, deleniti facilis? Repellendus amet modi sit explicabo sed.</p>
    </div>
  )
}

export default ProfileDetail
