import getInput from './getInput';
import fetchData from './fetchData';
import { processCurrentData, processForecastData } from './processData';

let locationInput;

const apiInfo = {
    apiKey: 'ac8b5267855b6a12f7ad7ef83847bfde',
    get currentUrl() {
        return `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${this.apiKey}`;
    },
    get forecastUrl() {
        return `https://api.openweathermap.org/data/2.5/forecast?q=${locationInput}&appid=${this.apiKey}`;
    },
};

const weather = {
    displayUnit: 'celsius',
    data: [],
};

const getWeatherData = () => weather;

const updateWeatherData = async () => {
    try {
        locationInput = await getInput('#search-input') || 'Arctic';

        let [currentWeather, forecastWeather] = await Promise.all(
            [
                fetchData(apiInfo.currentUrl),
                fetchData(apiInfo.forecastUrl),
            ],
        );

        currentWeather = processCurrentData(currentWeather);
        forecastWeather = processForecastData(forecastWeather);

        const combinedWeather = [];
        combinedWeather.push(currentWeather);
        forecastWeather.forEach((item) => {
            combinedWeather.push(item);
        });
        
        weather.data = combinedWeather;
        
        return weather;
    } catch (err) {
        return err;
    }
};

const changeTempUnit = () => {
    if (weather.displayUnit === 'celsius') {
        weather.displayUnit = 'fahrenheit';
    } else {
        weather.displayUnit = 'celsius';
    }

    return weather.displayUnit;
};

export { updateWeatherData, getWeatherData, changeTempUnit };
