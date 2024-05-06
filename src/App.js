import './App.css';
import React, { useState, useEffect } from 'react';
import { API_URL } from './constants';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(async res => {
      const data = await res.json();
      console.log(data);
      setBackendData(data.items)
    })
  }, [])

  return (
    <div className="App">
      <h1>This is the front-end</h1>
      { backendData && backendData.length > 0 ? backendData.map((movie, index) => {
        return (
          <div key ={index}>
            <p>{movie.title}</p>
          </div>
        )
      }) : <p>loading...</p>}
    </div>
  );
}

export default App;
