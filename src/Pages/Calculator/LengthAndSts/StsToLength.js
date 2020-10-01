import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

function StsToLength() {
  
  const [input, setInput] = useState({
    myGauge: '',
    sts: '',
  })

  const [result, setResult] = useState('');

  const [alert, setAlert] = useState(false);

  const inputChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  }

  const buttonClick = () => {
    setResult('')
    if(input.myGauge === '' || input.sts === ''){
      setAlert(true)
    } else {
      setAlert(false);
      const length = 10 * input.sts / input.myGauge
      setResult(`편물의 길이는 ${length}cm 입니다.`)
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
                label="뜨려는 콧수"
                fullWidth
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end">코(단)</InputAdornment>,
                  }}
                name="sts"
                value={input.sts}
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

export default StsToLength
