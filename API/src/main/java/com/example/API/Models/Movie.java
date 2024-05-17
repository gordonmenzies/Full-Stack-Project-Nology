package com.example.API.Models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "movie_genres_link",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genres_id")
    )
    @Column(name = "genre_set")
    private Set<Genre> genres;

    private final String title;
    private final String director;
    private final String genre;
    private final int year;
    private final String personalRating;
    private final String runTime;


    public Movie() {
        this.id = -1;
        this.title = "no description";
        this.year = 0000;
        this.genre = null;
        this.director = null;
        this.personalRating = "0";
        this.runTime = "200";
        this.genres = new HashSet<>();
    }

    public Movie(long id,String title,
                 int year,String genre,
                 String director,
                 String personalRating,
                 String runTime) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.personalRating = personalRating;
        this.runTime = runTime;
        this.genres = new HashSet<>();
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

    public String getPersonalRating() {
        return personalRating;
    }

    public String getRunTime() {
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

    public Set<Genre> getGenreList() {
        return genres;
    }

   //  break down the genre string and turn them into individual items and add them to the hash set
    public void setGenreList(Genre genre) {
        this.genres.add(genre);
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", genres=" + genres +
                ", title='" + title + '\'' +
                ", director='" + director + '\'' +
                ", genre='" + genre + '\'' +
                ", year=" + year +
                ", personalRating='" + personalRating + '\'' +
                ", runTime='" + runTime + '\'' +
                '}';
    }
}
