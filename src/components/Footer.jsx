import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='md:flex justify-around m-4 pb-2'>
      <div>@2025 shubham banna.All rights reserved.</div>
      <ul className='md:mt-0 mt-2 flex md:gap-5 list-none'>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Connect with me</li>
      </ul>
    </div>
    <div className='flex justify-center items-center gap-6 pb-3'>
      <span>
        <a href="https://www.instagram.com/banna____shubham/">
        <lord-icon
          src="https://cdn.lordicon.com/cuwcpyqc.json"
          trigger="hover"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{width: "35px",height: "35px"}}>
        </lord-icon>
        </a>
      </span>
      <span>
      <a href="https://www.linkedin.com/in/shubham-singh-panwar-43275024b">
        <lord-icon
          src="https://cdn.lordicon.com/euybrknk.json"
          trigger="hover"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{width: "35px",height: "35px"}}>
        </lord-icon>
      </a>
      </span>
      <span>
        <a href="https://github.com/banna2204">
          <img className='invert pb-2 ' width={28} src="github2.jpg" alt="" />
        </a>
      </span>
    </div>
    </>

  )
}

export default Footer
