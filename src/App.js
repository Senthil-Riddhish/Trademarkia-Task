import './App.css';
import { useEffect, useState } from 'react';
import Current from './Components/Current';
import Forescast from './Components/Forescast';
//calling the Weather API 
const autocompleteURL = `https://api.weatherapi.com/v1/search.json?key=8fb866c30f1e407a89b73055231602&q=`;
const weatherAPI = (city) => `https://api.weatherapi.com/v1/forecast.json?key=8fb866c30f1e407a89b73055231602&q=${city}&days=10&aqi=no&alerts=no`;
function App() {
  //declaring the useState
  const [city, setCity] = useState("");
  const [citySug, setcitySug] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [current, setCurrent] = useState();
  const [forecast, setforecast] = useState();

  //using useEffect for the search for a country:
  useEffect(() => {
    const getDuration = setTimeout(() => {
      const fetchcityfromAPI = async () => {
        const resp = await fetch(`https://api.weatherapi.com/v1/search.json?key=8fb866c30f1e407a89b73055231602&q=` + city);
        const data = await resp.json();
        const cityData = data.map(
          (curData) => `${curData.name},${curData.region},${curData.country}`);
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
    console.log(data);
    setCurrent(data.current);
    setforecast(data.forecast);
  }
  return (
    <div className="App">
      <div className="Head">TradeMarke Climate Webiste</div>
      <header className="App_body">
        <input type="text" className="citytextbox" placeholder='Enter the city name'
          value={city}
          onChange={event => setCity(event.target.value
          )}
        >
        </input>
        {citySug.length > 0 && (
          <div className='cityoptionwrapper'>
            {citySug.map(curr => (
              <div className='suggestion' onClick={() => handleClick(curr)}>
                {curr}
              </div>
            ))}
          </div>
        )}
        {current && <Current current={current} city={city} />}
        {forecast && <Forescast forecast={forecast}/>}
      </header>
    </div>
  );
}

export default App;
