import React from 'react';
import ProfileDetailcon from './ProfileDetailcon';

function Profilecon() {
  return (
    <div>
      <h1>Profile</h1>
      {/* Tidak perlu lagi hardcode name={"Sukuna"} */}
      <ProfileDetailcon />
    </div>
  );
}

export default Profilecon;