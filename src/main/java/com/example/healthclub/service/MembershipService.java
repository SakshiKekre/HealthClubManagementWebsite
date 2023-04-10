package com.example.healthclub.service;

import com.example.healthclub.entity.Membership;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface MembershipService extends MongoRepository<Membership,String> {
}
