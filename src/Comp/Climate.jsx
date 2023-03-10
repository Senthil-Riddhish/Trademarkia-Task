import './Climate.css';
import { useEffect, useState } from 'react';
import Current from '../Components/Current';
import Forescast from '../Components/Forescast';
import { useNavigate } from 'react-router-dom';
import { positions } from '@mui/system';
import Swal from 'sweetalert2';
//calling the Weather API 
const autocompleteURL = `https://api.weatherapi.com/v1/search.json?key=8fb866c30f1e407a89b73055231602&q=`;
const weatherAPI = (city) => `https://api.weatherapi.com/v1/forecast.json?key=8fb866c30f1e407a89b73055231602&q=${city}&days=10&aqi=no&alerts=no`;
const getClimate = () => {
  const data = localStorage.getItem('climate');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}
function App() {
  const navigate = useNavigate();
  //declaring the useState
  const [city, setCity] = useState("");
  const [citySug, setcitySug] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [current, setCurrent] = useState();
  const [forecast, setforecast] = useState();
  const [location, setlocation] = useState(``);
  const [info, setinfo] = useState(false);
  //for localstorage:
  const [climate, setclimate] = useState(getClimate);
  //using useEffect for the search for a country:
  useEffect(() => {
    const getDuration = setTimeout(() => {
      const fetchcityfromAPI = async () => {
        const resp = await fetch(`https://api.weatherapi.com/v1/search.json?key=8fb866c30f1e407a89b73055231602&q=` + city);
        const data = await resp.json();
        const cityData = data.map(
          (curData,i) => `${curData.name},${curData.region},${curData.country}`);
        setcitySug(cityData);
      }
      if (city.length > 2 && !clicked) {
        fetchcityfromAPI();
      } else {
        setcitySug([]);
        setClicked(false);
      }
    }, 1000);
    return () => clearTimeout(getDuration);
  }, [city])

  //handle click fubction for the city chosen from the drop down box
  const handleClick = async (citychoosen) => {
    setCity(citychoosen);
    setcitySug([]);
    setClicked(true);

    //method calling for the Entered City
    const resp = await fetch(weatherAPI(city));
    const data = await resp.json();
    setinfo(true);
    setCurrent(data.current);
    setforecast(data.forecast);
    setlocation(data.location.name);
  }
  function storage() {
    let det = {
      current,
      location,
    }
    setclimate([...climate, det]);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your choice has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    setinfo(false);
  }
  //saving data to local storage:
  useEffect(() => {
    localStorage.setItem('climate', JSON.stringify(climate));
  }, [climate])
  return (
    <div className="App">
      <div className='Head'>
        <div>TradeMarkia Climate Webiste</div>
        <div><button className='buttn' onClick={() => navigate('/Storage')}>Storage</button></div>
      </div>
      <header className="App_body">
        <input type="text" className="citytextbox" placeholder='Enter the city name'
          value={city}
          onChange={event => setCity(event.target.value
          )}
        >
        </input>
        {citySug.length > 0 && (
          <div className='cityoptionwrapper'>
            {citySug.map((curr,index)=> (
              <div className='suggestion' key={index} onClick={() => handleClick(curr)}>
                {curr}
              </div>
            ))}
          </div>
        )}
        {current && <Current current={current} city={location} />}
        {info == true && <div style={{ marginTop: "1.5rem" }}><button className='buttn' onClick={storage}>Save Information</button></div>}
        {forecast && <Forescast forecast={forecast} city={location} />}
      </header>
    </div>
  );
}

export default App;