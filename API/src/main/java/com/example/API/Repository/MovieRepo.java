package com.example.API.Repository;

import com.example.API.Models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepo extends JpaRepository<Movie,Long> {

    // DELETE
    void deleteMovieById(long id);
}
