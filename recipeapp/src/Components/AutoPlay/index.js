import React from 'react'
import Slider from "react-slick";
import { BsInstagram } from 'react-icons/bs';
import './autoPlay.css'
import AutoCarousel1 from '../../Images/as1.jpg'
import AutoCarousel2 from '../../Images/as2.jpg'
import AutoCarousel3 from '../../Images/as3.jpg'
import AutoCarousel4 from '../../Images/as4.jpg'
import AutoCarousel5 from '../../Images/as5.jpg'
import AutoCarousel6 from '../../Images/as6.jpg'
import AutoCarousel7 from '../../Images/as7.jpg'
import AutoCarousel8 from '../../Images/as8.jpg'
import AutoCarousel9 from '../../Images/as9.jpg'
import AutoCarousel10 from '../../Images/as10.jpg'
import AutoCarousel11 from '../../Images/as11.jpg'
import AutoCarousel12 from '../../Images/as12.jpg'

function AutoPlay() {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 300,
        cssEase: "linear"
      };
    return (
        <div className='ap-carousel'>
          <Slider {...settings}>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel1} alt="" />
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel2} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel3} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel4} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel5} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel6} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel7} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel8} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel9} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel10} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel11} alt=""/>
            </div>
            <div className='ap-carousel-item'>
              <img src={AutoCarousel12} alt=""/>
            </div>
          </Slider>
          {/* <div className="outer-border">
                <div className='instagram-banner-text'>
                    <span> <BsInstagram style={{ fontSize:'22px'}} /></span>
                    <span> Follow US On Instagram</span>
                </div>
          </div> */}
        </div>
    );
}

export default AutoPlay