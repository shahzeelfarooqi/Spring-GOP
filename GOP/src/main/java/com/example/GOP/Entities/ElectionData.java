package com.example.GOP.Entities;

import java.util.HashMap;

public class ElectionData {

    public ElectionData() {

    }

    public ElectionData(HashMap<String, Integer> p16, HashMap<String, Integer> c16, HashMap<String, Integer> c18) {
        this.p16 = p16;
        this.c16 = c16;
        this.c18 = c18;
    }

    private HashMap<String, Integer> p16;

    private HashMap<String, Integer> c16;

    private HashMap<String, Integer> c18;

    public HashMap<String, Integer> getP16() {
        return p16;
    }

    public void setP16(HashMap<String, Integer> p16) {
        this.p16 = p16;
    }

    public HashMap<String, Integer> getC16() {
        return c16;
    }

    public void setC16(HashMap<String, Integer> c16) {
        this.c16 = c16;
    }

    public HashMap<String, Integer> getC18() {
        return c18;
    }

    public void setC18(HashMap<String, Integer> c18) {
        this.c18 = c18;
    }
}
