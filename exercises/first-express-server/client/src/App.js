import React, {useState, useEffect} from "react"
import Axios from "axios"

import Movie from "./Movie"
import AddMovieForm from "./AddMovieForm"

function App() {
    const [movies, setMovies] = useState([])

    useEffect(() => getMovies(), [])

    function getMovies() {
        Axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }

    function addMovie(newMovieObj) {
        Axios.post("/movies", newMovieObj)
            .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
            .catch(err => console.log(err))
    }

    function deleteMovie(movieId) {
        Axios.delete(`/movies/${movieId}`)
            .then(res => {
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    }

    function editMovie(updateObj, movieId) {
        Axios.put(`/movies/${movieId}`, updateObj)
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
            })
            .catch(err => console.log(err))
    }

    function handleFilter(e) {
        if(e.target.value === "reset") {
            getMovies()
        } else {
            Axios.get(`/movies/search/genre?genre=${e.target.value}`)
                .then(res => setMovies(res.data))
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <h1>Welcome to THUNDERDOME</h1>

            <AddMovieForm submit={addMovie} btnText="Add Movie" />

            <h4>Filter by genre</h4>
            <select onChange={handleFilter}>
                <option value="reset">-- Select a Genre --</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
            </select>

            {movies.map(movie => <Movie 
                                    key={movie._id} 
                                    {...movie} 
                                    deleteMovie={deleteMovie} 
                                    editMovie={editMovie} />)}
        </div>
    )
}

export default App