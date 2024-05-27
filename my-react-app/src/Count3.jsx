// useEffect() = React ook that tells React DO SOME CODE WHEN (Pick one);
//               This component re-renders
//               This component mounts
//               The state of a value
// 
// useEffect(function, [dependacies])
// 
// 1. useEffect(() => {})       //Runs after every re-render
// 2. useEffect(() => {}, [])   // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes
// 
// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (reat-time updates)
// #Fetching Data from a API (Application Programming Interface)
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function Count3() {

    

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    // useEffect(() => {document.title= `Count: ${count}` }) // Runs after every re-render
    
    // useEffect(() => {document.title= `Count: ${count}`}, []) // runs only on Mount
    // useEffect(() => {document.title = `Count: ${count} ${color}`}, [count, color] )
    function addcount() {
        setCount(c => c + 1);
    }
    function subtractcount () {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green" );
    }
    function reset() {
        setCount(0);
    }
    return( <>
                <p style={{color: color}}>Count: {count}</p>
                <button onClick={addcount}>Add</button> <br/>
                <button onClick={reset}>Reset</button>
                <button onClick={subtractcount}> Subtract</button> ,<br/>
                <button onClick={changeColor}>Change Color</button>

            </>)

}
export default Count3
