package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("employee")
public class Employee {
@Id
    @Getter@Setter
    private String employeeId;

    @Getter@Setter
    private String location;
    @Getter
    @Setter
    private String venue;
    @Getter@Setter
    private Registration member;




}
