import React from 'react'
import MathComponent from '../MathComponent'
function PublicationItem(props) {
  return (
    <div className='pub-item col-12 col-md-6 py-3 pe-3'>
        <p><span className='text-white' >Title :</span>  {props.title} 
        {props.code ? <MathComponent code={props.code} /> : null}
         </p>
        <p><span className='text-white'>Authors :</span> {props.authors} </p>
        <p><span className='text-white'>Info :</span> {props.info} </p>
        <div className='pub-btn'>
          <a href='#'>
            <button className='btn btn-sm btn-primary'>Read More</button>
          </a>
        </div>
    </div>
  )
}

export default PublicationItem