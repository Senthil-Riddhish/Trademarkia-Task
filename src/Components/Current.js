import React, { useState } from 'react'
import './Current.css';
function Current({ current, city }) {
    const day = current.is_day;
    return (
        <div className='current'>
            <b>{city}</b>
            <br/>
            <b>Current Weather</b>
            <div className='currentBody'>
                <img src={current.condition.icon}></img>
                <span>{current.condition.text}</span>
                <span><b>Celcius:</b>{current.temp_c}<span className="sp">&#176;</span>C</span>
                <span><b>Frenheit:</b>{current.temp_f}<span className="sp">&#176;</span>F</span>
                <span><b>Feels like:</b>{current.feelslike_c}deg</span>
            </div>
            <div className='currentBody'>
                {day===1 && <span><b>Day:</b>Sunraise</span>}
                {day===0 && <span><b>Day:</b>Sunset</span>}
                <span><b>Wind Speed:</b>deg</span>
                <span><b>Wind Speed:</b>{current.wind_kph}deg</span>
                <span><b>Humidity:</b>{current.humidity}</span>
                <span><b>Pressure:</b>{current.pressure_in}</span>
            </div>
        </div>
    )
}

export default Current
