// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import tea from './images/tea.jpg'

function App() {

  const link = "https://api.thedragonofthe.rest/quote"
  const [ data, setData ] = useState ( " " );

  useEffect ( ( ) => {
    axios 
      .get( link )
      .then( ( res ) => setData( res ) ) 
  },[])

  // console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Uncle Iroh Quotes</h1>
        <img src={tea} alt="uncle tea"></img>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          "{data.data?.quote}"
        </a>
      </header>
    </div>
  );
}

export default App;
