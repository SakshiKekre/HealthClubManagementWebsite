package com.example.healthclub.repository;

import com.example.healthclub.entity.Registration;
import com.example.healthclub.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

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

}
