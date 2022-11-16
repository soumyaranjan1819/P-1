import React from 'react'
import './footer.css'
import Logo from '../../Images/yumma_logo.png'
import { BsInstagram,BsFacebook,BsTwitter,BsYoutube,BsPhone } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
// import { Outlet } from 'react-router-dom';

function Footer() {
  return (
    <>  
    <div className='footer-wraper'>
        <div className='footer'>
            <div className="news-letters">
                <p className="news-letter-heading">Subscribe</p>
                <p className='footer-message' >Get access to latest recipes and cooking tips every week by joining our weekly newsletter.</p>
                <div className='footer-subscription-form'>
                    <input className='news-letter-ipBox' type="email" name="" id="" placeholder='Enter your email'/>
                    <button className='news-letter-subscribe-btn'>Subscribe</button>
                </div>
                <p className='footer-message'>Share your recipes and cooking hacks with us, we will feature you.</p>
                <div className='footer-socialmedia-icons'>
                    <span><BsFacebook/></span>
                    <span><BsInstagram/></span>
                    <span><BsTwitter/></span>
                    <span><BsYoutube/></span>
                </div>
            </div>
            <div className="credit">
                <img src={Logo} alt="" />
                <p className='footer-message'>A recipe applicaton, with more than 5000+ recipes</p>
                <div className='credit-message'>
                    <p>Designed and developed by</p>
                    <p><AiOutlineCopyrightCircle/> soumyaranjan1819@gmail.com</p>
                    <p><BsPhone/> +91 7008042417</p>
                    <p><MdLocationOn/> Bhubneswar, Odisha</p>
                </div>
            </div>
        </div>
    </div>
    {/* <Outlet/> */}
    </>
  )
}

export default Footer