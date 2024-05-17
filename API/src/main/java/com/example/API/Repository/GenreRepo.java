package com.example.API.Repository;

import com.example.API.Models.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepo extends JpaRepository<Genre,Long> {

    // DELETE
    void deleteMovieById(long id);
}
