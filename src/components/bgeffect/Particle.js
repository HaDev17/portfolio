import React, { useEffect, useState } from 'react';


const Particle = React.memo(({ svg, coordinates, friction, siner, scale, rotation }) => {

  const [position, setPosition] = useState(coordinates.y);
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => position - friction);
    }, 40);
    return () => clearInterval(interval);
  }, [friction]);
  if(position < -30) return null

  return React.cloneElement(svg, {
    style: {
      transform: `translateX(${coordinates.x + Math.sin(position * Math.PI / window.innerHeight / .5) * siner}px) translateY(${position}px) scale(${scale}) rotate(${rotation}${position + 30}deg)`,
      
    }
  });
});

export default Particle;