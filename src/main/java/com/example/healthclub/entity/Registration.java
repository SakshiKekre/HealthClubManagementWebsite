package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("registration")
public class Registration {

    @Transient
    public static final String SEQUENCE_NUMBER = "sequence_number";
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
    @Getter@Setter
    private String userName;
    @Getter@Setter
    private String password;
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
    private String checkinTime;
    @Getter@Setter
    private Date checkinDate;
    @Getter@Setter
    private String checkoutTime;
    @Getter@Setter
    private Date checkoutDate;
    @Getter@Setter
    private Activity activity;
    @Getter@Setter
    private Location location;

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
