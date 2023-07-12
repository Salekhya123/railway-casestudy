package com.railwayBook.Train_Booking_Service.Controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.railwayBook.Train_Booking_Service.Repository.BookTrainRepository;
import com.railwayBook.Train_Booking_Service.models.BookTrain;

@CrossOrigin(origins="*")
@RestController
public class BookingController {
	
	@Autowired
	private BookTrainRepository bookRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	 
	@GetMapping("/AllTickets")
	public List<BookTrain> getAllTicket() {
		return bookRepository.findAll();
	}
	
	@GetMapping("/AllTrains")
	public List<Object> getsearchtrainDetails() {
	Object[] objects = restTemplate.getForObject("http://Train-Information/search/searchtrains", Object[].class);
	return Arrays.asList(objects);
	}
	
	@GetMapping("/AllTickets/{PNR}")
	public Optional<BookTrain> getTicket(@PathVariable String PNR){
		return bookRepository.findById(PNR);
	}
	
	
	@PostMapping("/addTicket")
	public String saveTicket(@RequestBody BookTrain book) {
		bookRepository.save(book);
		return "Added Ticket with id:"+book.getPNR();
	}
	
	
	@PutMapping("/update/{PNR}")
	public BookTrain updateTicket(@PathVariable("PNR") String PNR,@RequestBody BookTrain Ticket ) {
		Ticket.setPNR(PNR);
	    bookRepository.save(Ticket);
		return Ticket;
	}
	
	@DeleteMapping("/delete/{PNR}")
	public String deleteTicket(@PathVariable String PNR) {
		bookRepository.deleteById(PNR);
		return "Ticket deleted by id:"+PNR;
	}
	
	

}
