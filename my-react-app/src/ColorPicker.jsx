import React, {useState} from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return( <div className="color-picker-container">
                <h1>Color Picker</h1>

                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected color: {color}</p>
                </div> 

                <label>Select a Color</label>
                <input type="color" value={color} onChange={handleColorChange}/>
                

            </div>)

}

export default ColorPicker

// ask if the text "Selected Color can change color when the background color changes to remain visible"

// CSS properties within javascript need to be enclosed within an object {{}}