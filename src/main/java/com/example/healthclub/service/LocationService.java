package com.example.healthclub.service;

import com.example.healthclub.entity.Location;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface LocationService extends MongoRepository<Location, String> {
}
