package com.example.healthclub.service;

import com.example.healthclub.entity.Schedule;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleService extends MongoRepository<Schedule, String> {
}