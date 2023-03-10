package com.example.healthclub.controller;

import com.example.healthclub.entity.Location;
import com.example.healthclub.repository.LoginRepo;
import com.example.healthclub.service.LocationRepository;
import com.example.healthclub.service.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @Autowired
    LocationRepository loc;

    @PostMapping("/addLocation")
    public String addLocation(@RequestBody Location l){
        loc.save(l);
        return "Added Successfully";
    }

    @GetMapping("/findAllLocations")
    public List<Location> findAllLocations() {
        return loc.findAll();
    }

    @DeleteMapping("/deleteLocation/{id}")
    public String deleteLocationById(@PathVariable String id){
        loc.deleteById(id);
        return "Deleted Successfully";
    }

    @GetMapping("/findLocation/{id}")
    public Optional<Location> findLocationByID(@PathVariable String id){
        return loc.findById(id);
    }

}
