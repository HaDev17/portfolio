import React, {useState, useEffect} from 'react'
import image1 from '../../images/imagesSilder/1.png'
import image2 from '../../images/imagesSilder/2.png'
import image3 from '../../images/imagesSilder/3.png'
import image4 from '../../images/imagesSilder/4.png'

function Images() {
    const images = [image1, image2, image3, image4];
    const [currentImageIdx, setCurrentImagIdx] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImagIdx((currentImageIdx + 1) % images.length);
        }, 11000); // change image every 2 seconds
    
        return () => {
          clearInterval(timer);
        };
      }, [currentImageIdx, images.length]);
    
  return (
    <>
        {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt=''
          className={`slider-image ${currentImageIdx === idx ? 'visible' : ''}`}
        />
      ))}
    </>
  )
}

export default Images