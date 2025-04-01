import React, { useState, useEffect } from 'react';
import "../assets/css/index.css"

interface WeatherData {
  temperature: number;
  description: string;
 }

 //  https://api.openweathermap.org/data/2.5/weather?lat=33.8358492&lon=-118.3406288&appid=b2274d3b7bc664da5dd7077aa91ceb6b&units=imperial
const fetchWeatherData = async (): Promise<WeatherData> => {
  const response =  await fetch('');
  const data = await response.json();
  console.log("Weather has been called")
  return {
    temperature: Math.round(data.main.temp), 
    description: data.weather[0].description,
  };
};

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);


  console.log(lastFetchTime)
  const updateWeatherData = async () => {
    const data = await fetchWeatherData();
    setWeatherData(data);
    setLastFetchTime(Date.now());
    console.log("Weather had refreshed ")
  };

  useEffect(() => {
    // Initial fetch
    updateWeatherData();

    // Set up the interval to update every hour (3600000 ms)
    const interval = setInterval(() => {
      updateWeatherData();
     
    }, 3600000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <p>{weatherData.temperature}°</p>
      
        </div>
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default WeatherComponent;