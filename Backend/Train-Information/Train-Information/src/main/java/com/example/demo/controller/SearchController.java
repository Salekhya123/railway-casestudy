package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Trains;
import com.example.demo.repository.TrainsRepository;


@RestController
public class SearchController {
	@Autowired
	private TrainsRepository trainsrepository;
	 @GetMapping("/searchtrains")
	    public List<Trains> getTrains(){
		return trainsrepository.findAll();
		
	}
	 @GetMapping("/searchtrains/{t_id}")
	    public Optional<Trains> getTrains(@PathVariable String t_id){
		return trainsrepository.findById(t_id);
	}
}
