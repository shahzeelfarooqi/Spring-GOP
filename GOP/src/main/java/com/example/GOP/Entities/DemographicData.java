package com.example.GOP.Entities;

public class DemographicData {

    public DemographicData(int population, int male, int female, int white, int black, int hispanic, int nativeAm, int asian, int island, int otherRace) {
        this.population = population;
        this.male = male;
        this.female = female;
        this.white = white;
        this.black = black;
        this.hispanic = hispanic;
        this.nativeAm = nativeAm;
        this.asian = asian;
        this.island = island;
        this.otherRace = otherRace;
    }

    private int population;

    private int male;

    private int female;

    private int white;

    private int black;

    private int hispanic;

    private int nativeAm;

    private int asian;

    private int island;

    private int otherRace;

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public int getMale() {
        return male;
    }

    public void setMale(int male) {
        this.male = male;
    }

    public int getFemale() {
        return female;
    }

    public void setFemale(int female) {
        this.female = female;
    }

    public int getWhite() {
        return white;
    }

    public void setWhite(int white) {
        this.white = white;
    }

    public int getBlack() {
        return black;
    }

    public void setBlack(int black) {
        this.black = black;
    }

    public int getHispanic() {
        return hispanic;
    }

    public void setHispanic(int hispanic) {
        this.hispanic = hispanic;
    }

    public int getNativeAm() {
        return nativeAm;
    }

    public void setNativeAm(int nativeAm) {
        this.nativeAm = nativeAm;
    }

    public int getAsian() {
        return asian;
    }

    public void setAsian(int asian) {
        this.asian = asian;
    }

    public int getIsland() {
        return island;
    }

    public void setIsland(int island) {
        this.island = island;
    }

    public int getOtherRace() {
        return otherRace;
    }

    public void setOtherRace(int otherRace) {
        this.otherRace = otherRace;
    }
}
