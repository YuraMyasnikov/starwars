import React, {Component} from "react";
import './random-planet.css'
import StarWarsService from "../../services/swapi";

class RandomPlanet extends Component{

    state = {
        planet:{}
    }
    onLoadPlanet = (planet)=>{
        this.setState({planet})
    }
    updatePlanete = ()=>{
        const id = (Math.floor(Math.random()*20+1))
        const sw = new StarWarsService()
        sw.getPlanet(id).then( this.onLoadPlanet )
    }

    constructor() {
        super();
        this.updatePlanete()
    }

    render() {
        const { planet:
            {
                name,
                population,
                diameter,
                orbitalPeriod,
                id
            }
        } = this.state

        return(
            <div className="random-planet col-4">
                <div className="img-box">
                    <img className="img-planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                </div>

                <div className="info-box col-8">
                    <h1>{name}</h1>
                    <p>популяция - {population}</p>
                    <p>диаметр - {diameter} км<sup>2</sup></p>
                    <p>переод орбиты - {orbitalPeriod} км</p>
                </div>

            </div>
        )

    }

}

export default RandomPlanet