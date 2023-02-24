import '../App.css'
import { useState } from 'react'
import { useParams } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';



function BeerDetails({beers}) {
 
    const { beerId } = useParams();
    const beerDetails = beers.filter((beer) => beer._id === beerId)[0];
console.log(beerDetails)
  return (


<>
          <div className="container" style={{display:'inline-block'}}>
            <img src={beerDetails.image_url} alt={beerDetails.name} style={{ maxHeight: '150px' }} />
          </div>
          <div>
            <h4>{beerDetails.name}</h4>
            <p>{beerDetails.tagline}</p>
            <span>{beerDetails.contributed_by}</span>

          </div>
        </>


  )
}

export default BeerDetails