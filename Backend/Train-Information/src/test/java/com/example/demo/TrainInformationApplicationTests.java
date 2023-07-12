package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.model.Trains;
import com.example.demo.repository.TrainsRepository;
import com.example.demo.service.TrainService;


@SpringBootTest
@RunWith(SpringRunner.class)
class TrainInformationApplicationTests {
	@Autowired
		TrainService trainservice;
	@MockBean
	TrainsRepository trainsrepository;


	@Test
	@DisplayName("adding")
	public void saveTrainTest() {
		Trains train = new Trains("877","Sonarpur Local","Sealdah","Sonarpur","30");
		when(trainsrepository.save(train)).thenReturn(train);
		assertEquals(train, trainservice.addTrain(train));

		}
	@Test
	@DisplayName("delete")
	public void deleteUserTest() {
		Trains train = new Trains("12","Howrah local","Bandel","Howrah","30");
		trainservice.deleteTrain(train);
		verify(trainsrepository, times(1)).delete(train);
	}
	
	@Test 
	@DisplayName("Alltrains")
	public void getTrainTest() {
		  when(trainsrepository.findAll()).thenReturn(Stream
				  .of(new Trains("1","Mysore Express","Mysore","Bangalore","30"),
            	 new  Trains("12","Jagannath Express","Mumbai","Puri","30"),
            	 new Trains("3","Malgudi Express","Mysore","Pondicherry","30")).collect(Collectors.toList()));
		  assertEquals(3,trainservice.getContact().size()); }


}


