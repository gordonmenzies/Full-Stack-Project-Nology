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

import java.util.*;

@Service
public class ApiService {

    @Autowired
    private MovieRepo movieRepo;

    @Autowired
    private GenreRepo genreRepo;

    // POST
    // saves movie and also saves and checks genres
    public Movie saveDetails(Movie movie) {
        Movie newMovie = movieRepo.save(movie);
        for (Genre genre : convertStringToGenres(movie.getGenre())) {
            genreRepo.save(genre);
            // it only gets the id once it enters the database therefor it can't be searched by id
            System.out.println(movieRepo.findById(newMovie.getId()));
            assignGenreToMovie(newMovie.getId(), genre.getId(), true);
        }
        return newMovie;
    }

    public Genre saveGenre(Genre genre) {
        return genreRepo.save(genre);
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

    public List<Genre> getGenres() {
        return genreRepo.findAll();
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
        System.out.println("reach 1");
        Movie movie = movieRepo.findById(movieId).get();
        Genre genre = genreRepo.findById(genreId).get();
        System.out.println("reach 2");
        System.out.println("reach 3");
        movie.setGenreList(genre);
        System.out.println("reach 4");
        return movieRepo.save(movie);
    }

    public void assignGenreToMovie(Long movieId, long genreId, boolean thing) {
        System.out.println("reach 1");
        Movie movie = movieRepo.findById(movieId).get();
        Genre genre = genreRepo.findById(genreId).get();
        System.out.println("reach 2");
        System.out.println("reach 3");
        movie.setGenreList(genre);
        System.out.println("reach 4");
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


    public List<Genre> convertStringToGenres(String genre) {
        List<Genre> wordsToAdd = new ArrayList<>();
        List<Genre> genreList = getGenres();

        if (genre != null) {
            String[] words = genre.split(",");

            for (String word : words) {
                word.trim();
                if (containsStringInList(genreList, word)) {
                    wordsToAdd.add(new Genre(word));
                }
            }
        }
        return wordsToAdd;
    }

    // check to see if the genre already exists and if so return false
    public boolean containsStringInList(List<Genre> list, String searchString) {
        for (Genre genre : list) {
            if (genre.getName() != null &! genre.getName().contains(searchString)) {
                return true;
            }
        }
        return false;
    }


}
