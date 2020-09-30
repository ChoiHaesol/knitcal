import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

function LengthToSts() {
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
            // value={input.myGauge}
            // onChange={inputChange}
          />
        </Grid>
        <Grid item xs={12}>
            
                <TextField
                label="뜨고싶은 길이"
                fullWidth
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                  }}
                name="length"
                // value={input.length}
                // onChange={inputChange}
              />
            
          
        </Grid>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color='primary' 
            fullWidth 
            // onClick={buttonClick}
          >
              변환하기
          </Button>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6" gutterBottom align='center'>
                떠야할 콧수는 <b>1000코</b> 입니다.
            </Typography>
        </Grid>
        
      </Grid>
    )
}

export default LengthToSts
