import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      navbarpage
      <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
