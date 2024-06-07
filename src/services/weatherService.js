import axios from 'axios';

const API_KEY = '4846593b0ab295c0235b7de7ece7ad26'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    console.log('Fetched data:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
    return null;
  }
};
