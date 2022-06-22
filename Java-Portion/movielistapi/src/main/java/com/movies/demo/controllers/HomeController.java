package com.movies.demo.controllers;
import com.movies.demo.model.Movies;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HomeController {
    @RequestMapping(value="/movies",method=RequestMethod.GET)

    public List<Movies> getMovies(Model model){

        int a=0;
        List <Movies> movieList= new ArrayList<Movies>();
        movieList.add(new Movies("Avengers 2","2015","SuperHero"));
        movieList.add(new Movies("This is the end","2012","Comedy"));
        movieList.add(new Movies("Star wars","1977","Action"));
        movieList.add(new Movies("The guilty","2021","Drama"));
        movieList.add(new Movies("Spiderman","2002","Superhero"));


        return movieList;

    }





}
