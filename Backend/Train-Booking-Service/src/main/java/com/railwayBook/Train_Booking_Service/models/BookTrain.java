package com.railwayBook.Train_Booking_Service.models;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
//@Getter
//@Setter 
@Document(collection = "BookedTicket")
public class BookTrain {
	
	@Id
	  private String pnr;	    
	  private String ticket_id;
	  private String no_of_seats;
	  private String source;
	  private String destination;
	  private String price;
	  private String  date;
	  private String time;
	  

public BookTrain(String pnr, String ticket_id, String no_of_seats, String source, String destination, String price,
			String date, String time) {
		super();
		this.pnr = pnr;
		this.ticket_id = ticket_id;
		this.no_of_seats = no_of_seats;
		this.source = source;
		this.destination = destination;
		this.price = price;
		this.date = date;
		this.time = time;
	}

public BookTrain() {
		super();
	}
	  
	  public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

public String getPNR() {
		return pnr;
	}
	public void setPNR(String pnr) {
		pnr = pnr;
	}
	public String getTicket_id() {
		return ticket_id;
	}
	public void setTicket_id(String ticket_id) {
		this.ticket_id = ticket_id;
	}
	public String getNo_of_seats() {
		return no_of_seats;
	}
	public void setNo_of_seats(String no_of_seats) {
		this.no_of_seats = no_of_seats;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "BookTrain [pnr=" + pnr + ", ticket_id=" + ticket_id + ", no_of_seats=" + no_of_seats + ", source="
				+ source + ", destination=" + destination + ", price=" + price + ", date=" + date + ", time=" + time
				+ "]";
	}
	
	
	
}
