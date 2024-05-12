package com.example.API;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException() {
        super("Greeting has not been found");
    }
}
