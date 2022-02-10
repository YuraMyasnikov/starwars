import React, {Component} from "react";
import './person.css'

import StarWarsService from "../../services/swapi";

class Person extends Component{

    state = {
        name:null,
        male:null,
        height:null,
        eyeColor:null,
        birthYear:null,
        id:null
    }

    updatePerson = ()=>{
        const starwars = new StarWarsService()
        const id = 1
        starwars.getPeople(id).then( (person)=>{
            this.setState({
                name: person.name,
                height: person.height,
                eyeColor:person.eyeColor,
                birthYear:person.birthYear,
                id:id
            })
        } )
    }

    constructor() {
        super();
        this.updatePerson()
    }

    render() {
        const {name, male, height, eyeColor, birthYear, id} = this.state
        return(
            <div>
                Имя = {name}
                -
                пол - {male}
                -
                высота - {height}
                -
                цвет глаз - {eyeColor}
                -
                возрост - {birthYear}
                -
                {id}

                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </div>
        )

    }

}
export default Person