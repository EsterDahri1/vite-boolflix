import { reactive } from "vue";
import axios from 'axios';
export const state = reactive({
    movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=e10a79c4628cb2c1d4e74a07721be7c3&query=',
    tv_url: 'https://api.themoviedb.org/3/search/tv?api_key=e10a79c4628cb2c1d4e74a07721be7c3&query=',
    query: '',
    movies: '',
    tvSeries: '',
    fetchMovie(url) {
        axios
            .get(url)
            .then(response => {
                this.movies = response.data.results
            })
            .catch(error => {
                console.error(error);
            })
    },
    fetchTvSeries(url) {
        axios
            .get(url)
            .then(response => {
                this.tvSeries = response.data.results
            })
            .catch(error => {
                console.error(error);
            })
    }
})