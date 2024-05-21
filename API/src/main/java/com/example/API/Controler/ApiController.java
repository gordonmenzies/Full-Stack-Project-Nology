package com.example.API.Controler;

import com.example.API.Models.ImdbModel;
//import com.example.API.Models.Movie;
import com.example.API.Service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<ImdbModel> postDetails(@RequestBody ImdbModel movie) {
        ImdbModel newMovie = apiService.saveDetails(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMovie);
    }

    // READ

    @GetMapping("/movie")
    public ResponseEntity<List<ImdbModel>> getAllMovies() {
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getAllMovies());
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<ImdbModel> getProductById(@PathVariable final String id) {
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getMovieById(Long.parseLong(id)));
    }

    @GetMapping("/movie/random")
    public ResponseEntity<ImdbModel> getRandomMovie() {
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getRandomMovie());
    }

    // UPDATE
    @PutMapping("/movie/{id}")
    public ResponseEntity<ImdbModel> updatedMovie(@RequestBody ImdbModel newMovie, @PathVariable long id) {
        ImdbModel updatedMovie = apiService.updateMovie(newMovie,id);
        System.out.println("reached");
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
