import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slide.css';





const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerPadding: "5px",
    className: 'slides',
    focusOnSelect: true,
    
}

const Slides = () => {
    return (
        <div style={{padding: 24}} >
            <Slider {...settings}>
                {/* {photos.map((photo) => {
                    return(
                        <div >
                            <img width='50%' src={photo.url} alt=""/>
                            
                        </div>
                    )
                })} */}
               
                

            </Slider>
        </div>
    );
};

export default Slides;