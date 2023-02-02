import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const column = [
    { heading: 'id', value: 'id'},
    { heading: 'Name', value: 'name'},
    { heading: 'Details', value: 'details'},
    { heading: 'price', value: 'price'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <ul>
        {data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
