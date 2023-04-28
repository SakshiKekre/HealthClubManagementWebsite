package com.example.healthclub.repository;

import com.example.healthclub.entity.Schedule;
import com.example.healthclub.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ScheduleRepository {
    @Autowired
    ScheduleService scheduleService;
    public Schedule addSchedule(Schedule s) {
        return scheduleService.save(s);
    }

    public void deleteSchedule(String s) {
        scheduleService.deleteById(s);
    }

    public List<Schedule> getAllSchedule() {
        return scheduleService.findAll();
    }

    //class search by location
}
