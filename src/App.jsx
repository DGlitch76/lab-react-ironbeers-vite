import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './components/NewBeer'
import NavBar from './components/NavBar'
import BeerDetails from './pages/BeerDetails'

import 'bootstrap/dist/css/bootstrap.min.css';





import { Routes, Route } from 'react-router-dom'
function App() {

const [allBeers, setBeers] = useState();


  return (
    <div className="App">
<NavBar fixed="bottom" />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/beers" element={<Beers  allBeers={allBeers} setBeers={setBeers} />} />
<Route path="/random-beer" element={<RandomBeer  />} />
<Route path="/submit-new-beer" element={<NewBeer />} />
<Route path="/beer-details/:beerId" element={<BeerDetails beers={allBeers}/>} />
</Routes>

    </div>
  )
}

export default App
