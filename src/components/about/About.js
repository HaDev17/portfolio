import React from 'react'
import Aboutinfo from './Aboutinfo'
import './About.css'
function About() {
  return (
    <div className='about py-4 page-active' id='about'>
      <h3 className='my-4 px-4 pb-2'>ABOUT ME</h3>
      <div className='about-content px-4'>
        <p> 
          I am <span style={{color:'var(--color-trinary)'}}>Youcef Maouche</span>, an Associate Professor in the Department of  Mathematics at the University of Science and Technology Houari  Boumediene.<br /> <br />

          I am recognized for my expertise in Algebraic Coding Theory,  Cryptography, and Algorithm Complexity. With a calm and confident  demeanor, I embody strength in my field of study.<br /><br />

          My cool-headed  approach to teaching and research resonates with both colleagues and  students, fostering an environment of collaboration and learning. My  office is located in D112 within the faculty block, where my presence  exudes a sense of reliability and competence, making me a respected  figure within the academic community.
        </p>
      </div>
      <div className='px-4 py-4'>
        <Aboutinfo />
      </div>
    </div>
  )
}

export default About