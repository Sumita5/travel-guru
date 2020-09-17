import React from 'react';
import './RoomDetail.css';

const RoomDetail = (props) => {
    const {hotelName, details, rank, roomImage, price} = props.room;

    return (
       
            <div class="gallery">
                <h3>{hotelName}</h3>
                <img src={roomImage} alt="" width="600" height="400" />
                <div class="desc">{details}</div>
                <p><small>{rank}</small></p>
                <p><small>{price}</small></p>
            </div>
   
    );
};

export default RoomDetail;