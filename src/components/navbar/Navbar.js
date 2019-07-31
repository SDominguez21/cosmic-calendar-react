import React from 'react';
import {Link} from 'react-router-dom';



function Navbar(props){

    const doTheLogout = () =>{
        props.pleaseLogOut()
        .then(()=>{
            props.getUser();
        })

    }

    return(



        <nav>
            {props.theUser && 
        <Link to="/projects" style={{ textDecoration: 'none', margin: '10px' }}>Projects</Link>
            }


        {!props.theUser && 
        <span>
        <button onClick = {()=> props.toggleForm('login')} > Login </button>
        <button onClick = {()=> props.toggleForm('signup')}>Sign Up</button>
        </span>
        }

        {props.theUser && 
        <span>
        <div>
            <Link to = "/all-tide">All Tide Events</Link>
            <Link to="/all-sun-moon" >All Sun and Moon Events </Link>
            <Link to = "/all-cosmic-events">All Cosmic Events</Link>
            
        </div>
        <button onClick = {doTheLogout} >Log Out </button>

            <span>Hello, {props.theUser.username}</span>
        </span>
        }
        </nav>
    )

}

export default Navbar;