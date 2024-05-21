package com.example.API.Service;

import com.example.API.Models.ImdbModel;
//import com.example.API.Models.Movie;
import com.example.API.MovieNotFoundException;
import com.example.API.Repository.ImdbRepo;
import com.example.API.Repository.MovieRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ApiService {

    @Autowired
    private ImdbRepo movieRepo;

    // POST
    // saves movie and also saves and checks genres
    public ImdbModel saveDetails(ImdbModel movie) {
        ImdbModel newMovie = movieRepo.save(movie);
        return newMovie;
    }

    // READ
    public List<ImdbModel> getAllMovies() {
        return movieRepo.findAll();

    }

    public ImdbModel getMovieById(long id) {
        Optional<ImdbModel> movie= movieRepo.findById(id);

        if (movie.isEmpty()) {
            throw new MovieNotFoundException();
        }
        return movie.get();
    }

    public ImdbModel getRandomMovie() {
        List<ImdbModel> movieList = movieRepo.findAll();
        System.out.println("reached");
        Random r = new Random();
        int low = 0;
        int high = movieList.size();
        int result = r.nextInt(high-low) + low;
        return movieList.get(result);
    }

    // UPDATE
    @Modifying
    public ImdbModel updateMovie(ImdbModel newMovie, long id) {
        if (!movieRepo.existsById(id)) {
            throw new MovieNotFoundException();
        }
        newMovie.setId(id);
        movieRepo.save(newMovie);
        return newMovie;
    }


    // DELETE
    @Transactional
    public void deleteMovieById(long id) {

        Optional<ImdbModel> movie = movieRepo.findById(id);

        if (movie.isEmpty()) {
            throw new MovieNotFoundException();
        }

        movieRepo.deleteMovieById(id);
    }


}
