package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Trains;
import com.example.demo.repository.TrainsRepository;

@Service
public class TrainService {
	@Autowired
	private TrainsRepository trainsrepository;
	
	public Trains addTrain (Trains t) {
		return trainsrepository.save(t);
		
	}

	
	  /*public List<Trains> getContact() { List<Trains> t =
	  trainsrepository.findAll(); System.out.println("Getting data from DB : " +
	  t); return t;
	 
	}*/
	public Optional<Trains> getTrainbyId(String t_id) {
		return trainsrepository.findById(t_id);
	}
	public void deleteTrain(Trains t) {
		trainsrepository.delete(t);
	}


	
	
	
	  //public List<Trains> getAllTrain() { // TODO Auto-generated method stub return
	  //List<Trains> t = new ArrayList<>(); trainsrepository.findAll()
	  //.forEach(t::add); return t; }
	 
	 //public Optional<Trains> getTrain(String t_id) {
		//return trainsrepository.findById(t_id); }
	 
}

