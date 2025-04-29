import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    
  };

  return (
    <div className='w-60'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="award" />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
