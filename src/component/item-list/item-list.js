import React, {Component} from "react";
import './item-list.css'
import StarWarsService from "../../services/swapi";

class ItemList extends Component{

    state = {
        name: null
    }

    constructor() {
        super();
        this.allPersons()
    }

    allPersons = ()=>{
        const starwars = new StarWarsService()
        starwars.getAllPeople()
            .then( (persons)=>{
               const arrNames = persons.map( (p)=>{
                   return p.name
               })
               /*console.log(arrNames)*/
               this.setState({
                   name: arrNames
               })
            } )

    }


    render() {
        const {name} = this.state

        return (
            <ul className="itemList">
                <li className="item">
                    <a href="#">
                        {name}
                    </a>
                </li>
            </ul>
        )
    }

}

export default ItemList