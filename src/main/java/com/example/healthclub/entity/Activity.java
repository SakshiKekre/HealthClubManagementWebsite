package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("activity")
public class Activity {
    @Id
    @Getter@Setter
    private String activityId;
    @Getter@Setter
    private String activityType;
    @Getter@Setter
    private Date activityStartTime;
    @Getter@Setter
    private Date activityEndTime;


}
