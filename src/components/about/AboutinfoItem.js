import React from 'react'

function AboutinfoItem(props) {
  return (
    <div className='info-item'>
            <img src={props.svg} alt={props.name} />
            <span className='info-title px-2'>{props.title}:</span>
            <div><span dangerouslySetInnerHTML={{ __html: props.info}}></span></div>
    </div>
  )
}

export default AboutinfoItem