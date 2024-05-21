DROP DATABASE IF EXISTS IMDBmovies;

CREATE DATABASE IMDBmovies;

USE IMDBmovies;


CREATE TABLE IF NOT EXISTS completeMovies  (
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   code text,
   rating int DEFAULT NULL,
   dateRated text,
   title text,
   url text,
   titleType text,
   imdbRating double DEFAULT NULL,
   runTime int DEFAULT NULL,
   releaseYear int DEFAULT NULL,
   genres text,
   numVotes int DEFAULT NULL,
   releaseDate text,
   directors text
);