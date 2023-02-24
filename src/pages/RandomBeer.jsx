
import '../App.css'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


// Ref doc https://blog.logrocket.com/modern-api-data-fetching-methods-react/

function RandomBeer({ allBeers , setBeers}) {

  const { beerId } = useParams();
  const [randomBeer, setRandomBeer] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //FETCH DATA FROM API
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)

      .then((response) => response.json())

      .then((randomBeer) => setRandomBeer(randomBeer))
     
      .catch((err) => {
        setError(err.message);
        setRandomBeer(null);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);

  console.log(randomBeer)

  return (

    <div className="App container"  style={{display:'flex', flexWrap:'wrap'}}>

  
     
        {!loading && <>
          <div className="container" style={{display:'inline-block'}}>

            <img src={randomBeer.image_url} alt={randomBeer.name} style={{ maxHeight: '150px' }} />
          </div>
          <div>
            <h4>{randomBeer.name}</h4>
            <p>{randomBeer.tagline}</p>
            <span>{randomBeer.contributed_by}</span>
            
          </div></>
          }
    


    </div>

  )
}

export default RandomBeer