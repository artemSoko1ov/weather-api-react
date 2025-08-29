import './Content.scss'
import Search from "../../sections/Search"
import classnames from "classnames"
import {useEffect, useState} from "react"
import Weather from "../../sections/Weather";
import HourlyWeatherList from "../../sections/HourlyWeatherList";
import getWeatherDetails from "../../API/getWeatherDetails.js"

const Content = () => {

  const [timeClass, setTimeClass] = useState('day')
  const [city, setCity] = useState("Moscow")
  const [weatherData, setWeatherData] = useState(null)
  const [hourlyData, setHourlyData] = useState([])

  useEffect(() => {
    updateTimeClass()
    const savedCity = localStorage.getItem("lastCity") || "Moscow"
    setCity(savedCity)
    handleSearch(savedCity)
  }, [])

  const updateTimeClass = () => {
    const hours = new Date().getHours()

    let partOfDay
    if (hours >= 5 && hours < 12) {
      partOfDay = 'morning';
    } else if (hours >= 12 && hours < 18) {
      partOfDay = 'day';
    } else if (hours >= 18 && hours < 23) {
      partOfDay = 'evening';
    } else {
      partOfDay = 'night';
    }
    setTimeClass(`content--${partOfDay}`)
  }

  const handleSearch = async (query) => {
    try {
      const data = await getWeatherDetails(query)
      setCity(data.name)
      setWeatherData(data)
      if (typeof query === 'object') {
        localStorage.setItem("lastCity", 'Moscow')
      } else {
        localStorage.setItem("lastCity", data.name)
      }
      generateHourlyData()
    } catch (e) {
      console.log(e)
    }
  }

  const generateHourlyData = () => {
    const now = new Date()
    const currentHour = now.getHours()
    const hours = Array.from({length: 24}, (_, i) => i)
    const orderedHours = [...hours.slice(currentHour), ...hours.slice(0, currentHour)]

    const mockHourly = orderedHours.map(hour => ({
      time: `${hour.toString().padStart(2, '0')}:00`,
      temp: Math.floor(Math.random() * 10) + 15,
      description: ['Clear', 'Clouds', 'Rain', 'Mist', 'Snow', 'Thunderstorm'][Math.floor(Math.random() * 3)]
    }))

    setHourlyData(mockHourly)
  }
  return (
    <section className={classnames("content", timeClass)}>
      <Search
        onSearch={handleSearch}
        placeholder={city}
      />
      <Weather
        data={weatherData}
      />
      <HourlyWeatherList data={hourlyData}/>
    </section>
  )
}

export default Content