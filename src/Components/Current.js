import React from 'react'
import './Current.css';
function Current({current,city}) {
  return (
    <div className='current'>
      <b>{city} Weather</b>
      <div className='currentBody'>
        <img src={current.condition.icon}></img>
        <span>{current.condition.text}</span>
        <span><b>Celcius:</b>{current.temp_c}<span class="sp">&#176;</span>C</span>
        <span><b>Feels like:</b>{current.feelslike_c}deg</span>
        <span><b>Wind Speed:</b>{current.wind_kph}deg</span>
        <span><b>Humidity:</b>{current.humidity}</span>
        <span><b>Pressure:</b>{current.pressure_in}</span>
      </div>
    </div>
  )
}

export default Current
