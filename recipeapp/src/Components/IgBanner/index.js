import React from 'react'
import { BsInstagram } from 'react-icons/bs';
// import Slider from "react-slick";
import './instaBanner.css'
// import FooterImage1 from '../../Images/footer-1.jpg'
// import FooterImage2 from '../../Images/footer-2.jpg'
// import FooterImage3 from '../../Images/footer-3.jpg'
// import FooterImage4 from '../../Images/footer-4.jpg'
// import FooterImage5 from '../../Images/footer-5.jpg'
// import FooterImage6 from '../../Images/footer-6.jpg'
function IgBanner() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
  return (
    <>
        {/* <div className="instagram-banner">
            <div className='instagram-banner-item'>
                <img src={FooterImage3} alt="" />
            </div>
            <div className='instagram-banner-item'>
                <img src={FooterImage1} alt="" />
            </div>
            <div className='instagram-banner-item'>
                <img src={FooterImage2} alt="" />
            </div>
            <div className='instagram-banner-item'>
                <img src={FooterImage6} alt="" />
            </div>
            <div className='instagram-banner-item'>
                <img src={FooterImage5} alt="" />
            </div>
            <div className='instagram-banner-item'>
                <img src={FooterImage4} alt="" />
            </div>
            
            <div className="outer-border">
                <div className='instagram-banner-text'>
                    <span> <BsInstagram style={{ fontSize:'22px'}} /></span>
                    <span> Follow US On Instagram</span>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default IgBanner