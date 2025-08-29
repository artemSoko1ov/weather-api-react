import './Weather.scss'
import CloudsIcon from '../../assets/icons/clouds-icon.svg?react'

const Weather = (props) => {
  const {
    data,
  } = props

  return (
    <div className="weather">
      <div
        className="weather__icon"
      >
        <CloudsIcon
          width={150}
          height={150}
        />
      </div>
      <span className="weather__temperature">{data ? Math.round(data.main.temp) : '--'}<sup className="weather__temperature-degrees">&deg;C</sup></span>
      <span className="weather__description">{data ? data.weather[0].main : '--'}</span>
    </div>
  )
}

export default Weather