import React, { useEffect, useState } from 'react'

export default function TugasEffect() {
  let [name, setName] = useState("Ahmad")
  let [angka, setAngka] = useState(0)
  let [status, setStatus] = useState("Belum ada perubahan angka")
  const handle = (e) => {
    e.preventDefault()
  }
  function hitung() {
    setAngka(angka + 1)
    setStatus("Angka sudah berubah")
  }
  useEffect(() => {
    console.log("Angka sekarang jadi " + angka)
    document.title = `Angka ${angka}`
  },[angka])
  useEffect(() => {
    console.log("dashboard santri berhasil dijalankan")
  }, [])
  return (
    <div onSubmit={handle}>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <p>Halo, {name}</p>
      <p>angka: {angka}</p>
      <button onClick={hitung}>Tambah</button>
      <p>Status: {status}</p>
    </div>
  )
}
