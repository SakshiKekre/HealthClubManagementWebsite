package com.example.healthclub.service;

import com.example.healthclub.entity.Registration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationService extends MongoRepository<Registration,String> {
}
