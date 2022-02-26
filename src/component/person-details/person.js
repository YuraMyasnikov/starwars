import React, {Component} from "react";
import './person.css'

import StarWarsService from "../../services/swapi";

class Person extends Component{

    state = {
        name:null,
        gender:null,
        height:null,
        eyeColor:null,
        birthYear:null,
        id:null
    }

    updatePerson = ()=>{
        const starwars = new StarWarsService()
        const id = 5
        starwars.getPeople(id).then( (person)=>{
            this.setState({
                name: person.name,
                gender: person.gender,
                height: person.height,
                eyeColor:person.eye_color,
                birthYear:person.birth_year,
                id:id
            })
        } )
    }

    constructor() {
        super();
        this.updatePerson()
    }

    render() {
        const {name, gender, height, eyeColor, birthYear, id} = this.state
        return(
            <div className="personDetails">
                <div className="row">
                    <div className="d-flex">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
                        <h3 className="d-flex w-100 align-items-center justify-content-center">{name}</h3>
                    </div>
                </div>
                <div className="row">
                <ul>
                    <li>
                        пол - {gender}
                    </li>
                    <li>
                        высота - {height}
                    </li>
                    <li>
                        цвет глаз - {eyeColor}
                    </li>
                    <li>
                        возрост - {birthYear}
                    </li>
                </ul>
                </div>
            </div>
        )

    }

}
export default Person