package com.example.healthclub.service;

import com.example.healthclub.entity.DatabaseSequence;
import com.example.healthclub.entity.Registration;
import com.example.healthclub.entity.RegistrationByMonth;
import com.example.healthclub.repo.RegistrationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.MongoOperations;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;


import java.util.List;
import java.util.Objects;

@Component
public class RegistrationService {
    @Autowired
    RegistrationRepo registrationRepo;

    @Autowired
    private MongoOperations operations;
    public Registration doRegister(Registration r) {
        r.setRegistrationNumber(String.valueOf(generateSequence(Registration.SEQUENCE_NUMBER)));
        return registrationRepo.save(r);
    }
    public void deleteRegister(String regNumber) {
        registrationRepo.deleteById(regNumber);
    }

    public List<Registration> fetchAllMembers() {
        return registrationRepo.findAll();
    }
    public Registration getMemberByID(String regNumber) {
        return registrationRepo.findUserById(regNumber);
    }

    public Registration getMemberByEmail(String email) {
        return registrationRepo.findUserByEmail(email);
    }

    public int generateSequence(String seqName) {
        final Query q = new Query(Criteria.where("registrationNumber").is(seqName));
        // increment the sequence number by 1
        // "sequence" should match the attribute value specified in DbSequence.java class.
        final Update u = new Update().inc("seq", 1);
        final DatabaseSequence counter = operations.findAndModify(q, u,
                FindAndModifyOptions.options().returnNew(true).upsert(true), DatabaseSequence.class);

        return !Objects.isNull(counter) ? Integer.parseInt(counter.getSeq()) : 1;
    }

    Aggregation agg = newAggregation(
            project("membershipStartDate"),
            project("month").andExpression("{ $month: \"$membershipStartDate\" }").as("month"),
            group("month").count().as("count")
    );



    public List<RegistrationByMonth> getMonthRegistration(){
        AggregationResults<RegistrationByMonth> results = operations.aggregate(agg, Registration.class, RegistrationByMonth.class);
        List<RegistrationByMonth> mappedResults = results.getMappedResults();
        System.out.println(mappedResults);
        return mappedResults;
    }

}
