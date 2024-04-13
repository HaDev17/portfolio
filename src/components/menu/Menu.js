import React, { useState } from 'react'
import Aboutsvg from './menuSVGs/Aboutsvg'
import Researchsvg from './menuSVGs/Researchsvg'
import Teachingsvg from './menuSVGs/Teachingsvg'

import './Menu.css'

function Menu() {
  let menuItem
  const [activeLink, setActiveLink] = useState(menuItem);
  
  window.onload = (()=> {
    let menuItem = window.location.hash
    if(menuItem == "") menuItem = "#about"
    document.querySelectorAll(".menu a").forEach((e)=> {
      if(e.attributes[0].value == menuItem) {
        e.click()
      }
    })
})
    const handleClick = (e) => {
      let currentDiv
      setActiveLink(e.currentTarget.getAttribute('href'));
      
      document.querySelectorAll(".content > div").forEach((div) => {
        if(div.classList.contains(e.currentTarget.getAttribute('href').split("#").join(""))) currentDiv = div
        if(div.classList.contains("page-active")) div.classList.remove("page-active")
      })
      currentDiv.classList.add("page-active")
    }
  

 


  return (
    <div className='menu p-0 me-1'>
      <ul className='m-0'>
        <li>
          <a href='#about' className={activeLink === '#about' ? 'active' : ''} onClick={handleClick}>
            <span> <Aboutsvg /> </span>
            <span className='mt-2'>ABOUT</span>
          </a>
        </li>
        <li>
          <a href='#research' className={activeLink === '#research' ? 'active' : ''} onClick={handleClick}>
            <span> <Researchsvg /> </span>
            <span className='mt-2'>RESEARCH</span>
          </a>
        </li>
        <li>
          <a href='#teaching' className={activeLink === '#teaching' ? 'active' : ''} onClick={handleClick}>
            <span> <Teachingsvg /> </span>
            <span className='mt-2'>TEACHING</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu