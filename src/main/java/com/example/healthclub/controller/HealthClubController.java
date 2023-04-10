package com.example.healthclub.controller;

import com.example.healthclub.entity.Location;
import com.example.healthclub.entity.Membership;
import com.example.healthclub.entity.Registration;
import com.example.healthclub.entity.Schedule;
import com.example.healthclub.repository.LoginRepo;
import com.example.healthclub.repository.MembershipRepository;
import com.example.healthclub.repository.RegistrationRepository;
import com.example.healthclub.repository.ScheduleRepository;
import com.example.healthclub.service.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    MembershipRepository membershipRepository;
    @Autowired
    RegistrationRepository registrationRepository;
    @Autowired
    ScheduleRepository scheduleRepository;

    @GetMapping("/getHealthOfApp")
    public ResponseEntity<String> verifyUser() {
        System.out.println("fffff");

        loginRepo.addUser("","","");
        return new ResponseEntity<>("app is up and running", HttpStatus.OK);
    }

    @PostMapping("/addMembership")
    public String addMembership(@RequestBody Membership m) {
        System.out.println("in add membership");
        if(m!=null) {
            membershipRepository.addMembership(m);
            return "membership added";
        }
        else {
            return "Please enter valid data";
        }


    }
    @DeleteMapping("/deleteMembership/{type}")
    public String deleteMemberShip(@PathVariable String type) {
        System.out.println("in delete membership");
        if(type!=null) {
            membershipRepository.deleteMembership(type);
            return type + " deleted";
        }
        else {
            return "Please enter membership type to be deleted";
        }
    }


    @GetMapping("getMembershipData")
    public List<Membership> getMembershipData() {
       return membershipRepository.getMembershipData();
    }

   @PostMapping("/doRegister")
    public String doRegister(@RequestBody Registration r) {
        if(r!=null) {
            registrationRepository.doRegister(r);
            return r.getUserName();
        }
        else {
            return "registration failed try after some time";
        }
    }

    @DeleteMapping("/deleteRegistration/{regNumber}")
    public String deleteRegistration(@PathVariable String regNumber) {
        if(regNumber!=null && !regNumber.isEmpty()) {
            registrationRepository.deleteRegister(regNumber);
            return regNumber + "deleted successfully";
        }
        else {
            return "Can't delete registration for now please try after some time";
        }
    }

    @PostMapping("addSchedule")
    public String addSchedule(@RequestBody Schedule s) {
        System.out.println("in the add schedule method");
        if(s!=null) {
            scheduleRepository.addSchedule(s);
            return "schedule added successfully";
        }
        else {
            return "failed to add schedule due to data validation error";
        }
    }

    @DeleteMapping("/deleteSchedule/{id}")
    public String deleteSchedule(@PathVariable String id) {
        if(id!=null) {
            scheduleRepository.deleteSchedule(id);
            return "schedule deleted successfully";
        }
        else {
            return "delete schedule failed due to data validation error";
        }
    }



    @GetMapping("getAllScheduleData")
    public List<Schedule> getAllScheduleData() {
        return scheduleRepository.getAllSchedule();
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
