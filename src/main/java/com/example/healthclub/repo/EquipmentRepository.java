package com.example.healthclub.repo;

import com.example.healthclub.entity.Equipment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EquipmentRepository extends MongoRepository<Equipment, String> {
    public List<Equipment> findAllByLocationLocationName(String locationName);
}
