// src/components/Profile.jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>

      {/* Sub-navigation */}
      <nav>
        <Link to="details" style={{ marginRight: 10 }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
