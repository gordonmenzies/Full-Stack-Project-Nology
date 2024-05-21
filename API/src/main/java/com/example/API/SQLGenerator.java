package com.example.API;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SQLGenerator {
        public static void main(String[] args) {
            // Example data for demonstration (add more entries for a total of 300)
            List<Map<String, Object>> movies = new ArrayList<>();

            Map<String, Object> movie1 = new HashMap<>();
            movie1.put("Const", "tt1007029");
            movie1.put("Your Rating", 10);
            movie1.put("Date Rated", "2013-11-29");
            movie1.put("Title", "The Iron Lady");
            movie1.put("URL", "https://www.imdb.com/title/tt1007029/");
            movie1.put("Title Type", "movie");
            movie1.put("IMDb Rating", 6.4);
            movie1.put("Runtime (mins)", 105);
            movie1.put("Year", 2011);
            movie1.put("Genres", "Biography, Drama");
            movie1.put("Num Votes", 113696);
            movie1.put("Release Date", "2011-12-26");
            movie1.put("Directors", "Phyllida Lloyd");

            // Add other movie entries here
            movies.add(movie1);

            // Generate and print SQL statements
            for (String sql : generateSQLStatements(movies)) {
                System.out.println(sql);
            }
        }

        public static List<String> generateSQLStatements(List<Map<String, Object>> movies) {
            List<String> sqlStatements = new ArrayList<>();

            for (Map<String, Object> movie : movies) {
                String sql = String.format(
                        "INSERT INTO completeMovies (code, rating, dateRated, title, url, titleType, imdbRating, runTime, releaseYear, genres, numVotes, releaseDate, directors) " +
                                "VALUES (\"%s\", %d, \"%s\", \"%s\", \"%s\", \"%s\", %.1f, %d, %d, \"%s\", %d, \"%s\", \"%s\");",
                        movie.get("Const"),
                        movie.get("Your Rating"),
                        movie.get("Date Rated"),
                        movie.get("Title"),
                        movie.get("URL"),
                        movie.get("Title Type"),
                        movie.get("IMDb Rating"),
                        movie.get("Runtime (mins)"),
                        movie.get("Year"),
                        movie.get("Genres"),
                        movie.get("Num Votes"),
                        movie.get("Release Date"),
                        movie.get("Directors")
                );
                sqlStatements.add(sql);
            }

            return sqlStatements;
        }
    }
