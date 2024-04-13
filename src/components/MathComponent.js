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