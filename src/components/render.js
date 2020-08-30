const renderTemp = (data, unit, elementTag) => {
    let tempDisplay = document.querySelector('.temp-display');

    if (!tempDisplay) {
        tempDisplay = document.createElement(elementTag);
        tempDisplay.setAttribute('class', 'temp-display');
    }

    if (unit === 'celsius') {
        tempDisplay.innerHTML = `${data}&#8451`;
    } else {
        tempDisplay.innerHTML = `${data}&#8457`;
    }

    return tempDisplay;
};

const renderCurrent = (data, unit) => {
    const {
        location,
        temp, weather,
        icon,
    } = data;
    
    const locationDisplay = document.createElement('h2');
    locationDisplay.textContent = location;

    const tempDisplay = document.createElement('h3');
    if (unit === 'celsius') {
        tempDisplay.innerHTML = `${temp.degC}&#8451`;
    } else {
        tempDisplay.innerHTML = `${temp.degF}&#8457`;
    }

    const weatherDisplay = document.createElement('h3');
    weatherDisplay.textContent = weather;

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const dayDisplay = document.createElement('h3');
    dayDisplay.textContent = 'Today';

    const currentDisplay = document.querySelector('#current-display');
    currentDisplay.append(
        locationDisplay,
        dayDisplay,
        weatherIcon,
        weatherDisplay,
        tempDisplay,
    );
};

const renderForecast = (data, unit) => {
    data.forEach((item) => {
        const {
            date,
            temp,
            weather,
            icon,
        } = item;

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
        
        const dayDisplay = document.createElement('h4');
        dayDisplay.textContent = day;

        const tempDisplay = document.createElement('h4');
        if (unit === 'celsius') {
            tempDisplay.innerHTML = `${temp.degC}&#8451`;
        } else {
            tempDisplay.innerHTML = `${temp.degF}&#8457`;
        }

        const weatherDisplay = document.createElement('h4');
        weatherDisplay.textContent = weather;

        const weatherIcon = document.createElement('img');
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const dayContainer = document.createElement('div');
        dayContainer.append(
            dayDisplay,
            weatherIcon,
            weatherDisplay,
            tempDisplay,
        );

        const forecastDisplay = document.querySelector('#forecast-display');
        forecastDisplay.appendChild(dayContainer);
    });
};

export { renderCurrent, renderForecast };
