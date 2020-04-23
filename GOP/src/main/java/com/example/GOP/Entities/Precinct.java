package com.example.GOP.Entities;

import com.example.GOP.Area;
import com.example.GOP.Entities.DemographicData;
import com.example.GOP.Entities.ElectionData;
import com.example.GOP.Entities.ErrorData;

import java.util.ArrayList;
import java.util.List;

public class Precinct extends Area {

    public Precinct(Integer id, String name, ArrayList<ArrayList<Double>> coordinates, DemographicData demographicData, ElectionData electionData, String canonicalName, List<Integer> neighborsIDs, int stateID, List<ErrorData> errorsList, boolean isGhost) {
        super(id, name, coordinates, demographicData, electionData);
        this.canonicalName = canonicalName;
        this.stateID = stateID;
        this.neighborsIds = neighborsIds;
        this.errorsList = errorsList;
        this.isGhost = isGhost;
    }

    private String canonicalName;

    private List<Integer> neighborsIds;

    private int stateID;

    private List<ErrorData> errorsList;

    private boolean isGhost;

    public void toggleNeighbor(int otherID) {

    }

    public void initGhost() {
        this.isGhost = true;
    }

    public void absorbPrecinct(int areaID) {
        //merge the boundaries
        //delete the other precinct

    }

}
