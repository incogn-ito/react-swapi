import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'

// pages
import Ships from './pages/Ships/Ships'
// import ShipDetails from './pages/ShipDetails/ShipDetails'

// css
import './App.css'

function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/starships' element={<Ships />} />
        </Routes>
      </>
    )
  }
export default App
