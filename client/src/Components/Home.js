import axios from 'axios'
import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
//import InputLabel from '@mui/material/InputLabel';




 
function Home(){

    const [data, setData] = useState("");
    const [sip, setSip] = useState({
        principal: "",
        rate: "",
        time: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
            setSip({
                ...sip,
                [name]: value,
            });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("/sip/sip_amount", {...sip}).then((result) => {
            console.log(result)
        })
     }

    const buttonHandler = async() => {
        const result = await axios.get("/home")
        console.log(result)
        setData(result.data)
    }
    return (
        <div>
            {data.length>0 && <h2>{data}</h2>}
            <button onClick={buttonHandler}>Click me</button>
            <div>
            <Box component="form" noValidate onSubmit={submitHandler}
      style={{
        
          display: 'flex',
          width: '50%',
          height: '50%',
          margin: 'auto'
        
      }}
    >
      <Paper style={{padding:'20px'}} elevation={3} >
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField id="principal" 
        name="principal"
        value={sip.principal}
        InputProps={{
            endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
          }}

        label="Monthly Investment" variant="standard" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
        <TextField id="rate" 
        name="rate"
        value={sip.rate}
        InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}

        label="Expected return rate(p.a)" variant="standard" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
        <TextField id="time" 
        name='time'
        value={sip.time}
        InputProps={{
            endAdornment: <InputAdornment position="end">Yr</InputAdornment>,
          }}

        label="Time Period" variant="standard" onChange={handleInputChange}/>
        </Grid>
        </Grid>
        <Button  type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 4 }}>Calculate SIP</Button>
      </Paper>
    </Box>
            </div>
        </div>
        

    )
}

export default Home