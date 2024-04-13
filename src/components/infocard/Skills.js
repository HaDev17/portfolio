import React, { useState, useEffect } from 'react';

const skills = ['Associate Professor', 'Web developer', 'Cryptographer', 'coder'];


function Skills () {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    if (subIndex === skills[index].length + 1 && !reverse) {
      setPause(true);
      setTimeout(() => {
        setPause(false);
        setReverse(true);
      }, 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => prevIndex === skills.length - 1 ? 0 : prevIndex + 1);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, pause]);

  return (
    <>
      <h3 className='info-card__body--title' style={{ height: '20px' }}>{`${skills[index].substring(0, subIndex)}${subIndex === skills[index].length ? '_' : ''}`}</h3>
    </>
  );
};

export default Skills;