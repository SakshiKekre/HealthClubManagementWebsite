package com.example.healthclub.service;

import com.example.healthclub.entity.Classes;
import com.example.healthclub.repo.ClassesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ClassesService {
 @Autowired
    ClassesRepo classesRepo;

    public List<Classes> getClassesByLoc(String locationId) {
        return classesRepo.getAllClassesByLoc(locationId);
    }

    public Classes addClasses(Classes c){
        return classesRepo.save(c);
    }

}
