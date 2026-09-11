import React, { useState, createContext } from 'react';
import Profilecon from './Profilecon';

// 1. CREATE: Buat Context dan export agar bisa diambil oleh file lain
export const UserContext = createContext();

function Homecontext() {
    const [nama, setNama] = useState("Fulan");
    
    function ubahNama() {
        setNama("Jean grey");
    }

    return (
        // 2. PROVIDE: Bungkus komponen dengan Provider. 
        // Semua komponen di dalamnya kini bisa mengakses nilai 'nama'
        <UserContext.Provider value={nama}>
            <div>
                <h1>Home</h1>
                <button onClick={ubahNama}>Update Nama</button>
                
                {/* Perhatikan: Kita tidak perlu melempar props apa-apa ke sini */}
                <Profilecon />
            </div>
        </UserContext.Provider>
    );
}

export default Homecontext;