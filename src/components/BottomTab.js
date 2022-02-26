import React from 'react'
import {Link} from "react-router-dom"
import HomeIcon from "../assets/home.png"
import MenuIcon from "../assets/menu.png"
function BottomTab() {
  return (
    <div className='bottom-tab mobile-view'>
      <Link className='link' to="/">
      <button className='btn-bottom-tab flex column center'>
        <img width={40} src={HomeIcon} alt="home-icon"/>
        Home
      </button>
      </Link>
      <Link className='link' to="/menu">
      <button className='btn-bottom-tab flex column center'>
        <img width={40} src={MenuIcon} alt="menu-icon"/>
        Menu
      </button>
      </Link>
    </div>
  )
}

export default BottomTab