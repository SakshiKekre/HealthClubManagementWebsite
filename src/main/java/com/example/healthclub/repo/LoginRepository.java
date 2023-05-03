package com.example.healthclub.repo;

import com.example.healthclub.entity.Login;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

@Service
public interface LoginRepository extends MongoRepository<Login, String> {

    @Query("{userName:'?0'}")
    Login findUserByName(String name);

   /* @Query(value="{category:'?0'}", fields="{'name' : 1, 'quantity' : 1}")
    List<GroceryItem> findAll(String category);*/

   /*public String addUser(String uName,String pass,String uType);*/
    public long count();

}