import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Main.css';



const Main = (props) => {    
    
    const {name, url} = props.spot;
    
    return (
        <div class="gallery">
            <h1>{name}</h1>
            <Link to={"/booking/" + name}>
            <img src={url} alt="" width="600" height="400" />
            </Link>
        </div>  
    
    );
};
export default Main;