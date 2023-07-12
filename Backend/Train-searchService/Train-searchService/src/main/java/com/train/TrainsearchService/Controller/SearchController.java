package com.train.TrainsearchService.Controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.train.TrainsearchService.model.Trains;

@CrossOrigin(origins="*")
@RestController
public class SearchController {
	
	
	@Autowired
	private RestTemplate restTemplate;

	
	
    @GetMapping("/findAllTrains/{train_no}")
    public List<Object> getsearchtrainDetailsbyId() {
    	Object[] objects = restTemplate.getForObject("http://Train-Information/search/searchtrains/{t_id}", Object[].class);
    	return Arrays.asList(objects);
    	}

    
    @GetMapping("/findAllTrains")
	public List<Object> getsearchtrainDetails() {
	Object[] objects = restTemplate.getForObject("http://Train-Information/search/searchtrains", Object[].class);
	return Arrays.asList(objects);
	}
    
    
    
   
}





