// updater function = a function passed as an argument to setState () usually
//                    export.setYear(arrow function)
//                    allow for safe updated based on the previous state 
//                    used tith nultiple state updated and asynchronous function
//                    good function to use updater function

import React, {useState} from "react";

function Car() {

    const [car, setCar] = useState({year: 2024, 
                                    make: "Tesla", 
                                    model: "Model 3"});
    
    function  handleYearChange (event) {
        setCar(c => ({...c, year: event.target.value,}));

    } 
    function  handleMakeChange (event) {
        setCar(c => ({...c, make: event.target.value}))
        
    } 
    function  handleModelChange (event) {
        setCar(c => ({...c, model: event.target.value}))
        
    } 
    return( <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model} </p>

                <input type="number" value={car.year} onChange={handleYearChange}/>
                <input type="text" value={car.make} onChange={handleMakeChange}/>
                <input type="text" value={car.model} onChange={handleModelChange}/>
            </div>);
}
export default Car