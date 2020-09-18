import React from 'react';
import { Link } from 'react-router-dom';

import './RoomDetail.css';



const RoomDetail = (props) => {    
    const {hotelName, details, rank, roomImage, price} = props.bookingPlace;
    
    return (       
            <div class="roomdetail">
                <h3>{hotelName}</h3>
                <img src={roomImage} alt="" width="600" height="400" />
                <div class="description">
                    {details}<br/>
                    <h5>Rank: {rank}</h5>
                    <h6>Price: {price}</h6>                    
                    </div>
                    {props.showBooking && 
                <Link to={'/success/'+hotelName}><button>Go</button></Link>}              
            </div>
   
    );
};

export default RoomDetail;