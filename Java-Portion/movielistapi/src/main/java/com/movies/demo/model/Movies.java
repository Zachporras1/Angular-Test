package com.movies.demo.model;

public class Movies {

    String releaseyear;
    String title;
    String genre;

    public Movies(String title, String releaseyear, String genre) {
        this.releaseyear = releaseyear;
        this.title = title;
        this.genre = genre;
    }


    public String getReleaseyear() {
        return releaseyear;
    }

    public void setReleaseyear(String releaseyear) {
        this.releaseyear = releaseyear;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
