package com.example.healthclub.repository;

import com.example.healthclub.entity.Membership;
import com.example.healthclub.entity.Registration;
import com.example.healthclub.entity.WeekOutput;
import com.example.healthclub.entity.WeeklyRegistrationCount;
import com.example.healthclub.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.TimeZone;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.query.Criteria.where;


@Component
public class MembershipRepository   {
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


    public List<WeekOutput> fetchYearAnalytics(){
       // Query query = null;
        //registration.setCheckinTime(checkinTime);
//        Query query = new Query(Criteria.where("membershipStartDate").lte("2024-10-10").gte("2020-10-10"));
        try {
            LocalDate startDate = LocalDate.of(2020, Month.OCTOBER, 11);
            LocalDate endDate = LocalDate.of(2024, Month.OCTOBER, 10);
            Criteria criteria = new Criteria().andOperator(
//                    where("warehouse").is(warehouse),
                    where("membershipStartDate").gte(startDate),
                    where("membershipStartDate").lte(endDate)
            );

            ProjectionOperation dateProjection = project()
//                    .and("amount").as("amount")
                    .and("membershipStartDate").extractYear().as("year")
                    .and("membershipStartDate").extractMonth().as("month");

            GroupOperation groupBy = group("year", "month")
//                    .sum("amount").as("total")
                    .count().as("count");

            Aggregation agg = newAggregation(
                    match(criteria),
                    dateProjection,
                    groupBy,
                    sort(Sort.Direction.ASC, "year", "month")
            );

//Convert the aggregation result into a List
            AggregationResults<WeekOutput> groupResults = mongoTemplate.aggregate(agg, Registration.class, WeekOutput.class);
            return  groupResults.getMappedResults();
            // Define the start and end dates of the period you want to analyze
//            LocalDate startDate = LocalDate.of(2020, Month.OCTOBER, 10);
//            LocalDate endDate = LocalDate.of(2024, Month.OCTOBER, 10);
//
//// Define the aggregation pipeline stages
//            MatchOperation match = Aggregation.match(
//                    Criteria.where("membershipStartDate").gte(startDate).lte(endDate));
//            GroupOperation groupByWeek = Aggregation.group(
//                            Aggregation.week("membershipStartDate"), Aggregation.year("membershipStartDate"))
//                    .count().as("count");
//            SortOperation sortByWeek = Aggregation.sort(Sort.Direction.ASC, "_id.week").and(Sort.Direction.ASC, "_id.year");
//
//// Execute the aggregation pipeline
//            Aggregation aggregation = Aggregation.newAggregation(match, groupByWeek, sortByWeek);
//            List<WeeklyRegistrationCount> result = mongoTemplate.aggregate(aggregation, Registration.class, WeeklyRegistrationCount.class).getMappedResults();


//            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
//            Date startDate = formatter.parse("2020-10-10");
//            Date endDate = formatter.parse("2024-10-10");
//            Aggregation agg = newAggregation(
//                    group("month").count().as("count"),
//                    project("count").and("month").previousOperation()
//            );
//            AggregationResults<WeekOutput> results = mongoTemplate.aggregate(
//                    agg, "registration", WeekOutput.class);
//
//            return results.getMappedResults();
//            LocalDate localStartDate = startDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
//            LocalDate localEndDate = endDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
//            AggregationExpression isoDateString = DateOperators.DateToString.dateOf("date").toString("%Y-%m-%dT%H:%M:%S.%LZ");
//            AggregationExpression isoDate = Aggregation.project("isoDateString").and(isoDateString).as("isoDate");

//            SimpleDateFormat isoDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//            isoDateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
//
//            // format the date as an ISODate string
//            String isoDateString = isoDateFormat.format(startDate);
//            String isoEndDate = isoDateFormat.format(endDate);
//
//            GroupOperation groupByWeek = Aggregation.group("membershipStartDate".count().as("count");
//            MatchOperation matchDateRange = Aggregation.match(Criteria.where("membershipStartDate").gte(startDate).lte(endDate));
////            SortOperation sortByWeek = Aggregation.sort(Sort.Direction.ASC, "_id");
////            SortOperation sortByCount = Aggregation.sort(Sort.Direction.DESC, "count");
//            Aggregation aggregation = Aggregation.newAggregation(matchDateRange, groupByWeek);
//            return mongoTemplate.aggregate(aggregation, Registration.class, WeekOutput.class).getMappedResults();



        }catch(Exception e){
            e.printStackTrace();
            return null;
        }

    }



}
