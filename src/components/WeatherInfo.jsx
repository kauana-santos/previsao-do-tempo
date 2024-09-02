import './WeatherInfo.css'
import { FaLocationDot } from "react-icons/fa6";


function WeatherInfo({weather}){

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
     
    return (
        <div className='weather-container'>
            <h2>  {weather.name}<FaLocationDot/></h2>

            <div className='weather-info'>
                <img src={iconUrl} alt=""/>
                <p className='temp'>{Math.round(weather.main.temp)} °C</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>

            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
            
        </div>

    )
}

export default WeatherInfo
