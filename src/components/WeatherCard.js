import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function WeatherCard({ data }) {
  return (
    <Card sx={{ minWidth: 275, mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.name}, {data.sys.country}
        </Typography>
        <Typography variant="body2" component="p">
          Temperature: {data.main.temp} °C
        </Typography>
        <Typography variant="body2" component="p">
          Wind Speed: {data.wind.speed} m/s
        </Typography>
        <Typography variant="body2" component="p">
          Cloudiness: {data.clouds.all} %
        </Typography>
        <Typography variant="body2" component="p">
          Humidity: {data.main.humidity} %
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
