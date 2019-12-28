import React, { useReducer, useEffect } from 'react';

// Reducers
import { todoReducer } from './reducers/todoReducer';
import { initialState } from './reducers/todoReducer';

import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { Button } from 'reactstrap';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

const test = {
  item: 'test',
  completed: false,
  due: new Date(),
  id: 'test'
}

useEffect(() => {
  console.log(state);
}, [state])

  console.log(state);

  return (
    <div className="App">
      <TodoList tasks={state} dispatch={dispatch}/>
      {/* <Button onClick={() => dispatch({ type: 'DELETE', payload: { id: 'test' }})}>Testing</Button> */}
      <Button onClick={() => dispatch({ type: 'REMOVE'})}>Remove Complete</Button>
      <TodoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
