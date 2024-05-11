package com.example.API;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@CrossOrigin(origins = "http://localhost:5173")
@Table(name = "frontend")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private final int id;

    private final String title;
    private final String year;
    private final String[] genres;

    public Movie() {
        this.id = -1;
        this.title = "no description";
        this.year = "0000";
        this.genres = null;
    }

    public Movie(int id, final String title, String year, final String[] genres) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genres = genres;
    }

//    public String getId() {
//        //return id;
//    }

    public String getTitle() {
        return title;
    }

    public String getYear() {
        return year;
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
