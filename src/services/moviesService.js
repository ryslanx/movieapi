import {AXIOS} from "./axiosConfig";

class MoviesService {
    async getMovies() {
        const { data } = await AXIOS.get('/discover/movie')
        return data
    }

    async getMovieByID(movieID) {
        const { data } = await AXIOS.get(`/movie/${movieID}`)
        return data
    }
}

export const movieService = new MoviesService()