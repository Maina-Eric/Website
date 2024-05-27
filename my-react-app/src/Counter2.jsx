// updater function = a function passed as an argument to setState () usually
//                    export.setYear(arrow function)
//                    allow for safe updated based on the previous state 
//                    used tith nultiple state updated and asynchronous function
//                    good function to use updater function

import React, {useState} from "react";
function Counter2() {

    const [count, setCount] = useState(0); //Array Destructuring

    function increment () {

        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        //During the next render, it will call them in the same order
        // c represents the previous count and not the initial count
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement () {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset () {
        setCount(0);
    }

    return( <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>

            </div>);
}
export default Counter2 