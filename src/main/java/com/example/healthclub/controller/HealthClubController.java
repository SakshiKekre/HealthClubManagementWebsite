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
        if(l.getLocationName().length()==0 || l.getAddress().length()==0)
            return "Please give all values";
        Location locAdded = loc.save(l);
        if(locAdded == null)
            return "Failed";
        return "Added Successfully";
    }

    @GetMapping("/findAllLocations")
    public List<Location> findAllLocations() {
        return loc.findAll();
    }

    @DeleteMapping("/deleteLocation/{id}")
    public String deleteLocationById(@PathVariable String id){
        if(findLocationByID(id)==null)
            return "Invalid entry";
        loc.deleteById(id);
        return "Deleted Successfully";
    }

    @GetMapping("/findLocation/{id}")
    public Location findLocationByID(@PathVariable String id) {
        Location location = null;
        if (loc.findById(id) != null)
            location = loc.findById(id).get();
        return location;
    }

}
