import './Search.scss'

const Search = (props) => {
  const {
    className,
  } = props
  return (
    <form
      className="search-bar"
      role="search"
    >

      <input
        type="text"
        placeholder="Moscow"
        aria-label="Введите город"
      />
      <button
        type="button"
        aria-label="Использовать геолокацию"
      >📍
      </button>
    </form>
  )
}

export default Search