import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import Alert from '@material-ui/lab/Alert';

function Pattern() {

    const [input, setInput] = useState({
        myGauge: '',
        patternGauge: '',
        patternsts: '',
      })

      const [result, setResult] = useState('');

      const [alert, setAlert] = useState(false);
    
      const inputChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
      }

      const buttonClick = () => {
        setResult('')
        if(input.myGauge === '' || input.patternGauge === '' || input.patternsts=== ''){
          setAlert(true)
        } else {
          setAlert(false);
          const sts = input.myGauge * input.patternsts / input.patternGauge;
          setResult(`떠야할 코(단)수는 ${sts}코(단) 입니다.`)
        }
      }

    return (
        <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <TextField
            label="내 게이지"
            fullWidth
            type='number'
            InputProps={{
                endAdornment: <InputAdornment position="end">코(단)</InputAdornment>,
              }}
            name="myGauge"
            value={input.myGauge}
            onChange={inputChange}
          />
        </Grid>
        <Grid item xs={12}>
            
                <TextField
                label="도안 게이지"
                fullWidth
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end">코(단)</InputAdornment>,
                  }}
                name="patternGauge"
                value={input.patternGauge}
                onChange={inputChange}
              />
            
          
        </Grid>
        <Grid item xs={12}>
            
                <TextField
                label="도안 콧수"
                fullWidth
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end">코(단)</InputAdornment>,
                  }}
                name="patternsts"
                value={input.patternsts}
                onChange={inputChange}
              />
            
          
        </Grid>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color='primary' 
            fullWidth 
            onClick={buttonClick}
          >
              변환하기
          </Button>
        </Grid>
        <Grid item xs={12}>
            {alert &&
            <Alert severity="error">모두 입력해 주세요!</Alert>
            }
            <Typography variant="h6" gutterBottom align='center'>
                <b>{result}</b>
            </Typography>
        </Grid>
        
      </Grid>
    )
}

export default Pattern
