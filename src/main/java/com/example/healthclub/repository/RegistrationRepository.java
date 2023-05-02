package com.example.healthclub.repository;

import com.example.healthclub.entity.DatabaseSequence;
import com.example.healthclub.entity.Registration;
import com.example.healthclub.entity.RegistrationByMonth;
import com.example.healthclub.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

@Component
public class RegistrationRepository{
    @Autowired
    RegistrationService registrationService;

    @Autowired
    private MongoOperations operations;
    public Registration doRegister(Registration r) {
        r.setRegistrationNumber(String.valueOf(generateSequence(Registration.SEQUENCE_NUMBER)));

        return registrationService.save(r);
    } public void deleteRegister(String regNumber) {
        registrationService.deleteById(regNumber);
    }

    public List<Registration> fetchAllMembers() {
        return registrationService.findAll();
    }

    public Registration getMemberByID(String regNumber) {
        return registrationService.findUserById(regNumber);
    }

    public Registration getMemberByEmail(String email) {
        return registrationService.findUserByEmail(email);
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


}
