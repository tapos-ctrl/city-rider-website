import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Vehicles.css';

const Vehicles = (props) => {
    const {name, id, image} = props.vehicle;
    let { rideBy } = useParams(name);
    return (
        <Link to={`/book/${name}`}>
        <div className="components">
            <img className="image" src={image} alt=""/>
            <button className="button">{name}</button>  
        </div>
        </Link>
    );
};

export default Vehicles;