import React from 'react'
import location from '../../images/AboutSVGs/location.svg'
import email from '../../images/AboutSVGs/mail.svg'
import interests from '../../images/AboutSVGs/interests.svg'
import office from '../../images/AboutSVGs/office.svg'
import AboutinfoItem from './AboutinfoItem'

function Aboutinfo() {
  return (
    <div className='about-info'>
        <AboutinfoItem svg={location}  name='location'  title='Location'  info={"BP 32 El-Alia<br />Bab-Ezzouar 16111, Alger"} />
        <AboutinfoItem svg={office}    name='office'    title='Office'    info="D112,Teachers' Block faculty of Mathematics" />
        <AboutinfoItem svg={email}     name='email'     title='Email'     info={"ymaouche@usthb.dz<br />youcef.maouche@usthb.edu.dz"} />
        <AboutinfoItem svg={interests} name='interests' title='Interests' info='Coding theory & Cryptography' />
    </div>
  )
}

export default Aboutinfo