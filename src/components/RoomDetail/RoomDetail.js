import React from 'react';
import './RoomDetail.css';

const RoomDetail = (props) => {
    const {hotelName, details, rank, roomImage, price} = props.bookingPlace;

    return (
       
            <div class="roomdetail">
                <h3>{hotelName}</h3>
                <img src={roomImage} alt="" width="600" height="400" />
                <div class="description">
                    {details}<br/>
                    <h5>{rank}</h5>
                <h6>{price}</h6>
                    </div>
                
            </div>
   
    );
};

export default RoomDetail;