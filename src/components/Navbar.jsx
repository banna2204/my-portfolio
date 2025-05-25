import React, { useRef, useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../components/Navbar.css'


const Navbar = () => { 

  const [menu,setMenu] = useState('Home');
  const menuRef = useRef();

  const handleOpen = () => {
    menuRef.current.style.right='0'
  }

  const handleClose = () => {
    menuRef.current.style.right='-350px'
  }

  return (
  <>
    <div className="h-20 flex items-center justify-around bg-black">
    <AnchorLink  href="#home">
        <img width={100} src="favicon.png" alt="logo" />
      </AnchorLink>
      <span><img onClick={handleOpen} width={50} className="open invert" src="hamburger.png" alt="" /></span>
      <div>
        <ul ref={menuRef} className="flex gap-6 navigation">
          <span onClick={handleClose} className="text-4xl close">X</span>
          <li><AnchorLink  href="#home"> <p onClick={()=>setMenu('Home')}>Home</p></AnchorLink> {menu==='Home'?<div className="underline"></div>:<></>} </li>
          <li><AnchorLink offset={50} href="#about"> <p onClick={()=>setMenu("About")}>About</p></AnchorLink> {menu==='About'?<div className="underline"></div>:<></>} </li>
          <li><AnchorLink offset={50} href="#skills"><p  onClick={()=> {setMenu('Skills')}}>Skills</p> </AnchorLink>{menu==='Skills'?<div className="underline"></div>:<></>} </li>
          <li><AnchorLink offset={50} href="#projects"><p  onClick={()=> {setMenu('Projects')}}>Projects</p> </AnchorLink>{menu==='Projects'?<div className="underline"></div>:<></>} </li>
          <li><AnchorLink offset={50} href="#contact"><p  onClick={()=> {setMenu('Contact')}}>Contact</p> </AnchorLink>{menu==='Contact'?<div className="underline"></div>:<></>} </li>
        </ul>
      </div>

      <AnchorLink offset={50} href="#contact" className="hidden md:block button px-4 py-3 rounded-full cursor-pointer">
        connect with me
        <lord-icon
          src="https://cdn.lordicon.com/kdduutaw.json"
          trigge
          colors="primary:#000000,secondary:#000000"
          style={{ width: "20px", height: "20px", padding: "5px" }}
        ></lord-icon>
      </AnchorLink>
    </div>
  </>
  );
};

export default Navbar;
