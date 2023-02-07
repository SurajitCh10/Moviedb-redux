import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import '../Header/Header.scss'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>Movie Rating</div>
      </Link>

      <div className='user-image'>
        <img src={user} alt='user'/>
      </div>
    </div>
  )
}

export default Header