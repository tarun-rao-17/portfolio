import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
  

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' offset={50} href='#home'> <p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink>{menu==="home"? <img src={underline}></img>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=>{setMenu("about")}}>About</p></AnchorLink>{menu==="about"? <img src={underline}></img>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=>{setMenu("services")}}>services</p></AnchorLink>{menu==="services"? <img src={underline}></img>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={()=>{setMenu("work")}}>portfolio</p></AnchorLink>{menu==="work"? <img src={underline}></img>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={()=>{setMenu("contact")}}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline}></img>:<></> }</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink>
            
        </div>
        

      
    </div>
  )
}

export default Navbar