// import React from 'react';
// import { InlineMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// const MathComponent = (props) => {
//   return (
//     <InlineMath math={props.code} />
//   );
// };

// export default MathComponent; 

// App.js
import React from 'react';
import MathJax from 'react-mathjax';

const MathComponent = ({code}) => {

  return (
    <MathJax.Provider>
        <MathJax.Node inline formula={code} />
    </MathJax.Provider>
  )
};

export default MathComponent;