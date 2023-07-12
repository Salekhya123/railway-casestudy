package com.railwayBook.Train_Booking_Service.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.railwayBook.Train_Booking_Service.models.BookTrain;

@Repository
public interface BookTrainRepository extends MongoRepository<BookTrain,String>{

}
