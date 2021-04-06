import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles((theme) => ({

}));

const ForecastHeader = () => {
  const classes = useStyles();

  return (
    <Grid container>
      {/* Today's Weather */}
      <Grid item container alignItems="center" xs={4}>
        <Grid item xs={6}>
          <WbSunnyIcon fontSize="large" />
          <Typography variant="h3" component="h2" display="inline">
            70*
          </Typography>
        </Grid>
        {/* Today's Weather Details */}
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            Precipitation: 0%
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Humidity: 0%
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Wind: 0%
          </Typography>
        </Grid>
      </Grid>
      {/* Center Gutter */}
      <Grid item xs={4} />
      {/* Location & Date Information */}
      <Grid item xs={4}>
        <Box textAlign="right">
          <Typography variant="h6">City Goes Here</Typography>
          <Typography variant="h6">State/Country</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Day and Time Goes Here</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Current Weather Description</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ForecastHeader;

// To do: Adjust heading levels for accessibility