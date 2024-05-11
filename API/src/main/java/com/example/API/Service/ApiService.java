package com.example.API.Service;

import com.example.API.Movie;
import com.example.API.Repository.ApiRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApiService {

    @Autowired
    private ApiRepo apiRepo;

    public Movie saveDetails(Movie movie) {
        System.out.println("service " + movie);
        Movie newMovie = apiRepo.save(movie);
        return apiRepo.save(movie);};
}
