import React, { useContext } from 'react';
// Import Context yang sudah kita buat di file Homecontext
import { UserContext } from './Homecontext';

function ProfileDetailcon() {
  // 3. CONSUME: Tarik data 'nama' langsung dari Context
  const name = useContext(UserContext);

  return (
    <div>
      <p>Nama Pengguna: {name}</p>
    </div>
  );
}

export default ProfileDetailcon;