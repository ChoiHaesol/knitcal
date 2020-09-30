import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


function Main() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              뜨계산기🧵
            </Typography>
            <Typography variant="p" align="center" color="textSecondary" paragraph>
              게이지 계산하기 귀찮아서 만들어버린 웹페이지
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <Link to="/calculator" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" fullWidth>
                        게이지 계산기
                    </Button>
                  </Link>                  
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth disabled>
                    나의 스와치 저장소 (개발 예정)
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" color="primary" fullWidth>
                    홈 화면에 추가방법
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
      </main>
      
    </React.Fragment>
  );
}

export default Main
