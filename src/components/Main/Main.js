import React from 'react';
import './Main.css';

import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Main.css';



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
  

const Main = (props) => {
    const {name, url} = props.spot;
    
    return (
        <React.Fragment>
             <div style={{padding: 24}} className='main'>
            <Slider {...settings}>
                
                        
                        <Link to='/booking'><img width='50%' src={url} alt=""/></Link>
                            <b>{name}</b>
                        
                            
                        
            </Slider>
            </div>
            
        </React.Fragment>
       
            
            
            
            
            
        
    );
};

export default Main;