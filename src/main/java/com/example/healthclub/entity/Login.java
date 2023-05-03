package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("login")
public class Login {


    @Id
    @Getter@Setter
    private String userName;
    @Getter@Setter
    private String password;
    @Getter@Setter
    private String userType;

    public Login(String userName, String password, String userType) {
        this.userName = userName;
        this.password = password;
        this.userType = userType;
    }
}
