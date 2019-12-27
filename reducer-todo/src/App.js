import React, { useReducer } from 'react';

// Reducers
import { todoReducer } from './reducers/todoReducer';
import { initialState } from './reducers/todoReducer'

import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      {state.map((item) => {
        return <h1>{item.item}</h1>
      })}
      <button onClick={() => dispatch({ type: 'ADD', payload: {item: 'test'} })}>Testing</button>
    </div>
  );
}

export default App;
