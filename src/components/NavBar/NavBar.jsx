// npm modules
import { Link } from "react-router-dom"

// assets
import shipLogo from '../../assets/icons8-star-wars-millenium-falcon-96.png'

const NavBar = () => {
  return (
    <header>
      <Link to='/starships'><img className="logo" src={shipLogo} alt="a millenium falcon" /></Link>
      <nav>
        <Link to='/starships'>Starships</Link>
      </nav>
    </header>
  )
}

export default NavBar