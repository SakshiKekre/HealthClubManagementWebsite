package com.example.healthclub.repo;

import com.example.healthclub.entity.Schedule;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepo extends MongoRepository<Schedule, String> {


}