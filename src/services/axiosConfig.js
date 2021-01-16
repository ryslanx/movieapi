import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGQyOWJjNzI3ZDhmZmMzNjUzMjRmNmM1NWI4YzM5OCIsInN1YiI6IjVmZmUyNjFlYWQ1OWI1MDA0MGY5Y2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MJrcJztLJefx4nV1MxkpAnXiSJYklwQNdBcyLThoF2I"
    }
})