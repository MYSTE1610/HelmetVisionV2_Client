import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNumber}</p>
      {/* Add other user info as necessary */}
    </div>
  );
};

export default UserProfile;
