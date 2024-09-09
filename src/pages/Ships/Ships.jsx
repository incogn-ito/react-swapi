// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/sw-api"

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  if (!starships.length) return <h1>Loading starships...</h1>

  return (
    <main className="starships">
      <h1>Starships</h1>
      {starships.map(starship =>
        <div className="link-container" key={starship._id}>
          <Link to={`/starships/${starship._id}`}>
            {starship.name}
          </Link>
        </div>
      )}
    </main>
  )
}

export default Starships