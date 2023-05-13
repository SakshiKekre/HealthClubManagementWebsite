package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("schedule")
public class Schedule {
    @Id
    @Getter
    @Setter
    private String scheduleId;
    @Getter@Setter
    private String timeSlot;
    @Getter@Setter
    private String className;
    //to update capacity in classes
    @Getter@Setter
    private String classId;
    @Getter@Setter
    private String regNumber;
   /* @Getter@Setter
    @Field("capacity")
    private int capacity=30;*/
    @Getter@Setter
    private String instructor;
    @Getter@Setter
    private String membership;
    @Getter@Setter
    private String location;
}
