import React from 'react'
import "./style.css";
import { Outlet, Link } from 'react-router-dom'

function authLayout() {
  return (
    <div className='auth-container'>
      <div className='auth-menu'>
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt Ol</Link>
        </div>
        <hr />
        <Outlet />
    </div>
  )
}

export default authLayout