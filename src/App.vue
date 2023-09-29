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
        searchMovie() {
            const urlMovie = this.state.movie_url + this.state.query;
            this.state.fetchMovie(urlMovie)
        },
        searchTvSeries() {
            const urlTvSeries = this.state.tvSeries + this.state.query;
            this.state.fetchTvSeries(urlTvSeries)
        }
    },

}
</script>

<template>
    <div class="container">
        <div class="">
            <input type="search" name="search" id="searchMovie" v-model="this.state.query">
            <button class="btn btn-primary" @click="searchMovie() && searchTvSeries()">Search</button>
        </div>
        <ul>
            <li v-for="movie in state.movies">
                <span> Titolo: {{ movie.title }} </span>
                <span> Titolo originale: {{ movie.original_title }}</span>
                <div v-if="this.flags.includes(movie.original_language)">
                    Lingua: <img width="50" :src="`src/assets/img/flags/${movie.original_language}.png`">
                </div>
                <span v-else> Lingua: {{ movie.original_language }}</span>

                <span> Voto: {{ movie.vote_average }}</span>
            </li>
            <li v-for="tvSerie in state.tvSeries">
                <span> Titolo: {{ tvSerie.name }} </span>
                <span> Titolo originale: {{ tvSerie.original_name }}</span>
                <div v-if="this.flags.includes(tvSerie.original_language)">
                    Lingua: <img width="50" :src="`src/assets/img/flags/${tvSerie.original_language}.png`">
                </div>
                <span v-else> Lingua: {{ tvSerie.original_language }}</span>

                <span> Voto: {{ tvSerie.vote_average }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
