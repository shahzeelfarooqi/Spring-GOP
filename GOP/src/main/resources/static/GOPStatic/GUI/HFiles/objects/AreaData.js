/////////////////// Area Data ///////////////////
/** Class containing all data related to a given geographic area to use in all tabs.
 */
function AreaData(){
    this.areaId; // id of area
    this.name; // string name of area
    this.state; // areaID of the state containing this precinct or district, null if this is a state
    this.children = []; // list of areaIDs of children areas
    this.areaType; // string from {"STATE", "DISTRICT", "PRECINCT"}
    this.electionData = new ElectionData(); //election results tab
    this.demographicData = new DemographicData(); // demographics tab
    
    //Precinct Specific Stuff
    this.district; // the areaID of the district containing this precinct
    this.canonicalName; // canonicalName for the precinct in case of shared names
    this.neighbors; // list of areaIDs of neighboring precincts
    this.errorsList; // list of errorIDs for this precinct
    this.isGhost; // true or false if this is a ghost precinct
}

////////////////// Election Data ////////////////////
/** Class representing all of the election data of the area */
function ElectionData(){
    this.p16 = {democrat:null,republican:null,other:null};
    this.c16 = {democrat:null,republican:null,other:null};
    this.c18 = {democrat:null,republican:null,other:null};
}

/** returns a string with the formatting of the given election as an html table */
ElectionData.prototype.formatAsTable = function(election){
    return election;
}

//////////////// Demographics ///////////////////
/** Class representing the demographics of a given area */
function DemographicData(){
    this.population = 0;
    
    this.male = 0;
    this.female = 0;
    
    this.white = 0;
    this.black = 0;
    this.hispanic = 0;
    this.native = 0;
    this.asian = 0;
    this.island = 0;
    this.otherRace = 0;
}
////////////////  ///////////////////