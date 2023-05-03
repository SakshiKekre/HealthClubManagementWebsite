package com.example.healthclub.service;

import com.example.healthclub.entity.Membership;
import com.example.healthclub.entity.RegistrationByMonth;
import com.example.healthclub.repo.MembershipRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class MembershipService {
    @Autowired
    MembershipRepo membershipRepo;


    public Membership addMembership(Membership membership) {
        return membershipRepo.save(membership);
    }

    public void deleteMembership(String type) {
        membershipRepo.deleteById(type);
    }

    public List<Membership> getMembershipData() {
        List<Membership> list= membershipRepo.findAll();
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
