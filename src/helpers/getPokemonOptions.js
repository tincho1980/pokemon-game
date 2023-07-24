import pokemonApi from "@/api/pokemonApi"


const getPokemons = () => {

    const pokemonArr = Array.from( Array(650))

    return pokemonArr.map( (id, index) => index + 1 )

}


const getPokemonOptions = async () => {
    
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 ).slice(0,4)
    
    const pokemons = await getPokemonNames( mixedPokemons )

    return pokemons
    
}

const getPokemonNames = async ( [a, b, c, d] = [] ) => {
    
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]

    const [ p1, p2, p3, p4 ] = await Promise.all( promiseArr )
    
    return [
        { name: p1.data.name[0].toUpperCase() + p1.data.name.substring(1), id: p1.data.id },
        { name: p2.data.name[0].toUpperCase() + p2.data.name.substring(1), id: p2.data.id },
        { name: p3.data.name[0].toUpperCase() + p3.data.name.substring(1), id: p3.data.id },
        { name: p4.data.name[0].toUpperCase() + p4.data.name.substring(1), id: p4.data.id },
    ]

}

export default getPokemonOptions