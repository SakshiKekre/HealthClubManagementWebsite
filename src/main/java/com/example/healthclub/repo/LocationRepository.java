package com.example.healthclub.repo;

import com.example.healthclub.entity.Location;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface LocationRepository extends MongoRepository<Location, String> {
}
