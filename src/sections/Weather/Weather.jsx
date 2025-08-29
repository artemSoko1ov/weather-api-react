import './Weather.scss'

const Weather = (props) => {
  const {
    data,
  } = props

  const temperature = data ? Math.round(data?.main?.temp) : '--'
  const description = data ? data?.weather[0]?.main : 'no-result'
  const icon = `/icons/${description.toLowerCase()}-icon.svg`

  return (
    <div className="weather">
      <div className="weather__icon">
        <img
          src={icon}
          width={150}
          height={150}
          alt={description}
        />
      </div>
      <span className="weather__temperature">
        {temperature}
        <sup className="weather__temperature-degrees">&deg;C</sup>
      </span>
      <span className="weather__description">{description}</span>
    </div>
  )
}

export default Weather