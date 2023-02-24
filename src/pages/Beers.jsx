import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'


// Ref doc https://blog.logrocket.com/modern-api-data-fetching-methods-react/

function Beers({ allBeers, setBeers }) {


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //FETCH DATA FROM API
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)

      .then((response) => response.json())

      .then((allBeers) => setBeers(allBeers))

      .catch((err) => {
        setError(err.message);
        setBeers(null);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);







  return (
    <div className="App container" style={{ display: 'flex', flexWrap: 'wrap' }}>

      {allBeers && allBeers.map((beer) => (
        <>
          <div className="container" style={{ display: 'inline-block' }}>
            <Link to={`/beer-details/${beer._id} `}> <img src={beer.image_url} alt={beer.name} style={{ maxHeight: '150px' }} /></Link>
          </div>
          <div>
            <h4>{beer.name}</h4>
            <p>{beer.tagline}</p>
            <span>{beer.contributed_by}</span>
            <Link to={`/beer-details/${beer._id} `}>DETAILS </Link>
          </div>
        </>
      ))}





    </div>

  )
}

export default Beers