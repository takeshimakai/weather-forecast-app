const tempConversion = (kelvin) => {
    const degC = Math.round(kelvin - 273.15);
    const degF = Math.round((kelvin * 9) / 5 - 459.67);

    return {
        degC,
        degF,
    };
};

const processCurrentData = (json) => {
    const { name: location } = json;
    const { temp } = json.main;
    const { main: weather, icon } = json.weather[0];
    const day = 'Today';

    return {
        day,
        location,
        temp: tempConversion(temp),
        weather,
        icon,
    };
};

const processForecastData = (json) => {
    const filteredJson = json.list.filter((item) => item['dt_txt'].includes('12:00:00'));
    
    const filteredData = [];
    filteredJson.forEach((data) => {
        const { dt_txt: date } = data;
        const { temp } = data.main;
        const { main: weather, icon } = data.weather[0];

        const forecastDay = new Date(date).getDay();
        let day;
        switch (forecastDay) {
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
            default:
        }

        filteredData.push({
            day,
            temp: tempConversion(temp),
            weather,
            icon,
        });
    });

    return filteredData;
};

export { processCurrentData, processForecastData };
