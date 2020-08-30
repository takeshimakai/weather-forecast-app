import './style.css';
import { renderCurrent, renderForecast } from './components/render';
import { updateWeatherData, getWeatherData, changeTempUnit } from './components/weatherData';

const initLoad = async () => {
    try {
        const weatherData = await updateWeatherData();
        renderCurrent(weatherData.current, weatherData.displayUnit);
        renderForecast(weatherData.forecast, weatherData.displayUnit);
    } catch (err) {
        console.log(err);
    }
};

initLoad();

const handleSearch = async (e) => {
    e.preventDefault();

    try {
        const weatherData = await updateWeatherData();

        const currentDisplay = document.querySelector('#current-display');
        const forecastDisplay = document.querySelector('#forecast-display');
        currentDisplay.innerHTML = '';
        forecastDisplay.innerHTML = '';
        
        renderCurrent(weatherData.current, weatherData.displayUnit);
        renderForecast(weatherData.forecast, weatherData.displayUnit);
    } catch (err) {
        console.log(err);
    }
};

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', handleSearch);
