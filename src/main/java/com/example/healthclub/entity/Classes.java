package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Classes")
public class Classes {
    @Id
    @Getter
    @Setter
    private String classId;
    @Getter@Setter
    private String timeSlots;
    @Getter@Setter
    private String className;
    // comma seperated days string
    @Getter@Setter
    private String availableDays;
    @Getter@Setter
    private String location;
    @Getter@Setter
    private String locationId;
    @Getter@Setter
    private int capacity;
    @Getter@Setter
    private String instructor;
    @Getter@Setter
    private String membership;
}
