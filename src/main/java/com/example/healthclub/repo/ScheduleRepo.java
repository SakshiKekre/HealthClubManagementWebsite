package com.example.healthclub.repo;

import com.example.healthclub.entity.Schedule;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepo extends MongoRepository<Schedule, String> {

    @Query("{regNumber: ?0}")
    List<Schedule> getAllScheduleForMember(String regNumber);


}