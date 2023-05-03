package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document("activity")
public class Activity {
    @Id
    @Getter@Setter
    private String activityId;
    @Getter@Setter
    private String registrationNumber;
    @Getter@Setter
    private String activityType;
    @Getter@Setter
    private LocalDate activityPerformedDate;

    @Getter@Setter
    private String activityStartTime;
    @Getter@Setter
    private String activityEndTime;
    @Getter@Setter
    private Location location;
    @Getter@Setter
    private String equipment;

}
