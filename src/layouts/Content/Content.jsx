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

  useEffect(() => {
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

    const savedCity = localStorage.getItem("lastCity") || "Moscow"
    setCity(savedCity)
    handleSearch(savedCity)
  }, [])

  const handleSearch = async (cityName) => {
    try {
      const data = await getWeatherDetails(cityName)
      console.log(data)
      setWeatherData(data)
      setCity(cityName)
      localStorage.setItem("lastCity", cityName)
    } catch (e) {
      console.log(e)
    }
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
      <HourlyWeatherList />
    </section>
  )
}

export default Content