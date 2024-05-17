package com.example.API.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "movie_genres_link")
public class MovieGenreLink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long movie_id;
    private long genres_id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(long movie_id) {
        this.movie_id = movie_id;
    }

    public long getGenres_id() {
        return genres_id;
    }

    public void setGenres_id(long genres_id) {
        this.genres_id = genres_id;
    }
}
