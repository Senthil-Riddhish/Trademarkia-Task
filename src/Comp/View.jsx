import React, { useEffect } from 'react'
import './View.css';
import DeleteIcon from '@mui/icons-material/Delete';
const View = () => {
    const data = JSON.parse(localStorage.getItem('climate'));
    console.log(data);
    const handleDelete = (blogOIndex) => {
        console.log(blogOIndex);
        const _data = data.filter((doc, blogIIndex) => {
            if (blogIIndex !== blogOIndex) {
                return doc;
            }
        })
        localStorage.setItem('climate', JSON.stringify(_data));
        window.location.reload(false);
    }
    return (
        <div>
            {
                data.map((objs, objIndex) => {
                    return (
                        <div className='current' style={{ backgroundColor: "rgb(180, 214, 232)" }}>
                            <div className='head_part'>
                                <div><b>{objs.location}</b></div>
                                <DeleteIcon onClick={() => handleDelete(objIndex)}></DeleteIcon>
                            </div>
                            <div className='currentBody' style={{ margin: "0px" }}>
                                <div><img src={objs.current.condition.icon}></img></div>
                                <div><span>{objs.current.condition.text}</span></div>
                                <div><span><b>Celcius :</b>{objs.current.temp_c}<span className="sp">&#176;</span>C</span></div>
                                <div><span><b>Frenheit :</b>{objs.current.temp_f}<span className="sp">&#176;</span>F</span></div>
                                <div><span><b>Feels like :</b>{objs.current.feelslike_c}deg</span></div>
                            </div>
                            <div className='currentBody' style={{ margin: "0px" }}>
                                {objs.current.is_day === 1 && <span><b>Day :</b>Sunraise</span>}
                                {objs.current.is_day === 0 && <span><b>Day :</b>Sunset</span>}
                                <span><b>Wind Speed :</b>{objs.current.wind_kph}deg</span>
                                <span><b>Humidity :</b>{objs.current.humidity}</span>
                                <span><b>Pressure :</b>{objs.current.pressure_in}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default View

/**
 
 */
