import React from 'react'

function Courses(props) {
    // return (
    //     <div className='courses'>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>University</th>
    //                     <th>Level</th>
    //                     <th>Course</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {props.courses.map((course, index) => {
    //                     const details = course.split(', ');
    //                     return (
    //                         <tr key={index}>
    //                             <td>{details[0]}</td>
    //                             <td>{details[1]}</td>
    //                             <td>{details[2]}</td>
    //                         </tr>
    //                     );
    //                 })}
    //             </tbody>
    //         </table>
    //     </div>
    // )
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '0fr .2fr .5fr .5fr ', gap: '10px' }}>
          <div className='pe-2 text-white'>University</div>
          <div className='text-white'>Level</div>
          <div className='text-white'>Course</div>
          <div className='text-white'>Speciality</div>
          {props.courses.map((course, index) => {
            const details = course.split(', ');
            return details.map((detail, i) => <div key={`${index}-${i}`}>{detail}</div>);
          })}
        </div>
      );
}

export default Courses