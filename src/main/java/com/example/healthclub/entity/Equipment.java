package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("Equipment")
public class Equipment {
    @Id@Getter@Setter
    String machineId;
    @Setter@Getter
    String machineName;
    @Getter@Setter
    Date procurementDate;
    @Getter@Setter
    Location location;
}
