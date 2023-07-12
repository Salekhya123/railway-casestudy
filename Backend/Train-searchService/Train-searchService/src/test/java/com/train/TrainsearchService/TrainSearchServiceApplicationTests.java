package com.train.TrainsearchService;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

//import static org.junit.Assert.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import com.train.TrainsearchService.Repository.SearchRepository;
//import com.train.TrainsearchService.Service.SearchService;


@SpringBootTest
@RunWith(SpringRunner.class)
class TrainSearchServiceApplicationTests {
//
//	@Autowired
//	SearchService trainservice;
//	
//   @MockBean
//   SearchRepository trainsrepository;

	/*
	 * @Test public void getTrainTest() {
	 * when(trainsrepository.findAll()).thenReturn(Stream .of(new
	 * Search("1","Mysore Express","Mysore","Bangalore"), new
	 * Search("12","Jagannath Express","Mumbai","Puri"),new
	 * Search("3","Malgudi Express","Mysore","Pondicherry")).collect(Collectors.
	 * toList())); assertEquals(3,trainservice.getContact().size()); }
	 */
	 
	/*
	 * @Test public void saveTrainTest() { Search train = new
	 * Search("877","Sonarpur Local","Sealdah","Sonarpur");
	 * when(trainsrepository.save(train)).thenReturn(train);
	 * assertEquals(train,trainservice.addTrain(train));
	 * 
	 * }
	 */
//	  
//	  @Test public void deleteUserTest() { Search train = new
//	  Search("12","Howrah local","Bandel","Howrah");
//	  trainservice.deleteTrain(train); verify(trainsrepository,
//	  times(1)).delete(train); }
	  
	 

}
