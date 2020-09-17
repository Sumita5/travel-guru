import React from 'react';
import { useParams } from 'react-router-dom';
import Hotels from '../../fakeData/Hotels';
import Map from '../Map/Map';
import RoomDetail from '../RoomDetail/RoomDetail';
import './HotelRoom.css';

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 21.4272,
    lng: 92.0058,
  }


const HotelRoom = () => {
    const {locationName} = useParams();
    console.log(locationName);
    const room = Hotels.filter(city => city.name === locationName);    

    return (
        <div className="hotelRoom">
            
            <div className="map"><Map location={location} zoomLevel={17} /></div>
            <div>{room.map(name => <RoomDetail room={name}></RoomDetail>)}</div>
            

           
        </div>
    );
};

export default HotelRoom;