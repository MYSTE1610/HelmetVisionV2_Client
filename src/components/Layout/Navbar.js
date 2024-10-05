import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/login">Login</Link></li>
        <li style={styles.navItem}><Link to="/register">Register</Link></li>
        <li style={styles.navItem}><Link to="/profile">Profile</Link></li>
        <li style={styles.navItem}><Link to="/instances">Instances</Link></li>
        <li style={styles.navItem}><Link to="/challans">Challans</Link></li>
      </ul>
      <div style={styles.helmetIcon}>
        {/* SVG Helmet Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
          <path d="M12 2c-2.7 0-5.2 1.2-6.9 3.1C3.4 6.9 2 9.4 2 12v4c0 2.3 1.8 4 4 4h2v2h8v-2h2c2.2 0 4-1.7 4-4v-4c0-2.7-1.4-5.2-3.1-6.9C17.2 3.2 14.7 2 12 2zm0 2c2.1 0 4.1.8 5.6 2.2C18.1 6.4 19 8 19 10h-4v2h4c0 2.5-1.4 4.2-3.6 5.3L12 20l-3.4-2.7C5.4 16.2 4 14.5 4 12h4v-2H4c0-1.9.8-3.6 2-4.8C8.1 4.8 10.1 4 12 4z" />
        </svg>
      </div>
    </nav>
  );
};

// Styles for the Navbar
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    margin: 0,
  },
  navItem: {
    marginRight: '20px',
  },
  helmetIcon: {
    marginLeft: 'auto', // Pushes the icon to the right
  },
};

export default Navbar;
