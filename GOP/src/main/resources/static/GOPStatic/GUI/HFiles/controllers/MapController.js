/*global master*/
function MapController(){
    this.map;
    this.drawLayerGroup;
    
    this.initialPosition = [37,-76];//[lat,long]
    this.initialZoom = 5;
}

MapController.prototype.init = function(){
    //initialize map to initial location etc.
    this.map = L.map("map").setView(this.initialPosition, this.initialZoom);
    L.tileLayer("https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=Y8AdEtyxI6hcWen3em8Q", {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(this.map);
    
    this.drawLayerGroup = L.layerGroup().addTo(this.map);
}

/** Adds the given boundary to the map and returns its layerId for future use. */
MapController.prototype.addBoundary = function(feature, areaId){
    var newLayer = L.geoJson(feature);
    newLayer.areaId = areaId;
    
    newLayer.on('click', function(e){
        master.controllers.mapController.polygonClicked(e.target.areaId);
    })
    this.drawLayerGroup.addLayer(newLayer);
    return newLayer.areaId;
}

MapController.prototype.removeBoundary = function(areaId){
    this.getLayer(areaId).remove();
}

MapController.prototype.newArea = function(){
    this.map.fitBounds(this.getLayer(master.currentArea.areaId).getBounds())
}

MapController.prototype.getLayer = function(areaId){
    var result;
    this.drawLayerGroup.eachLayer(function(layer){
        if(layer.areaId == areaId){
            result = layer;
        }
    })
    return result;
}

MapController.prototype.polygonClicked = function(areaId){
    master.selectArea(areaId);
}
