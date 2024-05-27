// Updater-function

import React, {useState} from "react";

function Food() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newfood = document.getElementById("food-input").value;
        document.getElementById("food-input").value="";

        setFoods(f => [...f, newfood]); 
    }

    function handleRemoveFood(index) {

        setFoods(f => f.filter((_, i) => i !== index)); // i is used to differentiate the index

    }
    // in parameters underscore _ is used indicate that the parameter being passed in the function is ignored

    return( <div>
                <h2>List of Foods</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="food-input" placeholder="Enter food name" />
                <button onClick={handleAddFood}>Add Food</button>
            </div>);

}

export default Food