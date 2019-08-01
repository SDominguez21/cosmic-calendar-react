import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const logout = () =>{
      props.pleaseLogOut()
      .then(()=>{
          props.getUser();
      })

  }
  console.log(props);
  return (
    <nav>
      {props.theUser && (
        <div>
          <Link to="/all-forcasts">All Tide Events</Link>
          <Link to="/all-sun-moon">All Sun and Moon Events </Link>
          <Link to="/all-cosmic-events">All Cosmic Events</Link>
        </div>
      )}

      {/* {!props.theUser && 
        <span>
        <button onClick = {()=> props.toggleForm('login')} > Login </button>
        <button onClick = {()=> props.toggleForm('signup')}>Sign Up</button>
        </span>
        }

        {props.theUser && 
        <span>
        <button onClick = {logout} >Log Out </button>

            <span>Hello, {props.theUser.username}</span>
        </span>
        } */}
    </nav>
  );
}

export default Navbar;
