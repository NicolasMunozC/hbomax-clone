import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <div className='header'>
        <div className='nav'>
            <img className='logo' src={logo} alt='logo'/>
            <button className='login'>Ingresa</button>
            <button className='subscribe'>Suscríbete Ahora</button>

        </div>

    </div>
  )
}

export default Header