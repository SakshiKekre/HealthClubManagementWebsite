package com.example.healthclub.service;

import com.example.healthclub.entity.Login;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface LoginService extends MongoRepository<Login, String> {

   /* @Query("{name:'?0'}")
    GroceryItem findItemByName(String name);

    @Query(value="{category:'?0'}", fields="{'name' : 1, 'quantity' : 1}")
    List<GroceryItem> findAll(String category);*/

   /*public String addUser(String uName,String pass,String uType);*/
    public long count();

}