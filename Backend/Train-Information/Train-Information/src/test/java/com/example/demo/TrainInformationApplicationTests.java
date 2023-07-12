package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.model.Trains;
import com.example.demo.repository.TrainsRepository;
import com.example.demo.service.TrainService;
import com.mongodb.connection.Stream;

@SpringBootTest
@RunWith(SpringRunner.class)
class TrainInformationApplicationTests {
	@Autowired
		TrainService trainservice;
	@MockBean
	TrainsRepository trainsrepository;


	public void saveTrainTest() {
		Trains train = new Trains("877","Sonarpur Local","Sealdah","Sonarpur");
		when(trainsrepository.save(train)).thenReturn(train);
		assertEquals(train, trainservice.addTrain(train));

		}
	@Test
	public void deleteUserTest() {
		Trains train = new Trains("12","Howrah local","Bandel","Howrah");
		trainservice.deleteTrain(train);
		verify(trainsrepository, times(1)).delete(train);
	}
	}




