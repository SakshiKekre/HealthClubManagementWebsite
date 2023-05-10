package com.example.healthclub.service;

import com.example.healthclub.entity.Equipment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EquipmentService extends MongoRepository<Equipment, String> {
    public List<Equipment> findAllByLocationLocationName(String locationName);
}
