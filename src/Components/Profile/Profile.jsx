import React, { useEffect, useState } from 'react';
import ProfileNavbar from './ProfileNavBar';

export default function Profile({ Header }) {

  return (
    <div>
      <div><Header /></div>
      <div>
        <ProfileNavbar />
      </div>
      <div>
        Profile
      </div>
    </div>
  );

}