// npm modules
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

// services
import { getStarship } from "../../services/sw-api"

// css
import './ShipDetails.css'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        const starshipData = await getStarship(starshipId)
        setStarshipDetails(starshipData)
      } catch (error) {
        console.error('Error fetching starship details:', error)
      }
    }
    fetchStarshipDetails()
  }, [starshipId])

// loading message -- but can't get API to show the details
if (!starshipDetails) 
  return <h1>Loading starship details...</h1>

  return (
    <main className="starship-details">
      <h1>Starship Page</h1>
      <h2>{starshipDetails.name}</h2>
      <h3>Model: {starshipDetails.model}</h3>
      <div className="link-container">
        <Link to={'/starships'}>Back to Starships</Link>
      </div>
    </main>
  )
}

export default StarshipDetails
