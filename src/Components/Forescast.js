import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Forecasr.css';
import LinearProgress from '@mui/material/LinearProgress';
function Forescast({ forecast: { forecastday }, city }) {
    const [expanded, setExpanded] = useState(false);
    console.log(forecastday);
    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className='forecasrsection'>
            Forescast for {city}
            {
                forecastday.map((curDateForecast) => {
                    const { date, day, hour } = curDateForecast;
                    const { maxtemp_c, mintemp_c,
                        maxtemp_f, mintemp_f, daily_chance_of_rain
                        , avghumidity, maxwind_kph, condition: {
                            icon, text
                        } } = day;
                    return (
                        <Accordion expanded={expanded === date}
                            onChange={handleChange(date)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id={date}
                            >
                                <img src={icon}/>
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {date}({text})
                                </Typography>
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                  <b>Temp:</b> {mintemp_c} deg to {maxtemp_c} deg
                                </Typography>
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                  <b>{daily_chance_of_rain}</b>% of rain possible
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    hour.map((curHour,index)=>{
                                        return(
                                            <div className='hourtrack'>
                                                <b>{index}:00</b>
                                                <img src={curHour.condition.icon}/>
                                                <div className='progress'>
                                                <LinearProgress variant="determinate" value=
                                                {curHour.temp_c*100/maxtemp_c} />
                                                {curHour.temp_c}deg
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

export default Forescast
