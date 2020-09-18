import React from 'react';
import { useParams } from 'react-router-dom';
import hotelData from '../../fakeData/hotelData';
import Map from '../Map/Map';
import RoomDetail from '../RoomDetail/RoomDetail';
import {Link} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import './HotelRoom.css';

const ColorButton = withStyles((theme) => ({
    root: {
      color: 'black',
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
}))(Button);

const HotelRoom = () => {
    const {locationName} = useParams();
    const hotelDetails = hotelData.filter(city => city.name === locationName);
    return (
        <div className="hotelRoom">
            <ColorButton className='backToHome'><Link to='/home'>
                            Back to Home
                            </Link> </ColorButton>   
            <div>
                {hotelDetails.map(place => <RoomDetail showBooking={true} bookingPlace={place}></RoomDetail>)}
                <div className="map"><Map  /></div>       
            </div>                         
        </div>
    );
};

export default HotelRoom;