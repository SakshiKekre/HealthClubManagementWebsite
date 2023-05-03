package com.example.healthclub.repo;

import com.example.healthclub.entity.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepo extends MongoRepository<Employee, String> {
}
