package com.example.healthclub.service;

import com.example.healthclub.entity.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeService extends MongoRepository<Employee, String> {
}
