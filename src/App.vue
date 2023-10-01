<script >
import { state } from "./state.js";
export default {
    name: 'App',
    data() {
        return {
            state,
            flags: ['de', 'en', 'es', 'fr', 'it'],
            imgUrl: 'https://image.tmdb.org/t/p/w342',
        }
    },
    methods: {
        searchMovie() {
            const urlMovie = this.state.movie_url + this.state.query;
            this.state.fetchMovie(urlMovie)
        },
        searchTvSeries() {
            const urlTvSeries = this.state.tv_url + this.state.query;
            this.state.fetchTvSeries(urlTvSeries)
        }
    },

}
</script>

<template>
    <div class="container">
        <div class="">
            <input type="search" name="search" id="searchMovie" v-model="this.state.query">
            <button class="btn btn-primary" @click="this.searchMovie(), this.searchTvSeries()">Search</button>
        </div>
        <h2>FILM</h2>
        <div class="row row-cols-4">

            <div class="card" v-for="movie in state.movies">
                <img :src="imgUrl + movie.poster_path" alt="" class="img-card-top">
                <div class="card-body">
                    <span> Titolo: {{ movie.title }} </span>
                    <span> Titolo originale: {{ movie.original_title }}</span>
                    <div v-if="this.flags.includes(movie.original_language)">
                        Lingua: <img width="50" :src="`src/assets/img/flags/${movie.original_language}.png`">
                    </div>
                    <span v-else> Lingua: {{ movie.original_language }}</span>

                    <span>
                        Voto:
                        <div>
                            <svg v-for="star in Number((movie.vote_average / 2).toFixed(0))"
                                xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>

                            <svg v-for="emptyStar in (5 - (Number((movie.vote_average / 2).toFixed(0))))"
                                xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                            </svg>
                        </div>
                    </span>
                </div>
            </div>
        </div>


        <h2>SERIE TV</h2>
        <div class="row row-cols-4">
            <div class="card" v-for="tvSerie in state.tvSeries">
                <img :src="imgUrl + tvSerie.poster_path" alt="" class="img-card-top">
                <div class="card-body">
                    <span> Titolo: {{ tvSerie.name }} </span>
                    <span> Titolo originale: {{ tvSerie.original_name }}</span>
                    <div v-if="this.flags.includes(tvSerie.original_language)">
                        Lingua: <img width="50" :src="`src/assets/img/flags/${tvSerie.original_language}.png`">
                    </div>
                    <span v-else> Lingua: {{ tvSerie.original_language }}</span>

                    <span>
                        Voto:
                        <div>
                            <svg v-for="star in Number((tvSerie.vote_average / 2).toFixed(0))"
                                xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>

                            <svg v-for="emptyStar in (5 - (Number((tvSerie.vote_average / 2).toFixed(0))))"
                                xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                            </svg>
                        </div>
                    </span>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped></style>
