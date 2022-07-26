import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const link = "https://api.thedragonofthe.rest/quote"
  const [ data, setData ] = useState ( " " );

  useEffect ( ( ) => {
    axios 
      .get( link )
      .then( ( res ) => setData( res ) ) 
  },[])

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <h1> {data.data.quote} </h1>
         <h1> testing xd . </h1>
        </a>
      </header>
    </div>
  );
}

export default App;
