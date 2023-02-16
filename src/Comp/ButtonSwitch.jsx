import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function ButtonSwitch() {
    return (
        <div>
            <div className="App">
                <div className="Head">TradeMarke Climate Webiste</div>
                <header className="App_body">
                    <div>
                        <Stack spacing={10} direction="row">
                            <Button variant="contained" navigate="/OTPAuthen">Contained</Button>
                            <Button variant="contained">Contained</Button>
                        </Stack>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default ButtonSwitch
