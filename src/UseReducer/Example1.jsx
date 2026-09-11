import React, { useState } from 'react'

function Example1() {
    const [nomor, setNomor] = useState(0)
    function tambah() {
        setNomor(nomor + 1)
    }
    function kurang() {
        setNomor(nomor - 1)
    }
    function tamba5() {
        setNomor(nomor + 5)
    }
    function kurang5() {
        setNomor(nomor - 5)
    }
    function reset() {
        setNomor(0)
    }
  return (
    <div className='flex gap-5'>
      <h1 className='text-4xl font-bold'>UseReducer(Ceritanya)</h1>
      <h1 className='text-4xl font-bold'>{nomor}</h1>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>kurang</button>
      <button onClick={tamba5}>tambah 5</button>
      <button onClick={kurang5}>kurang 5</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Example1
