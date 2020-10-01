import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import LengthAndSts from "./LengthAndSts";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3, 0),
    minWidth: 120,
    left: '50%',
    marginLeft: '-60px'
  },
}));

const getPage = (value) => {
    switch (value) {
        case 0:            
            return <LengthAndSts />        
        // case 1:            
        //     return <PaymentForm />    
        default:
            return <LengthAndSts />
    }
}


function Calculator() {
    const classes = useStyles(); 

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
              게이지 계산기
            </Typography>
                      <FormControl className={classes.formControl}>
                      {/* <InputLabel id="select-label">계산기 종류</InputLabel> */}
                          <Select
                          labelId="select-label"
                          value={value}
                          onChange={handleChange}
                          autoWidth
                          >
                          <MenuItem value={0}>코/cm 변환</MenuItem>
                          <MenuItem value={1}>도안 비교</MenuItem>
                          {/* <MenuItem value={2}>Thirty</MenuItem> */}
                          </Select>
                      </FormControl>
                      <br />
                {getPage(value)}
      </React.Fragment>
    );
  }

export default Calculator
