import React from 'react'

function EducationItem(props) {
  return (
    <div className='education-item mt-4 p-0 ps-2'>
          <span className='circle'></span>
        <h4>{props.date}</h4>
        <p className='text-white'>{props.level}</p>
        <p> <span className='text-white'>Univercity :</span> {props.univercity}</p>
        {props.title && <p> <span className='text-white'>title :</span> {props.title}</p>}
        {props.Supervisor && <p> <span className='text-white'>Supervisor :</span> {props.Supervisor}</p>}
    </div>
  )
}

export default EducationItem