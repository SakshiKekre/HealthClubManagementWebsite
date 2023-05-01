package com.example.healthclub.repository;

import com.example.healthclub.entity.Registration;
import com.example.healthclub.entity.RegistrationByMonth;
import com.example.healthclub.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

@Component
public class RegistrationRepository{
    @Autowired
    RegistrationService registrationService;

    public Registration doRegister(Registration r) {
        return registrationService.save(r);
    }
    public void deleteRegister(String regNumber) {
        registrationService.deleteById(regNumber);
    }

    public List<Registration> fetchAllMembers() {
        return registrationService.findAll();
    }

}
