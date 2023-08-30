
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDosList from './ToDosList';
import './App.css';
import Filter from './Filter';
import ToDos from './ToDos';
import AddToDos from './AddToDos';
import DetailToDos from './DetailToDos';

function App () {
  return (
    <div className="App">
      
      const [fileredToDos, setFilteredToDos] = useState(ToDos)
      
      
      const handleAddToDos = (newToDos) => {
        newToDos.id = ToDos.length + 1}
        setFilteredToDos([...ToDos, newToDos])
      

      const handleFilter = () => { 
      
       fileredToDos = ToDos.filter(toDo => {
          const matchingIsDone = toDo.isDone.includes(isDone)
          return matchingIsDone;
        return true;
        })
       }
       setFilteredToDos(fileredToDos)
    
      return (
        <Router>
          <h3>liste des taches:</h3>
          <Switch>
            <Route exact path = "/">
              <Filter onFilter = {handleFilter}/>
              <ToDosList toDos = {fileredToDos} />
            </Route>
            <Route path = "/toDos/:id" render = {(props) => <DetailToDos {...props} toDos = {fileredToDos}/>}/>
          </Switch>
          
          <hr/>
          <AddToDos onAddToDos = {handleAddToDos}/>

        </Router>
        );
    </div>
  );
}

export default App;
