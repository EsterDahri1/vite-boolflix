<script >
import { state } from "./state.js";
export default {
    name: 'App',
    data() {
        return {
            state,
            flags: ['de', 'en', 'es', 'fr', 'it']
        }
    },
    methods: {
        searcMovie() {
            const urlMovie = this.state.base_url + this.state.query;
            this.state.fetchMovie(urlMovie)
        }
    }
    // mounted(){

    // }

}
</script>

<template>
    <div class="container">
        <div class="">
            <input type="search" name="search" id="searchMovie" v-model="this.state.query">
            <button class="btn btn-primary" @click="searcMovie()">Search</button>
        </div>
        <ul>
            <li v-for="movie in state.movies">
                <span> Titolo: {{ movie.title }}</span>
                <span> Titolo originale: {{ movie.original_title }}</span>
                <div v-if="this.flags.includes(movie.original_language)">
                    Lingua: <img :src="`./assets/img/flags/${movie.original_language}.png`">
                </div>
                <span v-else> Lingua: {{ movie.original_language }}</span>

                <span> Voto: {{ movie.vote_average }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
