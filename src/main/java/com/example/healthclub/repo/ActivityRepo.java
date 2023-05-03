package com.example.healthclub.repo;

import com.example.healthclub.entity.Activity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ActivityRepo extends MongoRepository<Activity, String> {

    @Query("{registrationNumber: ?0}")
    List<Activity> getAllActivities(String regNum);
    @Query("{'activityPerformedDate': {'$gte': ?0, '$lte': ?1},'registrationNumber': ?2}")
    List<Activity> getActivityByPeriod(LocalDate startDate, LocalDate endDate,String regNumber);
}
