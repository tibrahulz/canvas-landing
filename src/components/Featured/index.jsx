import Image from 'next/image';
import React from 'react'
import Business from '../../../public/images/features/business.svg';
import Drapers from '../../../public/images/features/drapers.webp';
import Chronicle from '../../../public/images/features/chronicle.webp';
import Express from '../../../public/images/features/express.webp';
import Hindu from '../../../public/images/features/hindu.webp';
import Matrabhumi from '../../../public/images/features/matrabhumi.webp';
import Week from '../../../public/images/features/week.svg';
import Slider from "react-slick";
import { useResponsive } from '../../hooks/useResponsive';

const imgArr = [{
  id: 1,
  name: 'business',
  image: Business
}, {
  id: 2,
  name: 'drapers',
  image: Drapers
}, {
  id: 3,
  name: 'Chronicle',
  image: Chronicle
}, {
  id: 4,
  name: 'Express',
  image: Express
}, {
  id: 5,
  name: 'Hindu',
  image: Hindu
}, {
  id: 6,
  name: 'Matrabhumi',
  image: Matrabhumi
}, {
  id: 7,
  name: 'week',
  image: Week
}]

const Featured = () => {
  const { isDesktop, isTablet } = useResponsive()
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 4 : 1,
    slidesToScroll: isTablet ? 4 : 1
  };


  return (
    <div className="slider-container">
      <h2 style={{ fontWeight: 'bolder', color: '#000' }}>As Featured On</h2>
      <Slider {...settings}>
        {imgArr.map(img => <div key={img.id} class="featuringImageContainer">
          <Image src={img.image} alt={img.name} style={{ objectFit: 'contain', height: '100%', width: '100%' }} />
        </div>)}
      </Slider>
    </div>
  )
}

export default Featured