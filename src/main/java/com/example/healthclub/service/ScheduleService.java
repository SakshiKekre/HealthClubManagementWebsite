package com.example.healthclub.service;

import com.example.healthclub.entity.Classes;
import com.example.healthclub.entity.Schedule;
import com.example.healthclub.repo.ScheduleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ScheduleService {
    @Autowired
    ScheduleRepo scheduleRepo;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Schedule addSchedule(Schedule s) {
        Schedule sc= scheduleRepo.save(s);
        if(sc!=null) {
            updateClassCapacity(sc);
            return scheduleRepo.save(s);
        }
        else {
            return null;
        }
    }
    public String updateClassCapacity (Schedule s) {
        // registration.setCheckoutTime(checkoutTime);
        Query query = new Query(Criteria.where("classId").is(s.getClassId()));
        Update update = new Update().inc("capacity", -1);
        mongoTemplate.updateFirst(query, update, Classes.class);
        return "";
    }
    public void deleteSchedule(String s) {
        scheduleRepo.deleteById(s);
    }

    public List<Schedule> getAllSchedule() {
        return scheduleRepo.findAll();
    }

    public List<Schedule> getAllScheduleForMember(String regNumber){
        return scheduleRepo.getAllScheduleForMember(regNumber);
    }

    //class search by location
}
