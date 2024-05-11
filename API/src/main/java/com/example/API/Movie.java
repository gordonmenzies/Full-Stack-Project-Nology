package com.example.API;

import jakarta.persistence.*;

@Entity
@Table(name = "MOVIE")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //private final String id;


    private final String description;

    private final int rating;

    public Movie() {
        //this.id = "-1";
        this.description = "no description";
        this.rating = 0;
    }

    public Movie(final String description, final int rating) {
        this.description = description;
        this.rating = rating;
    }

//    public String getId() {
//        //return id;
//    }

    public String getDescription() {
        return description;
    }

    public int getRating() {
        return rating;
    }

//    @Override
//    public String toString() {
//        return "Movie{" +
//                "id='" + id + '\'' +
//                ", description='" + description + '\'' +
//                ", rating=" + rating +
//                '}';
//    }
}
