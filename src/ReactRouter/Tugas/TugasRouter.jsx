import React from 'react'
import { NavLink } from 'react-router'

function TugasRouter() {
  return (
    <div>
      <div className='flex gap-2 bg-blue-300'>
        <NavLink to={'/'}>Dashboard</NavLink>
        <NavLink to={'/santri'}>Santri</NavLink>
        <NavLink to={'/about'}>Tentang</NavLink>
      </div>
      <h1>Dashboard santri</h1>
      <p>Selamat datang di dashboard santri</p>
    </div>
  )
}

export default TugasRouter
