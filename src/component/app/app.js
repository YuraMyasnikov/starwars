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
        <div className="p-1 w-100 m-auto" >

            <div className="justify-content-center w-75 align-content-center m-auto">
                <Header/>
            </div>

            <div className="col-12 w-100">
                <RandomPlanet/>
            </div>

            <div className="col-12 justify-content-center d-flex flex-row">

                <div className="col-sm-12 col-md-6 d-flex">
                    <ItemList/>
                </div>

                <div className="col-sm-12 col-md-6 d-flex">
                    <Person/>
                    <Planet/>
                    <Starship/>
                </div>

            </div>

        </div>
    )

}

export default App