import React from 'react';
import { useSelector } from 'react-redux';

const UserChallans = () => {
  const challans = useSelector((state) => state.user.challans);

  return (
    <div>
      <h2>User Challans</h2>
      {challans.length === 0 ? (
        <p>No challans found.</p>
      ) : (
        <ul>
          {challans.map((challan) => (
            <li key={challan._id}>{`Date: ${challan.date}, Amount: ${challan.amount}, Status: ${challan.paymentStatus}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserChallans;
