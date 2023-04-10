package com.example.healthclub;


import com.example.healthclub.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class HealthClubApplication {



    public static void main(String[] args) {
        SpringApplication.run(HealthClubApplication.class, args);
    }

}


