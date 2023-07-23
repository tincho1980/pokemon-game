<template>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture />
    <PokemonOptions />

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>

<style>

</style>