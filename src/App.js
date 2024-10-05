import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/User/UserProfile';
import UserInstances from './components/User/UserInstances';
import UserChallans from './components/User/UserChallans';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/instances" element={<UserInstances/>} />
        <Route path="/challans" element={<UserChallans/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
