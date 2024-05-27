import React from 'react'
import {Todo} from "../model";
import './styles.css' 
import Singletodo from './Singletodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const ToDoList = ({todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
  return (
    <div className="container">
        <Droppable  droppableId="TodosList">
            {(provided)=> (
                <div className="todos" ref={provided.innerRef} {...provided.droppableProps} >
                <span className="todos_heading">Active Tasks</span>
               {completedTodos.map((todo, index)=> (
                    <Singletodo 
                      index={index}
                      todo={todo} 
                      todos={todos}
                      key={todo.id}
                      setTodos={setTodos} />
                ))}
            </div>
            )}
        </Droppable>
        <Droppable droppableId="TodosList">
            {() => (
                <div className="todos remove" >
                <span className="todos_heading">Completed Tasks</span>
               {completedTodos.map((todo, index)=> (
                    <Singletodo 
                      index={index}
                      todo={todo} 
                      key={todo.id}
                      todos={completedTodos}
                      setTodos={setCompletedTodos} />
                ))}
            </div>
            )}
        </Droppable> 
    </div>
  )
}

export default ToDoList
