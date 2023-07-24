<template>
    <h1 v-if="!pokemon">Epere por favor...</h1>

    <div v-else class="fade-in">
        <h1>¿Quien es este pokemon?</h1>
        <PokemonPicture
            :pokemonId="pokemon.id"
            :showPokemon="showPokemon"
        />
        <PokemonOptions
            v-if="!showAnswer"
            :pokemons="pokemonArr"
            @selection="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button class="fade-in" @click="newGame">Nuevo Juego</button>
        </template>
    </div>

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4)
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer(pokemonId) {
            this.showPokemon = true
            this.showAnswer = true

            if ( pokemonId === this.pokemon.id ) {
                this.message = `Correcto!!! Has acertado!!!!`
            } else {
                this.message = `Oops, era ${ this.pokemon.name }`
            }
        },
        newGame() {
            this.pokemonArr = [],
            this.pokemon = null,
            this.showPokemon = false
            this.showAnswer = false

            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

<style>

</style>