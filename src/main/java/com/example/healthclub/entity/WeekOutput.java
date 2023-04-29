package com.example.healthclub.entity;

import lombok.Getter;
import lombok.Setter;

//public class WeekOutput {
////    @Getter@Setter
////    private int month;
////    @Getter@Setter
////    private long count;
////    // constructors, getters, and setters
//}

public class WeekOutput {

    private int month;
    private long count;

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    private int year;

    public WeekOutput() {}

    public WeekOutput(int month, long count) {
        this.month = month;
        this.count = count;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }

}