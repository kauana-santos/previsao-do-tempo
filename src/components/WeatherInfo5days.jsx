import './WeatherInfo5days.css'

const WeatherInfo5days = ({ weather5days }) => {
    

    let dailyForecast = {}

    for (let forecast of weather5days.list){
        const date = new Date(forecast.dt *1000).toLocaleDateString()
        console.log(date)

        if(!dailyForecast[date]){
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1,6)

    function convertDate (date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'short', day:'2-digit'})

        return newDate
    }

    const iconUrl5 = ``;

    
    return (
        <div className='weather-container'>
            <h3>Próximos dias</h3>
            <div className='weather-list'>
                {nextFiveDays.map(forecast=> (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt=""/>
                        <p className='forecast-description'>{forecast.weather[0].description}</p>
                        <p> máx {Math.round(forecast.main.temp_max)}ºC</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInfo5days