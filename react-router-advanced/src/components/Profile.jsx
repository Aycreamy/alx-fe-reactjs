// src/components/Profile.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details" style={{ marginRight: 10 }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes Render Here */}
      <Outlet />
    </div>
  );
}
