package com.example.healthclub.service;

import com.example.healthclub.entity.Gym;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface GymService extends MongoRepository<Gym, String> {
}
