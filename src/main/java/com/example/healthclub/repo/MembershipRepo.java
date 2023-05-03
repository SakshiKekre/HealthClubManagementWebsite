package com.example.healthclub.repo;

import com.example.healthclub.entity.Membership;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface MembershipRepo extends MongoRepository<Membership,String> {
}
