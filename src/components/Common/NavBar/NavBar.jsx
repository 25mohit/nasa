import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Theme } from '../../../unitilies/Theme'
import { ThemeStyles } from '../../../unitilies/ThemeStyle'

const NavBar = () => {
  const [currentTheme, setCurrentTheme] = useState('dark')

  const switchTheme = (theme) => {
    localStorage.setItem('theme', theme)
    window.location.reload()
    console.log(theme);
  }

  useEffect(() => {
    setCurrentTheme(Theme())
  },[])

  return (
    <div className='navbar flex-center'>
        <ul >
            <li><Link style={ThemeStyles.text} to='/'>Home</Link></li>
            <li><Link style={ThemeStyles.text} to='/'>Gallery</Link></li>
            <li><Link style={ThemeStyles.text} to='/techport'>Techport</Link></li>
            <li><Link style={ThemeStyles.text} to='/bookmark'>Bookmark</Link></li>
            <li><Link style={ThemeStyles.text} to='/'>Register</Link></li>
            <li><Link style={ThemeStyles.text} to='/'>Login</Link></li>
            <li>
              <div className="theme-switcher">
                {currentTheme === 'light' ? <BsFillMoonFill style={ThemeStyles.text} id='theme-icon' onClick={() => switchTheme('dark')}/>
                 : <BsSunFill id='theme-icon' style={ThemeStyles.text} onClick={() => switchTheme('light')}/>}
              </div>
            </li>
        </ul>
    </div>
  )
}

export default NavBar