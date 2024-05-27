// React Hook = special function that allows functional components
//              to use React features withour writing class components
//              (useState, useEffect, useContext, useReducer, useCallback)

// useState = a React Hook that allows the creation of a stateful variable
//            AND a setter function to update its value in the Virtual DOM.
//            [name, setName]
import React, {useState} from "react"

function MyComponent() {

    const [name, setName] = useState("Guest"); // Array Destructuring
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false)

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    const reset = () => {
        setAge(0);
    }

    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed)
    }

    return( <div>
                <p className="component-name" >Name: {name} </p>
                <button className="component-button" onClick={updateName} >Set Name</button>

                <p className="component-name">Age : {age}</p>
                <button className="component-button" onClick={incrementAge}>Increment Age</button>
                <button className="component-button" onClick={reset}>Reset</button>

                <p className="component-name">is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button className="component-button" onClick={toggleEmployedStatus}>Toggle Status</button>
            </div>);
}

export default MyComponent