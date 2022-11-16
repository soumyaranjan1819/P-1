import React from 'react'
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../Images/hb1.jpg'
import Img2 from '../../Images/hb2.jpg'
import Img3 from '../../Images/hb3.jpeg'
import Img4 from '../../Images/hb7.jpg'
import Img5 from '../../Images/hb5.jpg'
import Img6 from '../../Images/hb6.jpg'

function Carousal() {
  return (
    <div className='slidder'>
        <Carousel slide={false}>
            <Carousel.Item interval={3000}>
                <img
                // className="carousal"
                src={Img1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='slider-heading'>Indian </h3>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                // className="carousal"
                src={Img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='slider-heading'>Italian</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                // className="d-block w-100"
                src={Img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className='slider-heading'>Exotic Deserts</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                // className="d-block w-100"
                src={Img4}
                alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3 className='slider-heading'>BBQ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                // className="slides"
                src={Img5}
                alt="fifth slide"
                />

                <Carousel.Caption>
                <h3 className='slider-heading'>Sweets</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                // className="slides"
                src={Img6}
                alt="sixth slide"
                />
                <Carousel.Caption>
                <h3 className='slider-heading'>Cocktail</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Carousal