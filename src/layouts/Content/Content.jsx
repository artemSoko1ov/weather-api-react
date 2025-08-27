import './Content.scss'
import Search from "../../sections/Search";

const Content = (props) => {
  const {
    className,
  } = props
  return (
    <section className="content">
      <Search />
    </section>
  )
}

export default Content