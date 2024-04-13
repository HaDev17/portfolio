import React from 'react'
import Cards from './Cards'
import Courses from './Courses'
import './Teaching.css'

function Teaching() {
  const courses = [
    "USTHB, Mastre 2, Arithmetic Coding and Combinatorial, Elliptic curves",
    "USTHB, Mastre 2, Arithmetic Coding and Combinatorial, Introduction to Cryptography",
    "USTHB, Third year, Algebra and cryptography, Introduction to Cryptography",
    "USTHB, Second year, Science and technology, Math 4",
    "USTHB, Second year, Science and technology, Math 3",
    "USTHB, First year, Science and technology, Math 1"
  ];
  return (
    <div className='teaching py-4' id='teaching'>
      <h3 className='my-4 px-4 pb-2'>TEACHING</h3>
      <div className='teaching-content px-4'>
        <p>
        Throughout my career, I've had the honor of  teaching students  about  cryptography and mathematics, and  mentoring numerous graduate students  in their thesis projects. Witnessing their growth and contributing to  their academic journey in these specialized areas has been immensely  rewarding.
        </p>
        <h4 className='my-4'>GRADUATE STUDENTS I HAVE DIRECTED IN THEIR THESIS</h4>
        <Cards />
        <h4 className='my-4'>COURSES</h4>
        <Courses  courses={courses}/>
      </div>
    </div>
  )
}

export default Teaching