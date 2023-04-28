package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Gym")
public class Gym {
    @Id@Getter@Setter
    String gymId;
    @Getter@Setter
    Location[] loc;
    @Getter@Setter
    String name;
}
