import React, { useContext } from 'react'
import { jeanContext } from './Homeprop'

function ProfDetailprop() {
    const {name, setName} = useContext(jeanContext)
  return (
    <div>
        <h1>Nama: {name}</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='ring-1' />
    </div>
  )
}

export default ProfDetailprop
