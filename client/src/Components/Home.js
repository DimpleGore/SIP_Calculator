import axios from 'axios'
import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import DoughnutChart from './DoughnutChart';
import { color } from '@mui/system';

//import InputLabel from '@mui/material/InputLabel';




 
function Home(){

  

    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [sip, setSip] = useState({
        principal: "",
        rate: "",
        time: ""
    })

    const handleInputChange = (e) => {
      setError("")
        const { name, value } = e.target;
    
            setSip({
                ...sip,
                [name]: value,
            });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("/sip/sip_amount", {...sip}).then((result) => {
          //console.log(result.data.result)
          if(result && result.data && result.data.result){
            console.log(result.data.result)
            setData(result.data.result)
          }
        }).catch((err) => {
          console.log(err)
          setError(err.response.data.message)
        })
     }

    const buttonHandler = async() => {
        const result = await axios.get("/home")
        
    }
    return (
        <div>
           

            {data.length>0 && <h2>{data}</h2>}
            <button onClick={buttonHandler}>Click me</button>
            <div>
            <Box  component="form" noValidate onSubmit={submitHandler}
      style={{
        
          
          width: '40%',
          margin: 'auto',
          textAlign: 'center'
        
      }}
    >
      <Paper style={{padding:'20px'}} elevation={3} >
        {error && <p style={{color: 'red' ,fontSize: '0.75rem'}}>{error}</p>}
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField id="principal" 
        name="principal"
        value={sip.principal}
        InputProps={{
            endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
          }}
        required
        error={error}
        helperText={error && error}
        label="Monthly Investment" variant="standard" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
        <TextField id="rate" 
        name="rate"
        value={sip.rate}
        InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        required
        label="Expected return rate(p.a)" variant="standard" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
        <TextField id="time" 
        name='time'
        value={sip.time}
        InputProps={{
            endAdornment: <InputAdornment position="end">Yr</InputAdornment>,
          }}
        required
        label="Time Period" variant="standard" onChange={handleInputChange}/>
        </Grid>
        
        <Grid item xs={12}>
          <Button  type="submit" variant="contained" >Calculate SIP</Button>
        </Grid>
        {data.invested_amount && <Grid item xs={12} md={12}>
           <DoughnutChart  sip={data}/>
        </Grid>}
      </Grid>
          
        
      </Paper>
    </Box>
    
            </div>
       
        </div>
        

    )
}

export default Home