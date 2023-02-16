import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './View';
function Storage() {
  const navigate = useNavigate();
  //declaring the useState
  const [city, setCity] = useState("");
  const [citySug, setcitySug] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [current, setCurrent] = useState();
  const [forecast, setforecast] = useState();
  const [location, setlocation] = useState(``);
  //for localstorage:
  const [climate, setclimate] = useState([]);
  //using useEffect for the search for a country:
  useEffect(() => {
    const data=localStorage.getItem('climate');
    if(data){
      let mm=JSON.parse(localStorage.getItem('climate'));
      setclimate(mm);
    }else{
      setclimate([]);
    }
  }, [])
  return (
    <div className="App">
      <div className='Head'>
        <div>TradeMarke Climate Webiste</div>
        <div><button className='buttn' onClick={() => navigate('/')}>Climate</button></div>
      </div>
      <header className="App_body">
        {climate.length>0 && <View/>}
        {climate.length<1 && <div>Sorry No Information has been saved</div>}
      </header>
    </div>
  );
}

export default Storage
