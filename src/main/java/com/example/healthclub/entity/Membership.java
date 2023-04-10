package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document("membership")
@Component
public class Membership {

    @Id
    @Getter
    @Setter
    private String membershipType;
    @Getter
    @Setter
    private String membershipDesc;
    @Getter
    @Setter
    private String membershipFees;
    @Getter
    @Setter
    private String validity;// month,day or year

    @Getter@Setter
    private String memberId;
    @Getter@Setter
    private Membership membership;
    @Getter@Setter
    private String membershipLastDay;
    @Getter
    @Setter
    private Boolean enrolled;
    @Getter
    @Setter
    private Activity activity;


}
