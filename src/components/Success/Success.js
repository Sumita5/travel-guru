import React from 'react';
import { useParams } from 'react-router-dom';
import hotelData from '../../fakeData/hotelData';
import RoomDetail from '../RoomDetail/RoomDetail';
import './Success.css';


const Success = () => {
    const {hotelName} = useParams();
    const hotelDetails = hotelData.filter(booked => booked.hotelName === hotelName);
    return (
        <div> 
        <h1>Booking Success!</h1>   
        {hotelDetails.map(place => <RoomDetail showBooking={false} bookingPlace={place}></RoomDetail>)}     
        </div>
    );
};

export default Success;