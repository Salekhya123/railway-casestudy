package com.railwayBook.Train_Booking_Service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import com.railwayBook.Train_Booking_Service.Controller.BookingController;
import com.railwayBook.Train_Booking_Service.Repository.BookTrainRepository;
import com.railwayBook.Train_Booking_Service.Service.UserService;
import com.railwayBook.Train_Booking_Service.models.BookTrain;



@SpringBootTest
class TrainBookingServiceApplicationTests {

	@Autowired
	BookingController controller;

	@MockBean
	BookTrainRepository trainsrepository;
	
	@Test
	@DisplayName("adding")
	public void saveTicketTest() {
		BookTrain train = new BookTrain("877","6215","12","Sonarpur","bangalore","1:25pm","","");
		when(trainsrepository.save(train)).thenReturn(train);
		assertEquals("Added Ticket with id:6215", controller.saveTicket(train));

		}
	
	
	@Test 
	@DisplayName("Allticket")
	public void getTrainTest() {
		  when(trainsrepository.findAll()).thenReturn(Stream
				  .of(new BookTrain("1456","ED3","3","Mysore","Bangalore","6:23am","",""),
            	 new  BookTrain("1243","JP8","7","Mumbai","Puri","3:09pm","",""),
            	 new BookTrain("33456","87F","10","Mysore","Pondicherry","7:55am","","")).collect(Collectors.toList()));
		  assertEquals(3,controller.getAllTicket().size()); }


	
}


//@Test
//@DisplayName("delete")
//public void deleteUserTest() {
//	BookTrain train = new BookTrain("12","45DC","4","Bandel","Howrah","9:45am");
//	controller.deleteTicket("Ticket deleted by id:45DC");
//	verify(trainsrepository, times(1)).delete(train);
//}
