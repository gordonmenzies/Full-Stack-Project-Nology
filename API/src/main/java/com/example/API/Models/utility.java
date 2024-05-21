package com.example.API.Models;

import jakarta.persistence.*;

@Entity
@Table (name = "completeMovies")
public class utility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String code;
    private int rating;
    private String dateRated;
    private String title;
    private String url;
    private String titleType;
    private double imdbRating;
    private int runtTime;
    private int releaseYear;
    private String genres;
    private int numVotes;
    private String releaseDate;
    private String directors;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDateRated() {
        return dateRated;
    }

    public void setDateRated(String dateRated) {
        this.dateRated = dateRated;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitleType() {
        return titleType;
    }

    public void setTitleType(String titleType) {
        this.titleType = titleType;
    }

    public double getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(double imdbRating) {
        this.imdbRating = imdbRating;
    }

    public int getRuntTime() {
        return runtTime;
    }

    public void setRuntTime(int runtTime) {
        this.runtTime = runtTime;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public int getNumVotes() {
        return numVotes;
    }

    public void setNumVotes(int numVotes) {
        this.numVotes = numVotes;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDirectors() {
        return directors;
    }

    public void setDirectors(String directors) {
        this.directors = directors;
    }

    public int getYear() {
        return releaseYear;
    }

    public void setYear(int year) {
        this.releaseYear = year;
    }
}
