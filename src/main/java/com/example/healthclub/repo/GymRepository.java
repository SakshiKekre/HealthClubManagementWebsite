package com.example.healthclub.repo;

import com.example.healthclub.entity.Gym;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface GymRepository extends MongoRepository<Gym, String> {
}
