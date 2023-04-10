package com.example.healthclub.repository;

import com.example.healthclub.entity.Membership;
import com.example.healthclub.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;


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


}
