package com.example.API.Service;

import com.example.API.Models.Genre;
import com.example.API.Models.Movie;
import com.example.API.MovieNotFoundException;
import com.example.API.Repository.GenreRepo;
import com.example.API.Repository.MovieRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

@Service
public class ApiService {

    @Autowired
    private MovieRepo movieRepo;

    @Autowired
    private GenreRepo genreRepo;

    // POST
    public Movie saveDetails(Movie movie) {
        System.out.println("service " + movie);
        Movie newMovie = movieRepo.save(movie);
        return newMovie;
    }

    public Genre saveGenre(Genre genre) {
        Genre newGenre = genreRepo.save(genre);
                return newGenre;
    }

    // READ
    public List<Movie> getAllMovies() {
        return movieRepo.findAll();

    }

    public Movie getMovieById(long id) {
        Optional<Movie> movie= movieRepo.findById(id);

        if (movie.isEmpty()) {
            throw new MovieNotFoundException();
        }
        return movie.get();
    }

    public Movie getRandomMovie() {
        List<Movie> movieList = movieRepo.findAll();
        System.out.println("reached");
        Random r = new Random();
        int low = 0;
        int high = movieList.size();
        int result = r.nextInt(high-low) + low;
        return movieList.get(result);
    }

    // UPDATE
    @Modifying
    public Movie updateMovie(Movie newMovie, long id) {
        if (!movieRepo.existsById(id)) {
            throw new MovieNotFoundException();
        }
        newMovie.setId(id);
        movieRepo.save(newMovie);
        return newMovie;
    }

    public Movie assignGenreToMovie(Long movieId, long genreId) {
        Set<Genre>genreSet = null;
        Movie movie = movieRepo.findById(movieId).get();
        Genre genre = genreRepo.findById(genreId).get();
        genreSet = movie.getGenres();
        genreSet.add(genre);
        movie.setGenres(genreSet);
        return movieRepo.save(movie);
    }

    // DELETE
    @Transactional
    public void deleteMovieById(long id) {

        Optional<Movie> movie = movieRepo.findById(id);

        if (movie.isEmpty()) {
            throw new MovieNotFoundException();
        }

        movieRepo.deleteMovieById(id);
    }
}
