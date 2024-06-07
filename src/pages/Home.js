import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../services/weatherService';

const defaultCities = ['New York', 'London', 'Tokyo', 'Paris'];

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [hoveredCity, setHoveredCity] = useState('');

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    console.log('Weather data:', data); // Log the weather data
    setWeatherData(data);
  };

  const handleMouseEnter = (city) => {
    setHoveredCity(city);
  };

  const handleMouseLeave = () => {
    setHoveredCity('');
  };

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Weather App
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        {defaultCities.map((city) => (
          <Button
            key={city}
            onClick={() => handleSearch(city)}
            onMouseEnter={() => handleMouseEnter(city)}
            onMouseLeave={handleMouseLeave}
            variant="outlined"
            sx={{ mx: 1 }}
          >
            {city}
          </Button>
        ))}
      </Box>
      {hoveredCity && (
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          Hovered City: {hoveredCity}
        </Typography>
      )}
      {weatherData && <WeatherCard data={weatherData} />}
    </Container>
  );
}

export default Home;
