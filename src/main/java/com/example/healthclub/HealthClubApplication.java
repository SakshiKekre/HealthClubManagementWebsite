package com.example.healthclub;


import com.example.healthclub.repository.LoginRepo;
import com.example.healthclub.service.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class HealthClubApplication {

  @Autowired
  LoginRepository loginRepository;

    public static void main(String[] args) {
        SpringApplication.run(HealthClubApplication.class, args);
    }

}


