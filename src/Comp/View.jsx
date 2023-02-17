import React, { useEffect } from 'react'
import './View.css';
import DeleteIcon from '@mui/icons-material/Delete';
const View = () => {
    const data = JSON.parse(localStorage.getItem('climate'));
    console.log(data);
    const handleDelete=(blogOIndex)=>{
        console.log(blogOIndex);
        const _data=data.filter((doc,blogIIndex)=>{
            if(blogIIndex!==blogOIndex){
                return doc;
            }
        })
        localStorage.setItem('climate',JSON.stringify(_data));
        window.location.reload(false);
    }
    return (
        <div>
            {
                data.map((objs,objIndex) => {
                    return (
                        <div className='current'>
                            <div className='head_part'>
                                <div><b>{objs.location}</b></div>
                                <DeleteIcon onClick={()=>handleDelete(objIndex)}></DeleteIcon>
                            </div>
                            <b>Current Weather</b>
                            <div className='currentBody'>
                                <img src={objs.current.condition.icon}></img>
                                <span>{objs.current.condition.text}</span>
                                <span><b>Celcius:</b>{objs.current.temp_c}<span className="sp">&#176;</span>C</span>
                                <span><b>Frenheit:</b>{objs.current.temp_f}<span className="sp">&#176;</span>F</span>
                                <span><b>Feels like:</b>{objs.current.feelslike_c}deg</span>
                            </div>
                            <div className='currentBody'>
                                {objs.current.is_day === 1 && <span><b>Day:</b>Sunraise</span>}
                                {objs.current.is_day === 0 && <span><b>Day:</b>Sunset</span>}
                                <span><b>Wind Speed:</b>{objs.current.wind_kph}deg</span>
                                <span><b>Humidity:</b>{objs.current.humidity}</span>
                                <span><b>Pressure:</b>{objs.current.pressure_in}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default View
