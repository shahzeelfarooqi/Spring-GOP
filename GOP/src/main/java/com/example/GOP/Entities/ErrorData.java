package com.example.GOP.Entities;

import com.example.GOP.ErrorType;

import java.util.HashMap;

public class ErrorData {
    public static HashMap<ErrorType, ErrorData> allErrors;

    public ErrorData(){

    }

    public ErrorData(int id, ErrorType type, int precinctID, String comment) {
        this.id = id;
        this.type = type;
        this.precinctID = precinctID;
        this.comment = comment;
    }

    private int id;

    private ErrorType type;

    private int precinctID;

    private String comment;

    public static ErrorData getErrorById(int errorID) {
        //find the error based on this id and return the error
        return new ErrorData();
    }


}
