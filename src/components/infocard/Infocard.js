import React from 'react'
import Socialmedia from './Socialmedia'
import Skills from './Skills'
import Images from './Images'
import img from '../../images/photo.png'
import './Infocard.css'
function infoCard() {
  return (
    <div className='info-card col-10 col-sm-9 col-lg-4 col-md-6 p-0 me-2'>
      <div className='image-slider'>
        <Images />
      </div>
      <div className='info-card__body d-flex flex-column align-items-center'>
        <div className='img-div'>
          <img src={img} alt='' />
        </div>
        <div className='body-content'>
          <h2 className='info-card__body--name'>Youcef Maouche</h2>
          <Skills />
          <Socialmedia />
        </div>
      </div>
    </div>
  )
}

export default infoCard