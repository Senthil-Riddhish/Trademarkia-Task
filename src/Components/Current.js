import React, { useState } from 'react'
import './Current.css';
function Current({ current, city }) {
    const day = current.is_day;
    return (
        <div className='current'style={{backgroundColor:"rgb(180, 214, 232)"}}>
            <div><b>{city}</b></div>
            <div><b>Current Weather</b></div>
            <div className='currentBody' style={{margin:"0px"}}>
                <div><img src={current.condition.icon}></img></div>
                <div><span>{current.condition.text}</span></div>
                <div><span><b>Celcius :</b>{current.temp_c}<span className="sp">&#176;</span>C</span></div>
                <div><span><b>Frenheit :</b>{current.temp_f}<span className="sp">&#176;</span>F</span></div>
                <div><span><b>Feels like :</b>{current.feelslike_c}deg</span></div>
            </div>
            <div className='currentBody' style={{margin:"0px"}}>
                {day===1 && <span><b>Day :</b>Sunraise</span>}
                {day===0 && <span><b>Day :</b>Sunset</span>}
                <span><b>Wind Speed :</b>{current.wind_kph}deg</span>
                <span><b>Humidity :</b>{current.humidity}</span>
                <span><b>Pressure :</b>{current.pressure_in}</span>
            </div>
        </div>
    )
}

export default Current
