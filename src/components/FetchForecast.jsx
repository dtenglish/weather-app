import dayjs from 'dayjs';
import useFetch from '../hooks/useFetch';
import ConvertTimestamp from './ConvertTimestamp';

// Required for Day.js advanced formatting
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

// Use useFetch hook to pull forecast data from OpenWeather API
const FetchForecast = query => {
  const forecast = useFetch('forecast', query);

  // Map API weather data to more usable format
  const mapForecastData = data => {
    const convertedTimestamp = ConvertTimestamp(data.dt);

    const mapped = {
      condition: data.weather[0].id,
      description: data.weather[0].description,
      temperature: Math.round(data.main.temp),
      timestamp: data.dt,
      formattedDay: dayjs(convertedTimestamp).format('dddd'),
      formattedDate: dayjs(convertedTimestamp).format('MMM Do'),
    }

    return mapped;
  }

  if (forecast.data) {
    return (
      // Filter results to one per day, map each remaining result
      forecast.data.list
        .filter(f => f.dt_txt.match(/09:00:00/))
        .map(mapForecastData)
    );
  }
}

export default FetchForecast;
