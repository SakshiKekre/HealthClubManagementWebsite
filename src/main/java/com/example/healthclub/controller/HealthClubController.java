package com.example.healthclub.controller;


import com.example.healthclub.entity.*;
import com.example.healthclub.repository.LoginRepo;
import com.example.healthclub.repository.MembershipRepository;
import com.example.healthclub.repository.RegistrationRepository;
import com.example.healthclub.repository.ScheduleRepository;
import com.example.healthclub.service.EquipmentRepository;
import com.example.healthclub.service.GymRepository;

import com.example.healthclub.entity.Location;
import com.example.healthclub.entity.Membership;
import com.example.healthclub.entity.Registration;
import com.example.healthclub.entity.Schedule;
import com.example.healthclub.repository.*;

import com.example.healthclub.service.LocationRepository;
import com.example.healthclub.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.*;

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
    @Autowired
    GymRepository gymRepository;
    @Autowired
    EquipmentRepository equipmentRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/getHealthOfApp")
    public ResponseEntity<String> getHealthOfApp() {
        System.out.println("fffff");
        return new ResponseEntity<>("app is up and running", HttpStatus.OK);
    }
    @GetMapping("/login/{username}/{password}")
    public Login verifyUser(@PathVariable String username, @PathVariable String password) {
        System.out.println("login");
        // loginRepo.addUser("admin1","admin1","admin");
        Login log = loginRepo.findUserByName(username);
        if(log!=null) {
            if(password.equals(log.getPassword())) {
                return log;
            }
            else {
                return null;
            }

        }
        else {
            return null;
        }
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
    public Registration doRegister(@RequestBody Registration r) {
        if(r!=null) {
            loginRepo.addUser(r.getUserName(),r.getPassword(),"member");
            return registrationRepository.doRegister(r);

        }
        else {
            return null;
        }
    }

    @GetMapping("/fetchAllMembers")
    public List<Registration> fetchAllMembers(){
        return registrationRepository.fetchAllMembers();
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


    @GetMapping("/fetchGymInfo")
    public List<Gym> fetchGymInfo(){
        return gymRepository.findAll();
    }

    //check what it returns
    @GetMapping("/fetchGymById")
    public Optional<Gym> fetchGymById(@RequestParam String gymId){
        return gymRepository.findById(gymId);
    }

    @PutMapping("/addGym")
    public String addGymDelete(@RequestBody Gym gym){
        try {
            gymRepository.save(gym);
        }catch(Exception e){
            return "Not saved";
        }
        return "saved";
    }

    //add machine
    @PostMapping("/addMachine")
    public String addMachine(@RequestBody Equipment equipment){
        try{
            equipmentRepository.save(equipment);
            return "Save";
        }catch(Exception e){
            return "Unable to save";
        }
    }

    //get all Machines
    @GetMapping("/fetchAllMachines")
    public List<Equipment> allMachines(){
        return equipmentRepository.findAll();
    }

    @GetMapping("/getMemberByID/{regNumber}")
    public Registration getMemberByID(@PathVariable String regNumber){
        return registrationRepository.getMemberByID(regNumber);
    }

    @GetMapping("/getMemberByEmail/{email}")
    public Registration getMemberByEmail(@PathVariable String email ){
        return registrationRepository.getMemberByEmail(email);
    }

    //get equipment by location
    @GetMapping("/equipmentByLocation")
    public List<Equipment> getEquipmentByLocation(@RequestParam String locationName){
        String decodedParam = null;
        try {
            decodedParam = URLDecoder.decode(locationName, "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return equipmentRepository.findAllByLocationLocationName(decodedParam);
    }




    @GetMapping("/checkinMember")
    public String checkinMember(@RequestBody Registration registration, String checkinTime) {
        employeeRepository.checkinMember(registration,checkinTime);
        return "checkin time update success";
    }
    @GetMapping("/checkoutMember")
    public String checkoutMember(@RequestBody Registration registration, String checkinTime) {
        employeeRepository.checkoutMember(registration,checkinTime);
        return "checkout time update success";
    }

    //analytics
    //Classes and enrollment by day/week
    @Autowired
    RegistrationService registrationService;
//    @GetMapping("/classEnrollAnalyticsByMonth")
//    public HashMap<Integer, Integer> classEnrollByMonth(@RequestParam String startDate){
//
//        LocalDate date = LocalDate.parse(startDate, DateTimeFormatter.ISO_DATE);
//        LocalDate nextYear = date.plusYears(1);
//        String outputDate = nextYear.atStartOfDay().format(DateTimeFormatter.ISO_OFFSET_DATE_TIME);
//
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//        LocalDate localDate = LocalDate.parse(startDate, formatter);
//        Instant instant = localDate.atStartOfDay(ZoneOffset.UTC).toInstant();
//        String isoString = DateTimeFormatter.ISO_INSTANT.format(instant);
//        System.out.println("dates sending to aggregate: "+isoString+" "+outputDate);
//
//        List<RegistrationByMonth> monthCounts = registrationService.countOrdersByMonth(isoString, outputDate);
//        HashMap<Integer, Integer> map = new HashMap<>();
//        for (RegistrationByMonth monthCount : monthCounts) {
////            monthCount.setYear();
//            map.put(monthCount.getMonth(), monthCount.getCount());
//
//        }
//        return map;
//    }

    @GetMapping("/classEnrollAnalyticsByMonth")
    public HashMap<Integer, Integer> classEnrollByMonth(){
        List<RegistrationByMonth> monthCounts = registrationService.countOrdersByMonth();
        HashMap<Integer, Integer> map = new HashMap<>();
        for (RegistrationByMonth monthCount : monthCounts) {
            map.put(monthCount.getMonth(), monthCount.getCount());
        }
        return map;
    }


    @GetMapping("/classEnrollAnalyticsByWeek")
    public HashMap<Integer, Integer> classEnrollByWeek(){
        HashMap<Integer, Integer> map = new HashMap<>();
        List<RegistrationByWeek> weekCounts = registrationService.countOrdersByWeek();
        for (RegistrationByWeek weekCount : weekCounts) {
            System.out.println("Week " + weekCount.getWeek() + ": " + weekCount.getCountWeek() + " orders");
            map.put(weekCount.getWeek(), weekCount.getCountWeek());

        }
        return map;
    }

    @GetMapping("/classEnrollAnalyticsByYear")
    public HashMap<Integer, Integer> classEnrollByYear(){
        HashMap<Integer, Integer> map = new HashMap<>();
        List<RegistrationByYear> weekCounts = registrationService.countOrdersByYear();
        for (RegistrationByYear weekCount : weekCounts) {
            System.out.println("Week " + weekCount.getYear() + ": " + weekCount.getCountYear() + " orders");
            map.put(weekCount.getYear(), weekCount.getCountYear());

        }
        return map;
    }

}
