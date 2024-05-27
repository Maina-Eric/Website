import MyComponent from './MyComponent.jsx';
import Button from './Button.jsx'
import Card from './Card.jsx'
import ProfilePicture from './ProfilePicture.jsx';
import Student from './Students.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './list.jsx';
import Counter from './Counter.jsx';
import MyComponent2 from './MyComponent2.jsx';
import ColorPicker from './ColorPicker.jsx';
import Counter2 from './Counter2.jsx';
import ToDoList from './ToDoList.jsx';
import DigitalClock from './DigitalClock.jsx';
import ComponentA from './ComponentA.jsx';
import Stopwatch from './Stopwatch.jsx';

function App() {

  const fruits =  [{id: 1, name:"apple", calories: 95}, //providing a unique key to each item
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];

  const vegetables =  [{id: 6, name:"Potatoes", calories: 110}, //providing a unique key to each item
                    {id: 7, name: "Celery", calories: 15}, 
                    {id: 8, name: "Carrots", calories: 25}, 
                    {id: 9, name: "Corn", calories: 63}, 
                    {id: 10, name: "brocolli", calories: 50}];
  return(
    <>
      <Card/> <br/>
      <Button/>
      <DigitalClock/>
      <Stopwatch/>
      
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Mark" age={42} isStudent={false}/>
      <Student name="John" age={20} isStudent={true}/>
      <Student/>

      <UserGreeting isLoggedIn={true}  username="Eric Maina"/>
      {fruits.length > 0 ? <List items = {fruits} category="Fruits" /> : null } 
      {vegetables.length > 0 ? <List items = {vegetables} category="Vegetables "/> : null }
      <ProfilePicture/> 
      <MyComponent/>

      <Counter/> 

      <MyComponent2/>
      <ColorPicker/>

      <Counter2/>
      

      <ToDoList/>

      

      <ComponentA/>

      
    </>
    
  );
  
}
 //       {fruits.length > 0 ? <List items = {fruits} category="Fruits" /> : null }  // conditional rendering for fruits
//        {vegetables.length > 0 ? <List items = {vegetables} category="Vegetables "></List> : null } // Conditional renderring for vegetables

export default App
