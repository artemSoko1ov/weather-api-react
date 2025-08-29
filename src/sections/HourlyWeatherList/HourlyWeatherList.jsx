import './HourlyWeatherList.scss'
import HourlyWeatherItem from "../../components/HourlyWeatherItem";

const HourlyWeatherList = (props) => {
  const {
    data,
  } = props
  return (
    <ul className='hourly-weather-list'>
      {data.map((hour, index) => (
        <HourlyWeatherItem hour={hour} key={index}/>
      ))}
    </ul>
  )
}

export default HourlyWeatherList