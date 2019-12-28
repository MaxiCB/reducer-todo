import React, { useReducer, useEffect } from 'react';

// Reducers
import { todoReducer } from './reducers/todoReducer';
import { initialState } from './reducers/todoReducer';

import './App.css';
import TodoList from './components/TodoList';

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
      <button onClick={() => dispatch( { type: 'ADD', payload: test})}>Testing</button>
      <button onClick={() => dispatch(state, { type: 'DELETE', payload: { id: 'test' }})}>Testing</button>
    </div>
  );
}

export default App;
