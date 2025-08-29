import './Search.scss'
import SearchIcon from '../../assets/icons/search-icon.svg?react'
import LocationsIcon from '../../assets/icons/locations-icon.svg?react'
import {useState} from "react";

const Search = (props) => {
  const {
    onSearch,
    placeholder,
  } = props
  const [searchValue, setSearchValue] = useState("")

  const handleCitySearch = (event) => {
    event.preventDefault()
    if (!searchValue.trim()) return
    onSearch(searchValue)
    setSearchValue("")
  }
  return (
    <form
      className="search"
      role="search"
      onSubmit={handleCitySearch}
    >
      <div className="search__container">
        <SearchIcon style={{color: 'white'}} />
        <input
          className="search__input"
          type="search"
          placeholder={placeholder}
          aria-label="Введите город"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
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