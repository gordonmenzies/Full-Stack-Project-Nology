package com.example.API.Repository;

import com.example.API.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApiRepo extends JpaRepository<Movie,Integer> {

    // DELETE
    void deleteMovieById(long id);
}
