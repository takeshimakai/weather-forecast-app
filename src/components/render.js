const renderTemp = (day, temp, unit, elementTag) => {
    const tempDisplay = document.createElement(elementTag);
    tempDisplay.setAttribute('id', day);
    tempDisplay.setAttribute('class', 'temp-display');
    
    if (unit === 'celsius') {
        tempDisplay.innerHTML = `${temp.degC}&#8451`;
    } else {
        tempDisplay.innerHTML = `${temp.degF}&#8457`;
    }

    return tempDisplay;
};

const changeTempDisplay = (data, unit) => {
    const tempDisplays = document.querySelectorAll('.temp-display');

    data.forEach((obj) => {
        tempDisplays.forEach((item) => {
            if (obj.day === item.id) {
                if (unit === 'celsius') {
                    item.innerHTML = `${obj.temp.degC}&#8451`;
                } else {
                    item.innerHTML = `${obj.temp.degF}&#8457`;
                }
            }
        });
    });
};

const renderWeather = (data, unit) => {
    data.forEach((item) => {
        if (item.day === 'Today') {
            const {
                day,
                location,
                temp,
                weather,
                icon,
            } = item;
            
            const locationDisplay = document.createElement('h2');
            locationDisplay.textContent = location;
        
            const tempDisplay = renderTemp(day, temp, unit, 'h3');
        
            const weatherDisplay = document.createElement('h3');
            weatherDisplay.textContent = weather;
        
            const weatherIcon = document.createElement('img');
            weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        
            const dayDisplay = document.createElement('h3');
            dayDisplay.textContent = day;
        
            const currentDisplay = document.querySelector('#current-display');
            currentDisplay.append(
                locationDisplay,
                dayDisplay,
                weatherIcon,
                weatherDisplay,
                tempDisplay,
            );
        } else {
            const {
                day,
                temp,
                weather,
                icon,
            } = item;
            
            const dayDisplay = document.createElement('h4');
            dayDisplay.textContent = day;
    
            const tempDisplay = renderTemp(day, temp, unit, 'h4');
    
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
        }
    });
};

const renderUnitBtn = (unit) => {
    const unitBtn = document.querySelector('#unitBtn');

    if (unit === 'celsius') {
        unitBtn.innerHTML = '&#8457';
    } else {
        unitBtn.innerHTML = '&#8451';
    }
};

export { renderWeather, changeTempDisplay, renderUnitBtn };
