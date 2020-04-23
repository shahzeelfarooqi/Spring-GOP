package com.example.GOP.Entities;

import com.example.GOP.Area;
import com.example.GOP.Entities.DemographicData;
import com.example.GOP.Entities.District;
import com.example.GOP.Entities.ElectionData;

import java.util.ArrayList;

public class State extends Area {

    private String type = "Feature Collection";
    private ArrayList<District> districts;
    //private List<District> districtList;

    public State(Integer id, String name, ArrayList<ArrayList<Double>> coordinates, DemographicData demographicData, ElectionData electionData, ArrayList<District> districts) {
        this.districts = districts;
        this.setId(id);
        this.setName(name);
        this.setCoordinates(coordinates);
        this.setDemographicData(demographicData);
        this.setElectionData(electionData);
    }

}

