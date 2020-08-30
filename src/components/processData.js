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

    return {
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
        let { temp } = data.main;
        const { main: weather, icon } = data.weather[0];

        temp = tempConversion(temp);

        filteredData.push({
            date,
            temp,
            weather,
            icon,
        });
    });

    return filteredData;
};

export { processCurrentData, processForecastData };
