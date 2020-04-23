/*global master, document*/
////////////// Controller //////////////
function ControlPanelController(){
    this.tabs = {data: new DataTab(),
                 errors: new ErrorTab(),
                 tools: new ToolTab()
                }
    this.dropdown = document.getElementById("stateSelectDropdown");
}

ControlPanelController.prototype.newArea = function(){
    for(var tab in this.tabs){
        this.tabs[tab].update();
    }
}

ControlPanelController.prototype.init = function(){
    for(var tab in this.tabs){
        this.tabs[tab].update();
    }
}

ControlPanelController.prototype.addStateOption = function(id, name){
    var newState = document.createElement("a");
    newState.className ="dropdown-item";
    newState.href = "javascript:stateSelectDropdown(" + id + ");";
    var nodeText = document.createTextNode(name);
    newState.appendChild(nodeText);
    
    this.dropdown.appendChild(newState);
}

///////////////// Data Tab ///////////////
function DataTab(){
    //// DOM Elements ////
    //Area name
    this.areaNameLabel = document.getElementById("areaName");
    //Demographic Labels
    this.populationLabel = document.getElementById("totalPopulation");
    this.malePopulationLabel = document.getElementById("malePopulation");
    this.femalePopulationLabel = document.getElementById("femalePopulation");
    this.whitePopulationLabel = document.getElementById("whitePopulation");
    this.blackPopulationLabel = document.getElementById("blackPopulation");
    this.hispanicPopulationLabel = document.getElementById("hispanicPopulation");
    this.nativePopulationLabel = document.getElementById("nativePopulation");
    this.asianPopulationLabel = document.getElementById("asianPopulation");
    this.islandPopulationLabel = document.getElementById("islandPopulation");
    this.otherRacePopulationLabel = document.getElementById("otherRacePopulation");
    this.demographicSourceLabel = document.getElementById("demographicSource");
    //Election Results Tables
    this.p2016Table = document.getElementById("p2016Table");
    this.c2016Table = document.getElementById("c2016Table");
    this.c2018Table = document.getElementById("c2018Table");    
}

DataTab.prototype.update = function(){
    var area = master.currentArea;

    if(area != null){
        this.areaNameLabel.innerHTML = area.name;

        this.populationLabel.innerHTML = area.demographicData.population;
        this.malePopulationLabel.innerHTML = area.demographicData.male;
        this.femalePopulationLabel.innerHTML = area.demographicData.female;
        this.whitePopulationLabel.innerHTML = area.demographicData.white;
        this.blackPopulationLabel.innerHTML = area.demographicData.black;
        this.hispanicPopulationLabel.innerHTML = area.demographicData.hispanic;
        this.nativePopulationLabel.innerHTML = area.demographicData.native;
        this.asianPopulationLabel.innerHTML = area.demographicData.asian;
        this.islandPopulationLabel.innerHTML = area.demographicData.island;
        this.otherRacePopulationLabel.innerHTML = area.demographicData.otherRace;

        this.p2016Table.innerHTML = area.electionData.formatAsTable("p16");
        this.c2016Table.innerHTML = area.electionData.formatAsTable("c16");
        this.c2018Table.innerHTML = area.electionData.formatAsTable("c18");
    }
}

/** Updates the area object with values from the GUI.
 *  If any changes were made, return true, otherwise return false
 */
DataTab.prototype.saveChanges = function(){
    var changed = false;
    var area = master.currentArea;
    if(area.generalData.name != this.areaNameLabel.innerHTML){
        area.generalData.name = this.areaNameLabel.innerHTML;
        changed = true;
    }
    //Demographics//
    if(area.demographicData.population != this.populationLabel.innerHTML){
        area.demographicData.population = this.populationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.male != this.malePopulationLabel.innerHTML){
        area.demographicData.male = this.malePopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.female != this.femalePopulationLabel.innerHTML){
        area.demographicData.female = this.femalePopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.white != this.whitePopulationLabel.innerHTML){
        area.demographicData.white = this.whitePopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.white != this.blackPopulationLabel.innerHTML){
        area.demographicData.white = this.blackPopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.hispanic != this.hispanicPopulationLabel.innerHTML){
        area.demographicData.hispanic = this.hispanicPopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.native != this.nativePopulationLabel.innerHTML){
        area.demographicData.native = this.nativePopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.asian != this.asianPopulationLabel.innerHTML){
        area.demographicData.asian = this.asianPopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.island != this.islandPopulationLabel.innerHTML){
        area.demographicData.island = this.islandPopulationLabel.innerHTML;
        changed = true;
    }
    if(area.demographicData.otherRace != this.otherRacePopulationLabel.innerHTML){
        area.demographicData.otherRace = this.otherRacePopulationLabel.innerHTML;
        changed = true;
    }
    //Elections//
    if(area.electionData.p16.compareTo(electionFromTable(this.p2016Table.innerHTML))){
        area.electionData.p16 = electionFromTable(this.p2016Table.innerHTML);
        changed = true;
    }
    if(area.electionData.c16.compareTo(electionFromTable(this.c2016Table.innerHTML))){
        area.electionData.c16 = electionFromTable(this.c2016Table.innerHTML);
        changed = true;
    }
    if(area.electionData.c18.compareTo(electionFromTable(this.c2018Table.innerHTML))){
        area.electionData.c18 = electionFromTable(this.c2018Table.innerHTML);
        changed = true;
    }
    return changed;
}
///////////////// Error Tab //////////////////
function ErrorTab(){

}

ErrorTab.prototype.update = function(){

}

//////////////// Tool Tab ///////////////////
function ToolTab(){
    //Filters:
    this.showDistricts = true;
    this.showPrecincts = true;
    this.showGhosts = true;
    this.highlightNeighbors = true;

    //checkboxes
    this.showDistrictsBox = document.getElementById("showDistrictsCheck");
    this.showPrecinctsBox = document.getElementById("showPrecinctsCheck");
    this.showGhostsBox = document.getElementById("showGhostsCheck");
    this.highlightNeighborsBox = document.getElementById("highlightNeighborsCheck");
}

ToolTab.prototype.update = function(){
    this.showDistricts = this.showDistrictsBox.checked;
    this.showPrecincts = this.showPrecinctsBox.checked;
    this.showGhosts = this.showGhostsBox.checked;
    this.highlightNeighbors = this.highlightNeighborsBox.checked;
}