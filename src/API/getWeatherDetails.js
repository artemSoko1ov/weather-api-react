async function getWeatherDetails(city){
  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error("Сity not found")
    return await response.json()
  } catch (e) {
    console.error(e)
    throw e
  }

}

export default getWeatherDetails