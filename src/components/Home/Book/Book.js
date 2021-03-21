import React, { useContext, useState } from 'react';
import './Book.css';
import { useParams } from 'react-router-dom';
import Login from '../../Login/Login';
import Location from '../../Location/Location';
const Book = () => {
    const bus = "https://www.downloadclipart.net/large/84-travel-bus-file-clipart.png";
    const train = "https://i.pinimg.com/736x/e5/dc/c5/e5dcc5040ce8c5b7cb3fccc243a2da46.jpg";
    const car = "https://png.clipart.me/image_preview/528/car-top-view-vector-free-26970.png";
    const bike = "https://img.freepik.com/free-vector/man-ride-naked-bike-cartoon-speed-motorcycle-illustration_261104-19.jpg?size=338&ext=jpg";
    let { rideBy } = useParams();
    let image = "";
    let price = "";
    if (rideBy === "Bus") {
        image = bus;
        price = 60;
    }
    if (rideBy === "Bike") {
        image = bike;
        price = 150;
    }
    if (rideBy === "Train") {
        image = train;
        price = 50;
    }
    if (rideBy === "Car") {
        image = car;
        price = 300;
    }
    const [location, setLocation] = useState({
        findLocation: true,
        yourLocation: false,
        from: "",
        photo: "",
        to: "",
        rideBy: false,
        date: ""
    });
    const handleBlur = (e) => {
        const today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        const findLocation = { ...location };
        findLocation.date = date;
        findLocation[e.target.name] = e.target.value;
        setLocation(findLocation);
    }
    const handleSubmit = (e) => {
        const findLocation = { ...location };
        findLocation.findLocation = false;
        findLocation.yourLocation = true;
        findLocation.rideBy = true;
        setLocation(findLocation);
        e.preventDefault();



    }



    return (
        <div className="component">
            <form className="form" action="" onSubmit={handleSubmit}>
                <h3> <span style={{ color: "blue" }}>Date:</span> {location.date}</h3>
                {location.findLocation &&
                    <div>
                        <h2>Pick from</h2>
                        <input className="location-input" type="text" onBlur={handleBlur} name="from" placeholder="Mirpur-1" required />
                        <br />
                        <h2>Pick to</h2>
                        <input className="location-input" type="text" onBlur={handleBlur} name="to" placeholder="Dhanmondi" required />
                        <br />
                        <input className="location-input" type="submit" value="Search" />
                    </div>
                }
                {location.yourLocation && <div style={{ backgroundColor: "tomato", borderRadius: "10px", margin: "20px", textAlign: "left", padding: "10px", color: "white" }}>
                    <h1>{location.from}</h1>
                    <h1>{location.to}</h1>
                </div>}
                <div>
                    {location.rideBy && <div className="choose-rider"><img style={{ height: "50px" }} src={image} alt="" /> <h3><i style={{ color: "gray" }} class="fas fa-user-friends"></i> {rideBy} 4</h3> <h3>$ {price}</h3></div>}
                    {location.rideBy && <div className="choose-rider"> <img style={{ height: "50px" }} src={image} alt="" /> <h3><i style={{ color: "gray" }} class="fas fa-user-friends"></i> {rideBy} 4</h3> <h3>$ {price}</h3></div>}
                    {location.rideBy && <div className="choose-rider"><img style={{ height: "50px" }} src={image} alt="" /> <h3><i style={{ color: "gray" }} class="fas fa-user-friends"></i> {rideBy} 4</h3> <h3>$ {price}</h3></div>}
                    {location.rideBy && <div className="choose-rider"><img style={{ height: "50px" }} src={image} alt="" /> <h3><i style={{ color: "gray" }} class="fas fa-user-friends"></i> {rideBy} 4</h3> <h3>$ {price}</h3></div>}
                </div>
            </form>
            <div>
                <Location></Location>
            </div>
        </div>
    );
};

export default Book;
