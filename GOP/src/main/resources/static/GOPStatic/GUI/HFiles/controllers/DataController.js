/*global master*/
/** Controller responsible for making all calls to the server hosting the application
 *  This includes requests for data as well as calls to change the data.
 *  Many or all of these functions are transactional in nature and will return
 *  'true' or 'fasle' accordingly if the desired outcome was achieved*/
function DataController(){
    this.masterUrl;
    this.temp;
    this.stateId;
}

/** Initial call to server to populate the application with top level state data.
 *  This data will be in the form of GeoJSON objects with only:
 *  areaId and name properties and the boundary in the geometry field.*/
DataController.prototype.init = function(){
    //TEMPORARY LOADING OF SINGLE JSON FILE, SHOULD BE REPLACED WITH SERVER CALL TO STARTUP
    $.get('GOPStatic/GUI/HFiles/files/bigTest.geojson', function(geo) {


        var data = JSON.parse(geo);
        var area = new AreaData();

        var s = data.features[0];

        area.areaId = s.properties.areaId;
        area.name = s.properties.name;

        master.controllers.dataController.temp = data;

        master.addInitialState(area, s.geometry);
    });
}

/** Requests all data for the given state whose id is stateId
 *  This includes all of the precinct and district data contained within the state */
DataController.prototype.selectState = function(stateId){
    this.stateId = -1;
    for(var d in this.temp.features){
        this.addNewArea(this.temp.features[d]);
    }
    if(this.stateId > 0)
        return this.stateId;
}

DataController.prototype.addNewArea = function(data){
    var area = new AreaData();
    var p = data.properties;
    area.areaId = p.areaId;
    area.name = p.name;
    area.state = p.state;
    area.areaType = p.areaType;

    area.electionData.p16 = p.electionData.p16;
    area.electionData.c16 = p.electionData.c16;
    area.electionData.c18 = p.electionData.c18;

    area.demographicData = p.demographicData;

    for(var c in p.children){
        area.children.push(p.children[c]);
    }

    if(data.areaType == "PRECINCT"){
        area.district = p.district;
        area.canonicalName = p.canonicalName;
        area.neighbors = p.neighbors;
        area.errorsList = p.errorsList;
        area.isGhost = p.isGhost;
    }

    master.addArea(area, data.geometry);
    
    if(area.areaType == "STATE")
        this.stateId = area.areaId;
}

/** Makes a call to merge the two precincts given by precinctId1 and precinctId2 */
DataController.prototype.mergePrecincts = function(precinctId1, precinctId2){
}

/** Makes a call to update the servers copy of the given precincts boundary */
DataController.prototype.changeBoundary = function(precinctId){}

/** Makes a call to update the servers copy of the given precincts numerical data */
DataController.prototype.changeData = function(){}

/** Makes a call to the server to initialize a ghost precinct as a real one.
 *  If successful, the precinct will become editable with numerical data set to 0 */
DataController.prototype.initGhost = function(){}

/** Makes a call to the server to flip these two precincts neighbor values
 *  ie. If they are not already neighbors, make them neighbors
 *  and If they are already neighbors, make them not neighbors */
DataController.prototype.toggleNeighbors = function(){}
