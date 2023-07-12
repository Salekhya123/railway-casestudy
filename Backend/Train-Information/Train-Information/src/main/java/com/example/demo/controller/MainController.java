package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.Trains;
import com.example.demo.repository.TrainsRepository;
import com.example.demo.service.TrainService;

@RestController
@RequestMapping("/train")
public class MainController {
	@Autowired
	private TrainsRepository trainsrepository;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private TrainService ts;

		 
		 
		 
		
		  @RequestMapping(method = RequestMethod.POST, value="/addtrain")
		  public void addTrain(@RequestBody Trains t) { 
			  ts.addTrain(t); 
			  }
		
		
		  @GetMapping("{t_id}") public Optional<Trains> getTrain(@PathVariable String
		  t_id) { return trainsrepository.findById(t_id); }
		
		 
		 
	@DeleteMapping("/delete/{t_id}")
	public String deleteTrain(@PathVariable String t_id) {
		trainsrepository.deleteById(t_id);
		return "Delete the train with the specfied id : " + t_id;
	}

	@PutMapping("/update/{t_id}")
	public Trains updateTrain(@PathVariable("t_id") String t_id, @RequestBody Trains t) {
		t.setT_id(t_id);
		trainsrepository.save(t);
		return t;

	}
}


