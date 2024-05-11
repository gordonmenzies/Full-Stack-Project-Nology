package com.example.API.Controler;

import com.example.API.Movie;
import com.example.API.Service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiController {

    @Autowired
    private ApiService apiService;

    // POST

    @PostMapping("/addmovie")
    public ResponseEntity<Movie> postDetails(@RequestBody Movie movie) {
        System.out.println(movie);
        Movie newMovie = apiService.saveDetails(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMovie);
    }

    // READ

    @GetMapping("/movie")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getAllMovies());
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<Movie> getProductById(@PathVariable final String id) {
//        System.out.println(id);
//        return new Movie("return a single product", 7);
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getMovieById(id));
    }


    // UPDATE

    //DELETE



//    @PostMapping("/movie")
//    public ResponseEntity<Movie> createMovie(@RequestBody final Movie movie) {
//        Movie result = apiService.saveDetails(movie);
//        System.out.println(movie);
//
//        return ResponseEntity.status(HttpStatus.CREATED)
//                .contentType(MediaType.APPLICATION_JSON)
//                .body(result);
//    }
}
