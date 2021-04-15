import React, { useState, useEffect } from 'react';

function Carlist() {

const [cars, setCars] = useState([]);

useEffect(() => {
    fetchData()
}, []);


const fetchData = () => {
    fetch('https://carstockrest.herokuapp.com/cars')
    .then(response => response.json())
    .then(data => setCars(data._embedded.cars))
    .catch(error => console.error(error))
}

    return (
<div>
        
</div>

    );
}

export default Carlist;