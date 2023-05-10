package com.example.healthclub.controller;


import com.example.healthclub.entity.*;
import com.example.healthclub.repo.EquipmentRepository;
import com.example.healthclub.repo.GymRepository;
import com.example.healthclub.repo.LocationRepository;
import com.example.healthclub.repo.RegistrationRepo;
import com.example.healthclub.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/healthclub")
@CrossOrigin(origins = "*")
public class HealthClubController {

    @Autowired
    LoginService loginService;
    @Autowired
    MembershipService membershipService;
    @Autowired
    RegistrationService registrationService1;
    @Autowired
    ScheduleService scheduleService;
    @Autowired
    GymRepository gymService;
    @Autowired
    EquipmentRepository equipmentService;

    @Autowired
    EmployeeService employeeService;

    @Autowired
    ActivityService activityService;

    @Autowired
    ClassesService classesService;

    @GetMapping("/getHealthOfApp")
    public ResponseEntity<String> getHealthOfApp() {
        System.out.println("fffff");
         return new ResponseEntity<>("app is up and running", HttpStatus.OK);
    }
    @GetMapping("/login/{username}/{password}")
    public Object verifyUser(@PathVariable String username, @PathVariable String password) {
        System.out.println("login");
       // loginRepo.addUser("admin1","admin1","admin");
        Login log = loginService.findUserByName(username);
        if(log!=null) {
            if(password.equals(log.getPassword())) {
                return log;
            }
            else {
                return "wrong cred";
            }
        }
        else {
            return "wrong cred";
        }
    }

    @PostMapping("/addMembership")
    public String addMembership(@RequestBody Membership m) {
        System.out.println("in add membership");
        if(m!=null) {
            membershipService.addMembership(m);
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
            membershipService.deleteMembership(type);
            return type + " deleted";
        }
        else {
            return "Please enter membership type to be deleted";
        }
    }


    @GetMapping("getMembershipData")
    public List<Membership> getMembershipData() {
        return membershipService.getMembershipData();
    }

    @PostMapping("/doRegister")
    public Registration doRegister(@RequestBody Registration r) {
        if(r!=null) {
            loginService.addUser(r.getUserName(),r.getPassword(),"member");
            return registrationService1.doRegister(r);

        }
        else {
            return null;
        }
    }

    @GetMapping("/fetchAllMembers")
    public List<Registration> fetchAllMembers(){
        return registrationService1.fetchAllMembers();
    }
    @GetMapping("/getMemberByID/{regNumber}")
    public Registration getMemberByID(@PathVariable String regNumber){
        return registrationService1.getMemberByID(regNumber);
    }

    @GetMapping("/getMemberByEmail/{email}")
    public Registration getMemberByEmail(@PathVariable String email ){
        return registrationService1.getMemberByEmail(email);
    }


    @DeleteMapping("/deleteRegistration/{regNumber}")
    public String deleteRegistration(@PathVariable String regNumber) {
        if(regNumber!=null && !regNumber.isEmpty()) {
            registrationService1.deleteRegister(regNumber);
            return regNumber + "deleted successfully";
        }
        else {
            return "Can't delete registration for now please try after some time";
        }
    }

    @GetMapping("/getClassesByLoc/{locationId}")
    public List<Classes> getClassesByLoc(@PathVariable String locationId) {
        return classesService.getClassesByLoc(locationId);
    }

    @PostMapping("/addClasses")
    public Classes getClassesByLoc(@RequestBody Classes c) {
        return classesService.addClasses(c);
    }


    @PostMapping("/addSchedule")
    public String addSchedule(@RequestBody Schedule s) {
        System.out.println("in the add schedule method");
        if(s!=null) {
            scheduleService.addSchedule(s);
            return "schedule added successfully";
        }
        else {
            return "failed to add schedule due to data validation error";
        }
    }

    @DeleteMapping("/deleteSchedule/{id}")
    public String deleteSchedule(@PathVariable String id) {
        if(id!=null) {
            scheduleService.deleteSchedule(id);
            return "schedule deleted successfully";
        }
        else {
            return "delete schedule failed due to data validation error";
        }
    }

    @GetMapping("/getAllScheduleForMember/{regNumber}")
    public List<Schedule> getAllScheduleForMember(@PathVariable String regNumber) {
        return scheduleService.getAllScheduleForMember(regNumber);
    }

    @GetMapping("/getAllScheduleData")
    public List<Schedule> getAllScheduleData() {
        return scheduleService.getAllSchedule();
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
        return gymService.findAll();
    }

    //check what it returns
    @GetMapping("/fetchGymById")
    public Optional<Gym> fetchGymById(@RequestParam String gymId){
        return gymService.findById(gymId);
    }

    @PutMapping("/addGym")
    public String addGymDelete(@RequestBody Gym gym){
        try {
            gymService.save(gym);
        }catch(Exception e){
            return "Not saved";
        }
        return "saved";
    }

    //add machine
    @PostMapping("/addMachine")
    public String addMachine(@RequestBody Equipment equipment){
        try{
            equipmentService.save(equipment);
            return "Save";
        }catch(Exception e){
            return "Unable to save";
        }
    }

    //get all Machines
    @GetMapping("/fetchAllMachines")
    public List<Equipment> allMachines(){
        return equipmentService.findAll();
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
        return equipmentService.findAllByLocationLocationName(decodedParam);
    }

    @PostMapping("/checkinMember")
    public String checkinMember(@RequestBody Registration registration) {
        registration.setCheckinDate(new Date());
        employeeService.checkinMember(registration, String.valueOf(new Date()));
        return "checkin time update success";
    }
    @PostMapping("/checkoutMember")
    public String checkoutMember(@RequestBody Registration registration) {
        registration.setCheckoutDate(new Date());
        employeeService.checkoutMember(registration, String.valueOf(new Date()));
        return "checkout time update success";
    }

    /// to check if the user has checked in or not
    @GetMapping("/isCheckedin")
    public boolean isCheckedin(@RequestParam String email){
        Registration user = registrationService.findUserByEmail(email);
        if(user.getCheckinDate().compareTo(user.getCheckoutDate())>0)
            return true;
        return false;
    }


    //////
    //// front end to send reg number in activity obj
    @PostMapping("/addActivity")
    public String addActivity(@RequestBody Activity a) {
        System.out.println("in the add actvitiy method");
        if(a!=null) {
            activityService.addActivity(a);
            return "activity added successfully";
        }
        else {
            return "failed to add activity due to data validation error";
        }
    }

    @GetMapping("/getAllActivities/{regNum}")
    public List<Activity> getAllActivities(@PathVariable String regNum) {
        System.out.println("in the get all actvitiy method"+regNum);
        if(regNum!=null) {
            return activityService.getAllActivities(regNum);

        }
        else {
            return null;
        }
    }

    @GetMapping("/getAllActivityByPeriod/{regNum}/{duration}")
    public List<Activity> getAllActivityByPeriod(@PathVariable String regNum,@PathVariable String duration) {
        if(regNum!=null) {
            return activityService.getACtivityByPeriod(regNum,duration);

        }
        else {
            return null;
        }
    }

    //analytics
    //Classes and enrollment by day/week
    @Autowired
    RegistrationRepo registrationService;
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
        List<RegistrationByMonth> monthCounts = registrationService1.getMonthRegistration();
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
