import React, { useReducer } from 'react';

// Reducers
import { todoReducer } from './reducers/todoReducer';
import { initialState } from './reducers/todoReducer'

import './App.css';
import TodoList from './components/TodoList';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      <TodoList tasks={state}/>
      <button onClick={() => dispatch({ type: 'ADD', payload: { item: 'test', id: Date.now() }})}>Testing</button>
      <button onClick={() => dispatch({ type: 'DELETE', payload: { id: 'test' }})}>Testing</button>
    </div>
  );
}

export default App;
