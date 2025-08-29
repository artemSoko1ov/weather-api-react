import './HourlyWeatherItem.scss'

const HourlyWeatherItem = (props) => {
  const {
    hour,
  } = props
  const icon = `/icons/${hour.description.toLowerCase()}-icon.svg`
  return (
    <li className='hourly-weather-item'>
      <p className="hourly-weather-item__time">{hour.time}</p>
      <img
        src={icon}
        width={40}
        height={40}
        alt=""
      />
      <p className="hourly-weather-item__temperature">{hour.temp}<sup className="hourly-weather-item__temperature-degrees">&deg;C</sup>
      </p>
    </li>
  )
}

export default HourlyWeatherItem