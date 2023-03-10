package com.example.healthclub.controller;

import com.example.healthclub.repository.LoginRepo;
import com.example.healthclub.service.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/healthclub")
@CrossOrigin(origins = "*")
public class HealthClubController {

    @Autowired
    LoginRepo loginRepo;

    @GetMapping("/getHealthOfApp")
    public ResponseEntity<String> getData() {
        System.out.println("fffff");

        loginRepo.addUser("","","");
        return new ResponseEntity<>("app is up and running", HttpStatus.OK);
    }

}
