package com.example.GOP.Entities;

import com.example.GOP.Area;

import java.util.ArrayList;

public class District extends Area {

    public District(ArrayList<Precinct> precincts) {
        Precincts = precincts;
    }

    public District(Integer id, String name, ArrayList<ArrayList<Double>> coordinates, DemographicData demographicData, ElectionData electionData, ArrayList<Precinct> precincts) {
        super(id, name, coordinates, demographicData, electionData);
        Precincts = precincts;
    }

    private ArrayList<Precinct> Precincts;
}
