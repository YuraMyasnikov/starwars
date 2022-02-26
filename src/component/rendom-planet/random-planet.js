import React, {Component} from "react";
import './random-planet.css'
import StarWarsService from "../../services/swapi";
import Loader from "../loader";

class RandomPlanet extends Component{

    state = {
        planet:{},
        loading:true
    }
    onLoadPlanet = (planet)=>{
      return   this.setState({
        planet,
        loading:false
      })
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
        const { planet,
            loading
        } = this.state
        console.log(loading)

        const spiner = loading ? <Loader /> : null
        const content = !loading ? <PlanetView planet={planet} /> : null

        return(
            <div className="random-planet">
                {spiner}
                {content}
            </div>
        )

    }

}

const PlanetView = ({planet}) =>{
    const {
            name,
            population,
            diameter,
            orbitalPeriod,
            id
    } = planet
    return (
        <React.Fragment>
            <div className="planet">
                <img className="" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>
            <div className="info">
                <h1 className='name'>{name}</h1>
                <ul>
                    <li>популяция - {population}</li>
                    <li>диаметр - {diameter} км<sup>2</sup></li>
                    <li>переод орбиты - {orbitalPeriod} км</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default RandomPlanet