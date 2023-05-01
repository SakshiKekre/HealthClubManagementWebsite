package com.example.healthclub.repository;

import com.example.healthclub.entity.Membership;
import com.example.healthclub.entity.RegistrationByMonth;
import com.example.healthclub.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import java.util.List;

import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Component;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;


@Component
public class MembershipRepository {
    @Autowired
    MembershipService membershipService;


    public Membership addMembership(Membership membership) {
        return membershipService.save(membership);
    }

    public void deleteMembership(String type) {
         membershipService.deleteById(type);
    }

    public List<Membership> getMembershipData() {
        List<Membership> list= membershipService.findAll();
        return list;
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<RegistrationByMonth> getWeeklyRegistrationCount() {
        Aggregation aggregation = newAggregation(
                match(Criteria.where("membershipStartDate").gte("2022-12-31T23:59:59.000Z").lte("2024-12-31T23:59:59.000Z")),
                group("groupFieldName").count().as("count")
        );

        List<RegistrationByMonth> results = mongoTemplate.aggregate(aggregation, "registration",
                RegistrationByMonth.class).getMappedResults();

        return results;
    }






}
