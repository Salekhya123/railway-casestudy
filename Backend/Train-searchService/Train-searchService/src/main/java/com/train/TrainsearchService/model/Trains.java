package com.train.TrainsearchService.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "TrainDetails")
public class Trains {
@Id
 private String t_id;
 private String t_name;
 private String source;
 private String destination;
 private String price;
 

public Trains(String t_id, String t_name, String source, String destination, String price) {
	super();
	this.t_id = t_id;
	this.t_name = t_name;
	this.source = source;
	this.destination = destination;
	this.price = price;
}

public Trains()
 {
 }
 
 public String getPrice() {
	return price;
}

public void setPrice(String price) {
	this.price = price;
}



public String getT_id() {
	return t_id;
}
public void setT_id(String t_id) {
	this.t_id = t_id;
}
public String getT_name() {
	return t_name;
}
public void setT_name(String t_name) {
	this.t_name = t_name;
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


@Override
public String toString() {
	return "Trains [t_id=" + t_id + ", t_name=" + t_name + ", source=" + source + ", destination=" + destination
			+ ", price=" + price + "]";
}

 

}


