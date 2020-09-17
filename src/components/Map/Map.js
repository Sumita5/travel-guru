import React from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';

const LocationPin = ({ text }) => (
    <div className="pin">
      <RoomIcon  className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
 



const Map = () => {
    const defaultProps = {
        center: {
          lat: 21.4272,
          lng: 92.0058
        },
        zoom: 15}
        const pins = {
            hotel1 :'Sea Gull Hotel',
            hotel2 :'Sea Paradise', 
            hotel3 :'Ocean dream'}
      
    return (
        <div style={{ height: '50%', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyASLLNjnXnUS3pZrG78YANjo9uIC0WExFw' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
            <LocationPin
          
          text={pins.hotel1}
        />
        <LocationPin
          
          text={pins.hotel2}
        />
        <LocationPin
          
          text={pins.hotel3}
        />
          
        </GoogleMapReact>
      </div>
    );
};

export default Map;