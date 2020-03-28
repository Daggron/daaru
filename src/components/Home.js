import React from 'react';
import FetchBeers from '../utils/FetchBeers';

const Home = () =>{
    const {loading , beers} = FetchBeers({page:1});

    if(loading){
        return <p>Loading...</p>
    }
    if(beers){
        return(
        <div className="beer-container">
            {beers.map(eachBeer=>{
                return(
                   <div className="beers" key={eachBeer.id}>
                       <div className="beer-image">
                            <img src={eachBeer.image_url} alt={eachBeer.name} height={100} />
                       </div>
                       <h4>
                           {eachBeer.name}
                       </h4>
                       <span>
                           {eachBeer.tagline}
                       </span>
                   </div>
                )
            })}
        </div>
        )
    }
}

export default Home;