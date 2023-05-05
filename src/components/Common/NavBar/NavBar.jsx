import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar flex-center'>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/'><li>Gallery</li></Link>
            <Link to='/techport'><li>Techport</li></Link>
            <Link to='/'><li>Register</li></Link>
            <Link to='/'><li>Login</li></Link>
        </ul>
    </div>
  )
}

export default NavBar