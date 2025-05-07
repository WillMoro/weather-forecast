import { useState, useRef } from 'react'

//Importação do axios após a instalação
import axios from "axios"
import './App.css'
import WeatherInformations from './components/WeatherInformations/weatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState({})
  const [weather5days, setWeather5Days] = useState()

  const inputRef = useRef()

  //Criação de uma função assincrona
  async function searchCity() { 
    //Mapeamento do que está dentro do input
    const city = inputRef.current.value

    //Mapeamento da chave da API
    const key = "4623038b94c275e68ef53b671af100a8"

    //Adição do input e da key com template literals 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    // criação da variavel "data" para armazenar os dados que vão chegar, utilizamos o axios.get passando o endereço url
    // Utilizando o await na requisição
    const apiDataWeather = await axios.get(url)

    //Criação da chamada para pegar os dados de previsão do tempo dos próximos 5 dias
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiDataWeather.data)


  }



//Utilização do InputRef para usar como referencia o input e pegar o nome da cidade
//Botão chama a função searchCity


  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref= {inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}
      {weather5days && <WeatherInformations5Days weather5Days={weather5days}/>}
      
    </div>
  )
}

export default App
