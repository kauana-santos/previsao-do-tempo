import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

import WeatherInfo from './components/WeatherInfo'
import WeatherInfo5days from './components/WeatherInfo5days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()

  const inputRef = useRef()

  async function searchCity(){
  
    const city = inputRef.current.value
    const key = "89b61e9718ada9283edd47f411f6eb4a"
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const dadosPrev = await axios.get(url)
    const dados5days = await axios.get(url5days)

    setWeather(dadosPrev.data)
    setWeather5days(dados5days.data)
    

  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>

      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}><FaMagnifyingGlass/></button>

      {weather && <WeatherInfo weather={weather}/>}
      {weather5days && <WeatherInfo5days weather5days={weather5days}/>}
    </div>
  )
}

export default App
