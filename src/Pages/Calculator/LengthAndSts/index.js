import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import LengthToSts from './LengthToSts';
import StsToLength from './StsToLength';

function LengthAndSts() {
    const [type, setType] = useState('lengthTosts');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const convertorType = (type) => {
        switch (type) {
            case "lengthTosts":
                
                return <LengthToSts />

            case "stsToLength":
                return <StsToLength />
        
            default:
                return <LengthToSts />;
        }
    }


  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <RadioGroup row value={type} onChange={handleChange}>
            <FormControlLabel value="lengthTosts" control={<Radio color="primary" />} label="cm 👉 코" />
            <FormControlLabel value="stsToLength" control={<Radio color="primary" />} label="코 👉 cm" />
        </RadioGroup>
        </FormControl>
        {convertorType(type)}
        
    </React.Fragment>
  );
}

export default LengthAndSts
