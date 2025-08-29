import './Weather.scss'
import СloudsIcon from '../../assets/icons/clouds-icon.svg?react'

const Weather = () => {

  return (
    <div className="weather">
      <div
        className="weather__icon"
      >
        <СloudsIcon
          width={150}
          height={150}
        />
      </div>
      <span className="weather__temperature">30<sup className="weather__temperature-degrees">&deg;C</sup></span>
      <span className="weather__description">Mist</span>
    </div>
  )
}

export default Weather