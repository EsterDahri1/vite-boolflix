import { reactive } from vue;
import axios from 'axios';
export const state = reactive({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=e10a79c4628cb2c1d4e74a07721be7c3&query=',
})