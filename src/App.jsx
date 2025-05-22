import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className='container'>
      <h1>Product Search</h1>
      <Autocomplete />
    </div>
  );
}

export default App;
