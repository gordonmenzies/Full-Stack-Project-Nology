package com.example.API;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException() {
        super("Movie has not been found");
    }
}
