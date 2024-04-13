import React from 'react'
import CardItem from './CardItem'
function Cards() {
  return (
    <div className='card-tec'>
        <div className='left-side'>
          
        </div>
        <CardItem date='2021-2022' name1='Bouzidi Mahmoud Riadh' name2='Tazgait Reda' title='Minimal codes over finite fields' mainPaper='The parameters of minimal linear codes. FFA (2021)' />
        <CardItem date='2020-2021' name1='Bennacer Sarah' name2='Merabti chaima' title='The Bose and minimum distance of a class of BCH codes' mainPaper='Some New Results on Dimension and Bose Distance for Various Classes of BCH Codes. FFA (2020)' />
        <CardItem date='2019-2020' name1='Arab Sohaib' name2='Touati Seifdinne' title='Some Linear codes over' code='F_q +uF_q' mainPaper='Two or Few-Weight Trace Codes over' />
        <div className='right-side'>

        </div>
    </div>
  )
}

export default Cards