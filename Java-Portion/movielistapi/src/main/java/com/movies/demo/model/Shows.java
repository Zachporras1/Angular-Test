package com.movies.demo.model;

public class Shows {

    int seasons;
    String network;
    String title;
    String genre;


    public Shows(String title, String network, String genre, int seasons) {
        this.seasons = seasons;
        this.network = network;
        this.title = title;
        this.genre = genre;
    }

    public int getSeasons() {
        return seasons;
    }

    public void setSeasons(int seasons) {
        this.seasons = seasons;
    }

    public String getNetwork() {
        return network;
    }

    public void setNetwork(String network) {
        this.network = network;
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
