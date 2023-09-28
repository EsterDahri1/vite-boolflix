<script >
import { state } from "./state.js";
export default {
    name: 'App',
    data() {
        return {
            state
        }
    },

    methods: {
        searchMovieByName() {
            const urlByName = this.state.url + this.state.movieTitle;
            this.state.fetchMovieByName(urlByName)
        }
    }

}
</script>

<template>
    <div class="container p-2">
        <form class="d-flex align-items-center justify-content-center">
            <input type="search" class="form-control" id="name" v-model="this.state.movieTitle">
            <button @click="searchMovieByName()" class="ms-3 btn btn-primary">Search</button>
        </form>
        <ul>
            <li v-for="result in this.state.results">
                <span>Titolo: {{ result.title }}</span>
                <span>Titolo Originale: {{ result.original_title }}</span>
                <span>Lingua: {{ result.original_language }}</span>
                <span>Voto: {{ result.vote_average }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
