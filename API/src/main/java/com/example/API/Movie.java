package com.example.API;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private final String title;
    private final String director;
    private final String genre;
    private final int year;
    private final int personalRating;
    private final int runTime;


    public Movie() {
        this.id = -1;
        this.title = "no description";
        this.year = 0000;
        this.genre = null;
        this.director = null;
        this.personalRating = 0;
        this.runTime = 200;
    }

    public Movie(long id,String title,
                 int year,String genre,
                 String director,
                 int personalRating,
                 int runTime) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.personalRating = personalRating;
        this.runTime = runTime;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDirector() {
        return director;
    }

    public int getPersonalRating() {
        return personalRating;
    }

    public int getRunTime() {
        return runTime;
    }

    public String getGenre() {
        return genre;
    }

    public String getTitle() {
        return title;
    }

    public int getYear() {
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
