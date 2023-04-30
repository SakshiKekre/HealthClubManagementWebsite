package com.example.healthclub.service;

import com.example.healthclub.entity.Registration;
import com.example.healthclub.entity.RegistrationByMonth;
import com.example.healthclub.entity.RegistrationByWeek;
import com.example.healthclub.entity.RegistrationByYear;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;



@Service
public interface RegistrationService extends MongoRepository<Registration,String> {
//    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//    Date date = dateFormat.parse(bsonDateString);
    @Aggregation(pipeline = {
            "{ $group : { _id : { $month : '$membershipStartDate' }, count : { $sum : 1 } } }",
            "{ $project : { month : '$_id', count : 1, _id : 0 } }"
    })
    List<RegistrationByMonth> countOrdersByMonth();


    @Aggregation(pipeline = {
            "{ $group : { _id : { $week : '$membershipStartDate' }, countWeek : { $sum : 1 } } }",
            "{ $project : { week : '$_id', countWeek : 1, _id : 0 } }"
    })
    List<RegistrationByWeek> countOrdersByWeek();

    @Aggregation(pipeline = {
            "{ $group : { _id : { $year : '$membershipStartDate' }, countYear : { $sum : 1 } } }",
            "{ $project : { year : '$_id', countYear : 1, _id : 0 } }"
    })
    List<RegistrationByYear> countOrdersByYear();

}
