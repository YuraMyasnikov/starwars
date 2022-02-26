import React from "react";
import './app.css'

import Header from "../headeer";
import RandomPlanet from "../rendom-planet";
import ItemList from "../item-list";

import Person from "../person-details";
import Planet from "../planet-details";
import Starship from "../starship-details";

const App = () => {

    return(
        <div className="App" >

            <div className="AppHeader">
                <Header/>
            </div>

            <div className="AppRandom">
                <RandomPlanet/>
            </div>

            <div className="d-flex">

                <div className="col-sm-12 col-md-5 d-flex">
                    <ItemList/>
                </div>

                <div className="col-sm-12 col-md-7 d-flex">
                    <Person/>
                    <Planet/>
                    <Starship/>
                </div>

            </div>

        </div>
    )

}

export default App