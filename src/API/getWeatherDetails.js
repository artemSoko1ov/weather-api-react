async function getWeatherDetails(city){
  const API_KEY = import.meta.env.VITE_API_KEY
  let API_URL
  if(typeof city === 'object'){
    API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&units=metric&lang=en`;
  }else{
    API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
  }
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