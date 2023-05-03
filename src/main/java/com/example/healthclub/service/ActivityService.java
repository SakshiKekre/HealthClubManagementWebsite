package com.example.healthclub.service;

import com.example.healthclub.entity.Activity;
import com.example.healthclub.repo.ActivityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class ActivityService {
    @Autowired
    ActivityRepo activityRepo;
    public String addActivity(Activity a) {

        //a.setActivityStartTime(LocalDate.now());
        activityRepo.save(a);
        return "activity added successfully";
    }
    public List<Activity> getAllActivities(String regNum) {
        System.out.println("reg num in ****"+regNum);
        return activityRepo.getAllActivities(regNum);
    }

    public List<Activity> getACtivityByPeriod(String regNum,String period) {
        //Date date = new Date();
        LocalDate endDate = LocalDate.now();

        // Get the date 30 days ago
        LocalDate startDate = endDate.minusDays(Long.parseLong(period));

        return activityRepo.getActivityByPeriod( startDate, endDate,regNum);
    }
}
