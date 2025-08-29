import './HourlyWeatherItem.scss'
import CloudsIcon from '../../assets/icons/clouds-icon.svg?react'

const HourlyWeatherItem = () => {

  return (
    <li className='hourly-weather-item'>
      <p className="hourly-weather-item__time">00:00</p>
      <CloudsIcon
        width={40}
        height={40}
      />
      <p className="hourly-weather-item__temperature">28<sup className="hourly-weather-item__temperature-degrees">&deg;C</sup>
      </p>
    </li>
  )
}

export default HourlyWeatherItem