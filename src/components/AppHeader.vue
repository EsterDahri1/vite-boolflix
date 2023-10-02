<script>
import { state } from '../state.js'
export default {
    name: 'Appheader',
    data() {
        return {
            state,
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
    }
}
</script>

<template>
    <header>
        <div class="wrapper d-flex justify-content-between align-items-center">
            <div class="menu-navigation d-flex align-items-center ">
                <a href="#">
                    <img width="150" src="../assets/img/logo.png" alt="red netflix logo">
                </a>
                <ul class="mt-3 list-unstyled d-flex align-items-center">
                    <li class="ps-3"><a class="text-decoration-none fs-5" href="#">Home</a></li>
                    <li class="ps-3"><a class="text-decoration-none fs-5" href="#">Serie Tv</a></li>
                    <li class="ps-3"><a class="text-decoration-none fs-5" href="#">Film</a></li>
                    <li class="ps-3"><a class="text-decoration-none fs-5" href="#">Nuovi e popolari</a></li>
                    <li class="ps-3"><a class="text-decoration-none fs-5" href="#">La mia lista</a></li>
                    <li class="ps-3"><a class="text-decoration-none fs-5" href="#">Sfoglia per lingua</a></li>
                </ul>
            </div>
            <div class="otherOptions d-flex align-items-center">
                <div class="ps-2 searchbar d-flex align-items-center">
                    <button class="btn rounded-0" @click="this.searchMovie(), this.searchTvSeries()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </button>
                    <input type="search" name="search" id="searchMovie" v-model="this.state.query"
                        placeholder="Titolo, persone, generi">
                </div>
                <a href="#" class="ps-3 text-decoration-none fs-5">Bambini</a>
                <a href="#" class="ps-3 text-decoration-none fs-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                    </svg>
                </a>
                <div class="ps-3 btn-group">
                    <button type="button" id="ddBtn" class="btn btn-dark dropdown-toggle fs-4" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <img width="50px" class="rounded-2" src="../assets/img/Netflix-avatar.png" alt="">
                    </button>
                    <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    background-color: $bx_dark;

    .wrapper {
        max-width: 1440px;
        width: 80%;
        margin: auto;
    }

    a {
        color: $bx_light;
    }

    svg {
        fill: $bx_light;
        font-size: 25px;
    }

    .searchbar {
        background-color: $bx_dark;
        color: $bx_lightgrey;
        border: 1px solid $bx_light;

        #searchMovie {
            background-color: $bx_dark;
            color: $bx_lightgrey;
            border: none;
            box-shadow: none;
        }
    }

    .btn-group {
        #ddBtn {
            background-color: $bx_dark;
            border: none;
        }
    }
}
</style>