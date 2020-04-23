package com.example.GOP;

import com.example.GOP.Entities.DemographicData;
import com.example.GOP.Entities.ElectionData;

import java.util.ArrayList;

//@Entity
//@Table(name = "Areas")
public abstract class Area {

    public Area() {

    }

    public Area(Integer id, String name, ArrayList<ArrayList<Double>> coordinates, DemographicData demographicData, ElectionData electionData) {
        this.areaId = id;
        this.name = name;
        this.coordinates = coordinates;
        this.demographicData = demographicData;
        this.electionData = electionData;
    }

//        @Id
//    @Column(name="AreaId")
    private Integer areaId;

//    @Column(name="Name")
    private String name;

//    @Column(name = "Boundary")
    private ArrayList<ArrayList<Double>> coordinates;

    private DemographicData demographicData;

    private ElectionData electionData;


    //GETTERS AND SETTERS FOR AREA

    public Integer getId() {
        return areaId;
    }

    public void setId(Integer id) {
        areaId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<ArrayList<Double>> getBoundary() {
        return coordinates;
    }

    public void setCoordinates(ArrayList<ArrayList<Double>> geometry) {
        this.coordinates = geometry;
    }

    public DemographicData getDemographicData() {
        return demographicData;
    }

    public void setDemographicData(DemographicData demographicData) {
        this.demographicData = demographicData;
    }

    public ElectionData getElectionData() {
        return electionData;
    }

    public void setElectionData(ElectionData electionData) {
        this.electionData = electionData;
    }
}
