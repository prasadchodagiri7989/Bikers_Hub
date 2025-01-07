import Button from '@mui/material/Button';
import React from 'react';
import '../styles/global.css';



function Areadrpdwn() {
  return (
    <div>
        <Button className='areadrpdwn d-flex' variant="outlined">
            <div className="info d-flex flex-column">
                <span className='label'>Your Location </span>
                <span className='name '>ANDHRA </span>
            </div>
        </Button>
    </div>
  )
}

export default Areadrpdwn;