package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("registration")
public class Registration {
    @Id
    @Getter
    @Setter
    private String registrationNumber;
    @Getter
    @Setter
    private String fName;
    @Getter
    @Setter
    private String lName;
    @Getter
    @Setter
    private String age;
    @Getter
    @Setter
    private String phone;
    @Getter
    @Setter
    private String email;
    @Getter
    @Setter
    private String weight;
    @Getter
    @Setter
    private String height;
    @Getter
    @Setter
    private String eatingHabits; // veg non-veg or both
    @Getter
    @Setter
    private String address;
    @Getter
    @Setter
    private String branch;
    @Getter
    @Setter
    private String userName; // to fetch data after registration
    @Getter
    @Setter
    private String classsSchedule;
    @Getter@Setter
    private String membershipType;



}
