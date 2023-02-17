import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Forecasr.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function Forescast({ forecast: { forecastday }, city }) {
    const [expanded, setExpanded] = useState(false);
    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className='forecasrsection'>
            <div className='city_head'>Forescast for {city}</div>
            {
                forecastday.map((curDateForecast,index) => {
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
                                <img src={icon} />
                                <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "15px" }} className="cls">
                                    {date}<br />({text})
                                </Typography>
                                <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "15px" }} className="cls">
                                    <b>Temp:</b> {mintemp_c} deg to {maxtemp_c} deg
                                </Typography>
                                <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "15px" }} className="cls">
                                    <b>{daily_chance_of_rain}</b>% <br />of rain possible
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    hour.map((curHour, index) => {
                                        return (
                                            <div className='hourtrack'>
                                                <b>{index}:00</b>
                                                <img src={curHour.condition.icon} />
                                                <div className='progress'>
                                                    <Box sx={{ width: '100%' }}>
                                                        <LinearProgress variant="determinate" value={curHour.temp_c * 100 / maxtemp_c} />
                                                    </Box>
                                                    {curHour.temp_c}deg
                                                    <br/>
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
