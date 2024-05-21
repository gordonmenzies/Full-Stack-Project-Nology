package com.example.API.Repository;

import com.example.API.Models.ImdbModel;
import com.example.API.Models.utility;
//import com.example.API.Models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepo extends JpaRepository<ImdbModel,Long> {

    // DELETE
    void deleteMovieById(long id);
}
