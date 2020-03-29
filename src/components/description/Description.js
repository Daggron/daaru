import React, { Component } from 'react'
import style from './Description.module.css';

export default class Description extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             beer : this.props.beer
        }
    }
    
    render() {
        const { beer } = this.props.location.state;
        console.log(this.props.location.state.beer);
        return (
            <div className={style.container}>
                <div className={style.header}>
                    <div>
                        <img src={beer.image_url} height={'200px'} alt={beer.name}/>
                    </div>
                    <div className={style.mr3}>
                        <h1>
                            {beer.name}
                        </h1>
                        <span>
                            {beer.tagline}
                        </span>
                    </div>
                </div>
                <div className={style.description}>
                    <p>
                        {beer.description}
                    </p>
                </div>
                <div>
                    <div className={style.meta}>
                        <h3>
                            Alcohol:&nbsp; <span>{beer.abv}%</span>
                        </h3>
                        <h3>
                            First Brewed:&nbsp; <span>{beer.first_brewed}</span>
                        </h3>
                    </div>
                    <h3>
                        Pairings (Chakna) <span role="img" aria-label="food-pairing" >🥫 </span>
                    </h3>
                    <ol>
                        {
                            beer.food_pairing.map(eachpair=>{
                                return(
                                    <li key={eachpair}>
                                        <span>
                                            {eachpair}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
