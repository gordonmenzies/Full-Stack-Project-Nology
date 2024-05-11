package com.example.API.Controler;

import com.example.API.Movie;
import com.example.API.MovieId;
import com.example.API.Service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class ApiController {

    @Autowired
    private ApiService apiService;

    @PostMapping("/addmovie")
    public ResponseEntity<Movie> postDetails(@RequestBody Movie movie) {
        System.out.println(movie);
        Movie newMovie = apiService.saveDetails(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMovie);
    }

    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/movie")
    public List<Movie> getAllMovies() {
        List<Movie> result = new ArrayList<>();
        result.add(new Movie( "Movie 1", 9));
        result.add(new Movie("Movie 2", 8));
        result.add(new Movie("Movie 3", 7));

        return result;
    }

//    @GetMapping("/movie/{id}")
//    public Movie getProductById(@PathVariable final String id) {
//        System.out.println(id);
//        return new Movie("return a single product", 7);
//    }

    @PostMapping("/movie")
    public ResponseEntity<MovieId> createMovie(@RequestBody final Movie movie) {
        MovieId result = new MovieId(UUID.randomUUID().toString());
        System.out.println(movie);

        return ResponseEntity.status(HttpStatus.CREATED)
                .contentType(MediaType.APPLICATION_JSON)
                .body(result);
    }
}
