function MasterController(){
    this.controllers = {
        controlPanel: new ControlPanelController(),
        mapController: new MapController(),
        dataController: new DataController()
    }

    this.states = [];
    this.allAreas = [];
    this.allErrors = [];

    this.currentState = null;//The current state being worked on by the user, should always be the state containing currentArea or currentArea itself
    this.currentArea = null;//The current area being selected by the user, to be used by all modules.
}

/** Startup initialization for MasterController, triggering all child init calls */
MasterController.prototype.init = function(){
    for(var c in this.controllers){
        this.controllers[c].init();
    }
}

MasterController.prototype.switchArea = function(areaId){
    var newArea = this.getArea(areaId);
    this.currentArea = newArea;

    this.controllers.controlPanel.newArea();
    this.controllers.mapController.newArea();
}

MasterController.prototype.addInitialState = function(area, geo){
    this.states.push(area.areaId);
    this.allAreas.push(area);
    this.controllers.controlPanel.addStateOption(area.areaId, area.name);
    this.controllers.mapController.addBoundary(geo, area.areaId);
}

MasterController.prototype.getArea = function(areaId){
    for(var i = 0; i < this.allAreas.length; i++){
        if(this.allAreas[i].areaId == areaId)
            return this.allAreas[i];
    }
    return null;
}

MasterController.prototype.selectArea = function(areaId){
    if(this.states.includes(areaId)){
        this.selectState(areaId);
    }
    else{
        this.switchArea(areaId)
    }
}

MasterController.prototype.selectState = function(stateId){
    this.controllers.dataController.selectState(stateId);
    this.currentState = stateId;
    this.currentArea = this.getArea(stateId);
    this.controllers.mapController.newArea();
    this.controllers.controlPanel.newArea();
}

MasterController.prototype.addArea = function(area, geo){
    if(this.getArea(area.areaId) == null){
        this.allAreas.push(area);
        this.controllers.mapController.addBoundary(geo, area.areaId);
    }
    else{
        this.removeArea(area.areaId);
        this.allAreas.push(area);
        this.controllers.mapController.addBoundary(geo, area.areaId);
    }
}

MasterController.prototype.removeArea = function(areaId){
    for(var i = 0; i < this.allAreas.length; i++){
        if(this.allAreas[i].areaId == areaId){
            this.controllers.mapController.removeBoundary(this.allAreas[i].areaId);
            this.allAreas.splice(i,1);
        }
    }
}