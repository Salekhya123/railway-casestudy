package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Trains;

public interface TrainsRepository  extends MongoRepository <Trains, String> {

	
}
