package com.example.API.Service;

import com.example.API.Movie;
import com.example.API.MovieNotFoundException;
import com.example.API.Repository.ApiRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@Service
public class ApiService {

    @Autowired
    private ApiRepo apiRepo;

    // POST
    public Movie saveDetails(Movie movie) {
        System.out.println("service " + movie);
        Movie newMovie = apiRepo.save(movie);
        return newMovie;
    }

    // READ
    public List<Movie> getAllMovies() {
        return apiRepo.findAll();

    }

    public Movie getMovieById(long id) {
        Optional<Movie> movie= apiRepo.findById(Math.toIntExact(id));

        if (movie.isEmpty()) {
            throw new MovieNotFoundException();
        }
        return movie.get();
    }

    // UPDATE
    @Modifying
    public Movie updateMovie(Movie newMovie, long id) {
        if (!apiRepo.existsById(Math.toIntExact(id))) {
            throw new MovieNotFoundException();
        }
        newMovie.setId(id);
        apiRepo.save(newMovie);
        return newMovie;
    }

    // DELETE
    @Transactional
    public void deleteMovieById(long id) {

        Optional<Movie> movie = apiRepo.findById(Math.toIntExact(id));

        if (movie.isEmpty()) {
            throw new MovieNotFoundException();
        }

        apiRepo.deleteMovieById(id);
    }
}
