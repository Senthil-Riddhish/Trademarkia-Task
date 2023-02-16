import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const[city,setCity]=useState("");
  return (
    <div className="App">
      <div className="Head">TradeMarke Climate Webiste</div>
      <header className="App-header">
        <input type="text" onChange={event=>} className="citytextbox" placeholder='Enter the city name'>

        </input>
      </header>
    </div>
  );
}

export default App;
