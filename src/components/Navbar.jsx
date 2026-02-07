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
    <div className="fixed top-0 w-full h-20 flex items-center justify-around bg-black z-50">
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

      <a offset={50} href="#contact" className="text-white hidden md:flex gap-2 items-center justify-center button px-4 py-3 rounded-full cursor-pointer">
        <lord-icon
          src="https://cdn.lordicon.com/kdduutaw.json"
          trigger="hover"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{ width: "20px", height: "20px"}}
        ></lord-icon>
        <div>Connect</div>
      </a>
    </div>
  </>
  );
};

export default Navbar;
