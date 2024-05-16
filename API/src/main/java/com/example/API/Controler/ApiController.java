package com.example.API.Controler;

import com.example.API.Movie;
import com.example.API.Service.ApiService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ApiController {

    @Autowired
    private ApiService apiService;

    // POST

    @PostMapping("/addmovie")
    public ResponseEntity<Movie> postDetails(@RequestBody Movie movie) {
        System.out.println(movie.getGenre());
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
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getMovieById(Long.parseLong(id)));
    }

    @GetMapping("/movie/random")
    public ResponseEntity<Movie> getRandomMovie() {
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getRandomMovie());
    }

    // UPDATE
    @PutMapping("/movie/{id}")
    public ResponseEntity<Movie> updatedMovie(@RequestBody Movie newMovie, @PathVariable long id) {
        System.out.println("data recieved" + newMovie.toString());
        Movie updatedMovie = apiService.updateMovie(newMovie,id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedMovie);
    }

    //DELETE
    @DeleteMapping("/movie/{id}")
    public ResponseEntity<Void> deleteGreetingById(@PathVariable long id) {
        System.out.println("hamish deleted" + id);
        apiService.deleteMovieById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

//    @PostMapping("/movie")
//    public ResponseEntity<Movie> createMovie(@RequestBody final Movie movie) {
//        Movie result = apiService.saveDetails(movie);
//        System.out.println(movie);
//
//        return ResponseEntity.status(HttpStatus.CREATED)
//                .contentType(MediaType.APPLICATION_JSON)
//                .body(result);

}
