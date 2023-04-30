package com.example.healthclub.repository;

import com.example.healthclub.entity.Membership;
import com.example.healthclub.entity.RegistrationByMonth;
import com.example.healthclub.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import java.util.List;

import org.springframework.stereotype.Component;


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
//        TemporalField weekOfYear = WeekFields.of(java.util.Locale.getDefault()).weekOfWeekBasedYear();
//        MatchOperation match = Aggregation.match(Criteria.where("enrolled").is(true));
//        ProjectionOperation project = Aggregation.project("membershipStartDate")
//                .andExpression("isoWeek(membershipStartDate)").as("weekOfYear");
//        Aggregation aggregation = Aggregation.newAggregation(match, project,
//                Aggregation.group("weekOfYear").count().as("count"));
//
//        TypedAggregation<Registration> typedAggregation = new TypedAggregation<>((Class) Registration.class, aggregation);
//
//        AggregationResults<RegistrationByMonth> results = mongoTemplate.aggregate(typedAggregation,
//                RegistrationByMonth.class);
//
//        return results.getMappedResults();

        return null;
    }






}
