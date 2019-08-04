import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
  const doTheLogout = () => {
    props.pleaseLogOut();
  };

  return (
    <nav>
      {props.theUser && (
        <Link to="/home" style={{ textDecoration: 'none', margin: '10px' }}>
          Home
        </Link>
      )}

      {!props.theUser && (
        <span>
          <button onClick={() => props.toggleForm('login')}> Login </button>
          <button onClick={() => props.toggleForm('signup')}>Sign Up</button>
        </span>
      )}

      {props.theUser && (
        <span>
          <Link to="/" onClick={doTheLogout}>
            Log Out
          </Link>

          <span>Hello, {props.theUser.username}</span>
        </span>
      )}
    </nav>
  );
}

export default Navbar;
