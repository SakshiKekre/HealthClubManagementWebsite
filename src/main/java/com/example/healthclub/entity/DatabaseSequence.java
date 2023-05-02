package com.example.healthclub.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "database_sequences")
@Data
@NoArgsConstructor
@AllArgsConstructor
// Spring stereotype a
public class DatabaseSequence {

    @Id
    private String id;

    @Field("sequence_number")

    private String seq;

    //getters and setters omitted
}