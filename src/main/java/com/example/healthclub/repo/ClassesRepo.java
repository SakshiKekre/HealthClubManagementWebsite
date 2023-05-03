package com.example.healthclub.repo;

import com.example.healthclub.entity.Classes;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ClassesRepo extends MongoRepository<Classes,String> {
    @Query("{locationId:?0,capacity: {$gt: 0}}")
    List<Classes> getAllClassesByLoc(String locationId);
}
