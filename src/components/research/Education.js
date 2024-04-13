import React from 'react'
import EducationItem from './EducationItem'
function Education() {
  return (
    <div className='edu-section'>
      <h4 className='mb-4'>EDUCATION</h4>
      <div className='edu-content row justify-content-center'>
        <div className='line'>
        </div>
        <div className='col-12 col-md-6 row p-0 pe-4'>
          <EducationItem date='2016-2019' level='Ph.D. in Pure Mathematics' univercity='Central China Normal University, Wuhan, China' title='Linear codes over finite rings' supervisor='Hongwei Liu' />
          <EducationItem date='2010-2013' level="Bachelor's in Fundamental Mathematics." univercity='University Ferhat Abbas of Setif, Setif, Algeria.' />

        </div>
        <div className='col-12 col-md-6 row p-0 ps-4 align-items-end edu-3'>
          <EducationItem date='2013-2015' level='Master in Arithmetic Coding and Combinatorial' univercity='University of science and technology Houari Boumediene, Algiers, Algeria' title='Prime Numbers.' supervisor='Bouchenna Rachid.' />
        </div>

      </div>
    </div>
  )
}

export default Education