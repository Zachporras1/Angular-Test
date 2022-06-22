package com.movies.demo.showscontroller;


import com.movies.demo.model.Shows;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ShowController {

    @RequestMapping(value="/shows",method = RequestMethod.GET)

    public List<Shows> getShows(Model model){

        List <Shows> tvShows=new ArrayList<Shows>();

        tvShows.add(new Shows("The Sopranos","HBO","Drama",6));
        tvShows.add(new Shows("South Park","Comedy Central","Comedy",21));
        tvShows.add(new Shows("Silicon Valley","HBO","Comedy",6));
        tvShows.add(new Shows("Stranger Things","Netflix","Action",4));
        tvShows.add(new Shows("The Office","NBC","Comedy",9));


        return tvShows;

    }
}