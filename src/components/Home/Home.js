import React from 'react';
import './Home.css';
import Data from '../Data.json'
import Vehicles from '../Vehicles/Vehicles';
const Home = () => {
    return (
        <div className="cart">
            {
                Data.map(data => <Vehicles vehicle={data}> </Vehicles>)
            }
        </div>
    );
};

export default Home;