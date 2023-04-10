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
    private String classs;
    //should be int type right
    @Getter@Setter
    private String capacity;
    @Getter@Setter
    private String instructor;
    @Getter@Setter
    private String membership;

}
