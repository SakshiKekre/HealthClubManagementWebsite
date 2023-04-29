package com.example.healthclub.repository;

import com.example.healthclub.entity.Registration;
import com.example.healthclub.service.EmployeeService;
import com.example.healthclub.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
public class EmployeeRepository  {
    @Autowired
    EmployeeService employeeService;
    @Autowired
    RegistrationService registrationService;

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
