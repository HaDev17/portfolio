import React from 'react'
import MathComponent from '../MathComponent'
function CardItem(props) {
  return (
    <div className='card-item mt-3'>
        <div className='text-center mb-1 d-flex justify-content-center align-items-center'>
          <h4 className='m-0'>{props.date}</h4>
        </div>
       <div className='card-item__body ps-3'>
        <p className='text-white'>{props.name1} & {props.name2}</p>
        <p><span className='text-white'>Title :</span> {props.title}  {props.code ? <MathComponent code={props.code} /> : null}</p>
        <p><span className='text-white'>Main paper :</span> {props.mainPaper}  {props.code ? <MathComponent code={props.code} />  : null} {props.code ? 'IEEE Trans. IT (2019)' :''} </p>
      </div>  
    </div>


  )
}

export default CardItem
