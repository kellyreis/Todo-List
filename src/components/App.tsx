import React from 'react';
import NavBar from './NavBar';
import TodoList from './Todolist';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';
import AddTodo from './AddTodo';

const App = () =>{

  return (
  <TodoContext>
    <Router>
    <NavBar></NavBar>
  
    <div className="uk-container">   
    <Switch>
      <Route path="/create">
        <AddTodo></AddTodo>
        </Route>
        <Route path="/">
        <TodoList></TodoList>
        </Route>
        </Switch> 
     </div>
    </Router>
  </TodoContext>

  
  );

}
export default App;