package com.example.backend.model;

import java.math.BigInteger;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String modelno;
   
    private Date date;  
    private BigInteger phonenumber;
    private String problem;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getModelno() {
        return modelno;
    }
    public void setModelno(String modelno) {
        this.modelno = modelno;
    }
   
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public BigInteger getPhonenumber() {
        return phonenumber;
    }
    public void setPhonenumber(BigInteger phonenumber) {
        this.phonenumber = phonenumber;
    }
    
    public String getProblem() {
        return problem;
    }
    public void setProblem(String problem) {
        this.problem = problem;
    }

    
}
