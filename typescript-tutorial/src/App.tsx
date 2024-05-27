import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';
import ToDoList from './Components/ToDoList';
import { DragDropContext } from 'react-beautiful-dnd';
 

const  App:React.FC = () =>  {
 
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  };

  // console.log(todos);

  return (
    <DragDropContext onDragEnd={()=> {}}>
      <div className="App">
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <ToDoList 
          todos ={todos} 
          setTodos={setTodos}
          completedTodos ={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
    </div>
    </DragDropContext>
      
  );
}

export default App;

// in tsx you have to define the datatype of the variable youre passing unlike in jsx

// let name: unknown; // when you want the variable to have any datatype and not restrict it
// let name: string;
// let age: number | string; // Union 
// let isStudent: boolean;
// let hobbies: string[];
// let role:[number, string]; //tuple datatype

// Declaring a function type
//1.  let printName:Function;

// let printName:(name:string)=> never; // does not return anything
// let printName:(name:string) => void; //return undefined

// function printName(name:string) {
//   console.log(name);

// }

// printName("Irene");

// Defining a variable with many datatypes using type and exporting to another variable
// type Person = {
//   name:string;
//   age:number;
//   // age?: number; // Optional
// };
// type a = Person &{
//   a: string;
//   b:number;
// }

//defining a two variable with many datatypes using interface and exporting one to another
// interface Person{
//   name: string;
//   age:number;
// }
// interface Guy extends Person{
//   profession: string;
// }

// let lotsofpeople: Person[];

// let person: Person ={
//   name:"Eric",
//   age: 22
// };