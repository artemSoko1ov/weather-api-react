import './Search.scss'
import SearchIcon from '../../assets/icons/search-icon.svg?react'
import LocationsIcon from '../../assets/icons/locations-icon.svg?react'

const Search = () => {
  return (
    <form
      className="search"
      role="search"
    >
      <div className="search__container">
        <SearchIcon style={{color: 'white'}} />
        <input
          className="search__input"
          type="text"
          placeholder="Moscow"
          aria-label="Введите город"
        />
      </div>
      <button
        className="search__button"
        type="button"
        aria-label="Использовать геолокацию"
      >
        <LocationsIcon style={{color: 'white'}} />
      </button>
    </form>
  )
}

export default Search