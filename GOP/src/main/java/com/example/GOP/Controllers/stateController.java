package com.example.GOP.Controllers;

import com.example.GOP.*;
import com.example.GOP.Entities.*;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class stateController {

    @RequestMapping("/selectState")
    public String selectState(@RequestParam("id") Integer stateID) {
        //entitymanager get state



        //stateAsJSON.
        //return "\" \" +stateAsJSON;

        DemographicData PADemographicData = new DemographicData(5420000, 11,12,13,14,15,16,17,18,19);

        DemographicData PADistrict1DemographicData = new DemographicData(54460000, 1,12,13,14,15,16,17,18,19);
        DemographicData PADistrict2DemographicData = new DemographicData(99460000, 1,12,13,14,15,16,17,18,19);

        DemographicData PAPrecinct1DemographicData = new DemographicData(12340000, 1,12,13,14,15,16,17,18,19);
        DemographicData PAPrecinct2DemographicData = new DemographicData(67890000, 1,12,13,14,15,16,17,18,19);

        HashMap<String, Integer> p16 = new HashMap<String, Integer>();
        p16.put("Democrat", 51);
        p16.put("Republican", 49);

        HashMap<String, Integer> c16 = new HashMap<String, Integer>();
        c16.put("Democrat", 30);
        c16.put("Republican", 70);

        HashMap<String, Integer> c18 = new HashMap<String, Integer>();
        c18.put("Democrat", 65);
        c18.put("Republican", 35);

        ElectionData PAElectionData = new ElectionData(p16, c16, c18);
        ElectionData PADistrict1ElectionData = new ElectionData(p16, c16, c18);
        ElectionData PADistrict2ElectionData = new ElectionData(p16, c16, c18);
        ElectionData PAPrecinct1ElectionData = new ElectionData(p16, c16, c18);
        ElectionData PAPrecinct2ElectionData = new ElectionData(p16, c16, c18);

        ArrayList<ArrayList<Double>> coordinates = new ArrayList<ArrayList<Double>>();
        ArrayList<Double> coordinate1 = new ArrayList<Double>();
        ArrayList<Double> coordinate2 = new ArrayList<Double>();

        coordinate1.add(-75.415041); coordinate1.add(39.801786);
        coordinate2.add(-75.428038); coordinate2.add(39.809212);
        coordinates.add(coordinate1); coordinates.add(coordinate2);

        ArrayList<Integer> neighborsIDs = new ArrayList<Integer>();
        neighborsIDs.add(15);
        neighborsIDs.add(16);

        ErrorData precinct14ErrorData1 = new ErrorData(100, ErrorType.GAP, 14, "GAP ERROR");
        ErrorData precinct14ErrorData2 = new ErrorData(101, ErrorType.ENCLOSED, 14, "ENCLOSED ERROR");

        ErrorData precinct15ErrorData1 = new ErrorData(102, ErrorType.GAP, 14, "GAP ERROR");
        ErrorData precinct15ErrorData2 = new ErrorData(103, ErrorType.OVERLAPPING, 14, "OVERLAPPING ERROR");

        ArrayList<ErrorData> precinct14ErrorData = new ArrayList<ErrorData>();
        precinct14ErrorData.add(precinct14ErrorData1); precinct14ErrorData.add(precinct14ErrorData2);

        ArrayList<ErrorData> precinct15ErrorData = new ArrayList<ErrorData>();
        precinct15ErrorData.add(precinct15ErrorData1); precinct15ErrorData.add(precinct15ErrorData2);


        Precinct PADistrict1Precinct1 = new Precinct(14, "PADistrict1Precinct1", coordinates, PAPrecinct1DemographicData, PAPrecinct1ElectionData, "PADistrict1Precinct1", neighborsIDs, 1, precinct14ErrorData, false);
        Precinct PADistrict1Precinct2 = new Precinct(15, "PADistrict1Precinct2", coordinates, PAPrecinct1DemographicData, PAPrecinct1ElectionData, "PADistrict1Precinct2", neighborsIDs, 1, precinct15ErrorData, false);

        ArrayList<Precinct> PADistrict1Precincts = new ArrayList<Precinct>();
        PADistrict1Precincts.add(PADistrict1Precinct1);
        PADistrict1Precincts.add(PADistrict1Precinct2);

        ArrayList<Precinct> PADistrict2Precincts = PADistrict1Precincts;



        District PADistrict1 = new District(10, "PADistrict1", coordinates, PADistrict1DemographicData, PADistrict1ElectionData, PADistrict1Precincts);
        District PADistrict2 = new District(11, "PADistrict2", coordinates, PADistrict2DemographicData, PADistrict2ElectionData, PADistrict2Precincts);

        ArrayList<District> PADistricts = new ArrayList<District>();
        PADistricts.add(PADistrict1); PADistricts.add(PADistrict2);

        State Pennsylvania = new State(1, "Pennsylvania", coordinates, PADemographicData, PAElectionData, PADistricts);

        State Virginia =  new State(2, "Virginia", new ArrayList<ArrayList<Double>>(), new DemographicData(0,0,0,0,0,0,0,0,0,0), new ElectionData(), new ArrayList<District>());

        State Wisconsin =  new State(3, "Wisconsin", coordinates, new DemographicData(5629102,48,51,70,20,10,5,2,2,1), PADistrict1ElectionData, new ArrayList<District>());



        Gson gson = new Gson();
        String stateAsJSON = gson.toJson(new State(stateID, "Does not exist", new ArrayList<ArrayList<Double>>(), new DemographicData(0,0,0,0,0,0,0,0,0,0), new ElectionData(), new ArrayList<District>()));

        if(stateID == 1) {
            stateAsJSON = gson.toJson(Pennsylvania);
        }
        else if(stateID == 2) {
            stateAsJSON = gson.toJson(Virginia);

        }
        else if(stateID == 3) {
            stateAsJSON = gson.toJson(Wisconsin);

        }
        System.out.println(stateAsJSON);
        return stateAsJSON;


    }

}
