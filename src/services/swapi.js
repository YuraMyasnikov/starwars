export default class StarWarsService {

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
        const people = await this.getResurse(`people/${id}/`)
        return people
    }
    async getAllStarships (){
        const people = await this.getResurse('starships/')
        return people.results
    }
    async getStarship (id){
        const starships = await this.getResurse(`starships/${id}/`)
        return starships
    }

    async getAllPlanets (){
        const planets = await this.getResurse('planets/')
        return planets.results
    }
    async getPlanet (id){
        const planet = await this.getResurse(`planets/${id}/`)
        console.log(planet)
        return this._tranceformePlanet(planet)
    }

    _itemRegExp = (item)=>{
        //https://regex101.com/
        const regExp = /\/([0-9]*)\/$/
        const id = item.url.match(regExp)[1]
        return id
    }

    _tranceformePlanet = (planet)=>{
        return {
            id: this._itemRegExp(planet),
            name: planet.name,
            orbitalPeriod: planet.orbital_period,
            population:planet.population,
            diameter: planet.diameter,
        }
    }
}