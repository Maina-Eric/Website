import React, {useState} from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take A Shower", "Walk the Dog"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }
    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }

    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks]; 
            //Array Destructuring to swap two elements
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];

            setTasks(updatedTasks);
        }

    }
    function modeTaskDown(index){
        if (index < tasks.length -1 ) {
            const updatedTasks = [... tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            // Array destructuring
            setTasks(updatedTasks);
        }

    }
    return( <div className="ToDoList">
                <h1>To-Do-List</h1>

                <div>
                    <input
                        type="text"
                        placeholder="Enter a Task"
                        value={newTask}
                        onChange={handleInputChange}/>
                        <button 
                            className="add-button"
                            onClick={addTask}> 
                            Add
                        </button>
                </div>
                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>
                                Delete 
                            </button>
                            <button 
                                className="move-button" 
                                onClick={() => moveTaskUp(index)}>
                                👆
                            </button>
                            <button 
                                className="move-button" 
                                onClick={() => modeTaskDown(index)}>
                                👇
                             </button>


                        </li>
                    )}
                </ol>
            </div>);
}
export default ToDoList