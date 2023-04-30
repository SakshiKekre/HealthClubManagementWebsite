package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("registration")
public class Registration {
    @Id
    @Getter
    @Setter
    //memberId
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
    private Schedule classsSchedule;
    @Getter@Setter
    private Membership membershipType;
    @Getter@Setter
    private String checkinTime;
    @Getter@Setter
    private String checkoutTime;
    @Getter@Setter
    private Activity activity;

    @Getter
    @Setter
    private String validity;// month,day or year
    @Getter@Setter
    private Membership membership;
    @Getter@Setter
    private Date membershipStartDate;
    @Getter
    @Setter
    //trial or member
    private Boolean enrolled;


}
