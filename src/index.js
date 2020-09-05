import './style.css';
import { renderWeather, changeTempDisplay, renderUnitBtn } from './components/render';
import { updateWeatherData, getWeatherData, changeTempUnit } from './components/weatherData';
import loadBackground from './components/background';
import handleError from './components/handleError';

const initLoad = async () => {
    try {
        const weatherData = await updateWeatherData();
        renderWeather(weatherData.data, weatherData.displayUnit);
        renderUnitBtn(weatherData.displayUnit);
        loadBackground(weatherData.data[0].location);
    } catch (err) {
        handleError(err);
    }
};

initLoad();

const handleSearch = async (e) => {
    e.preventDefault();

    try {
        const currentDisplay = document.querySelector('#current-display');
        const forecastDisplay = document.querySelector('#forecast-display');
        currentDisplay.innerHTML = '';
        forecastDisplay.innerHTML = '';

        const weatherData = await updateWeatherData();
        
        renderWeather(weatherData.data, weatherData.displayUnit);
        loadBackground(weatherData.data[0].location);
    } catch (err) {
        handleError(err);
    }
};

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', handleSearch);

const handleUnitChange = (e) => {
    e.preventDefault();

    const weatherData = getWeatherData();
    weatherData.displayUnit = changeTempUnit();

    changeTempDisplay(weatherData.data, weatherData.displayUnit);
    renderUnitBtn(weatherData.displayUnit);
};

const unitBtn = document.querySelector('#unitBtn');
unitBtn.addEventListener('click', handleUnitChange);
