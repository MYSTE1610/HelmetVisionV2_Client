import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      phoneNumber: data.get('phoneNumber'),
      vehicleNumber: data.get('vehicleNumber'), // New vehicle number field
    };
    dispatch(registerUser(user));
  };

  return (
    <form onSubmit={handleRegister}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <input name="phoneNumber" type="text" placeholder="Phone Number" required />
      <input name="vehicleNumber" type="text" placeholder="Vehicle Number" required /> {/* New vehicle number input */}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
