import React from 'react';
import ReactDOM from 'react-dom';


class StarWarsService {

    _baseUrl = 'https://swapi.dev/api/'

    async getResurse (url) {
        const response = await fetch(`${this._baseUrl}${url}`)
        const body = await response.json()

        if(!response.ok){
            throw new Error(`!!! ${response.url} - ${response.status}`)
        }

        return body
    }

    async getAllPeople (){
       const people = await this.getResurse('people/')
        return people.results
    }
    async getPeople (id){
        const people = await this.getResurse(`people/${id}`)
        return people
    }

    async getAllPlanets (){
        const people = await this.getResurse('planets/')
        return people.results
    }
    async getPlanet (id){
        const planets = await this.getResurse(`planets/${id}`)
        return planets
    }

    async getAllStarships (){
        const people = await this.getResurse('starships/')
        return people.results
    }
    async getStarship (id){
        const starships = await this.getResurse(`starships/${id}`)
        return starships
    }
}

    const people = new StarWarsService()
    people.getAllPeople()
        .then(people=>{
            console.log(people);
        })
    people.getPeople(3).then(people=>{
        console.log(`тип -  ${people.name}`)
    })

    const planets = new StarWarsService()
    planets.getAllPlanets().then(planets=>{
        console.log(planets)
    })
    planets.getPlanet(6).then(planet=>{
        console.log(`планета ${planet.name}`)
    })

    const starships = new StarWarsService()
    starships.getAllStarships().then(starships=>{
        console.log(starships)
    })
    starships.getStarship(1).then(starships=>{
        console.log(`корабль ${starships.name}`)
    })


