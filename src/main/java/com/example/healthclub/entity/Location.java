package com.example.healthclub.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("location")
public class Location {
    @Id
    private String locationID;
    private String address;

    public Location(String locationID, String address){
        this.locationID = locationID;
        this.address = address;
    }

    public void setLocationID(String locationID){
        this.locationID = locationID;
    }

    public String getLocationID(){
        return locationID;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public String getAddress(){
        return address;
    }
}
