import { createContext, useState } from "react";
import React from 'react'
import Navbar from "./learnUseContext/TugasContext/Navbar";
import Profile from "./learnUseContext/TugasContext/Profile";
export const namaContext = createContext()

function AppUseContext() {
    const [nama, setNama] = useState("Ali")
  return (
    <div>
      <namaContext.Provider value={nama} >
        <h1>Navbar</h1>
        <Navbar />
        <h1>Profile</h1>
        <Profile />
      </namaContext.Provider>
    </div>
  )
}

export default AppUseContext
