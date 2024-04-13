import React from 'react'
import Fb from './socialmediasvg/Fb'
import Insta from './socialmediasvg/Insta'
import Linkedin from './socialmediasvg/Linkedin'
import Rgate from './socialmediasvg/Rgate'


function Socialmedia() {
  return (
    <div className='social-media mt-4'>
            <a href='#'><Fb /></a>
            <a href='#'><Insta /></a>
            <a href='#'><Linkedin /></a>
            <a href='#'><Rgate /></a>
    </div>
  )
}

export default Socialmedia