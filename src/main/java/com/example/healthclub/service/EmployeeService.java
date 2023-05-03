package com.example.healthclub.service;

import com.example.healthclub.entity.Registration;
import com.example.healthclub.repo.EmployeeRepo;
import com.example.healthclub.repo.RegistrationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

@Component
public class EmployeeService {
    @Autowired
    EmployeeRepo employeeRepo;
    @Autowired
    RegistrationRepo registrationRepo;

    @Autowired
    private MongoTemplate mongoTemplate;


    public String checkinMember(Registration registration,String checkinTime){
        //registration.setCheckinTime(checkinTime);
        Query query = new Query(Criteria.where("_id").is(registration.getRegistrationNumber()));
        Update update = new Update().set("checkinTime", checkinTime);
        mongoTemplate.updateFirst(query, update, Registration.class);

        return "checkin time update success";
    }

    public String checkoutMember (Registration registration,String checkoutTime) {
       // registration.setCheckoutTime(checkoutTime);
        Query query = new Query(Criteria.where("_id").is(registration.getRegistrationNumber()));
        Update update = new Update().set("checkoutTime", checkoutTime);
        mongoTemplate.updateFirst(query, update, Registration.class);
        return "";
    }


    public String signUpFreeTrail (Registration registration) {
        return "";
    }
    public String viewDashboards() {
        return "";
    }

}
