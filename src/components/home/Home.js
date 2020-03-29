import React from 'react';
import FetchBeers from '../../utils/FetchBeers';
import style from './home.module.css'
import { Link } from 'react-router-dom';

const Home = () =>{
    const {loading , beers} = FetchBeers({page:1});

    if(loading){
        return <p>Loading...</p>
    }

    if(beers){
        return(
        <div className={style.beercontainer}>
            {beers.map(eachBeer=>{
                return(
                    <Link className={style.beers} to={{pathname:'/details',state:{beer:eachBeer}}} key={eachBeer.id} >
                        <div className="beer-image">
                                <img src={eachBeer.image_url} alt={eachBeer.name} height={100} />
                        </div>
                        <div className="beer-text">
                                <h4>
                                    {eachBeer.name}
                                </h4>
                                <span>
                                    {eachBeer.tagline}
                                </span>
                        </div>
                   </Link>
                )
            })}
        </div>
        )
    }
}

export default Home;